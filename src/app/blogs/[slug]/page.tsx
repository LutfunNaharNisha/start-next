import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";

import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	blogs,
	formatDate,
	getBlogBySlug,
	getRelatedPosts,
} from "@/lib/blogs";

import type { Metadata } from "next";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
	return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);

	if (!blog) return { title: "Post not found" };

	return {
		title: blog.title,
		description: blog.summary,
		openGraph: { images: [blog.banner] },
	};
}

export default async function BlogPostPage({ params }: PageProps) {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);

	if (!blog) notFound();

	const related = getRelatedPosts(blog);

	return (
		<div className="mx-auto w-full max-w-3xl px-6 py-16">
			<Button
				variant="ghost"
				size="sm"
				className="-ml-2.5 mb-8"
				render={<Link href="/blogs" />}
			>
				<ArrowLeft className="size-4" />
				All posts
			</Button>

			<div className="relative aspect-[2/1] w-full overflow-hidden ring-1 ring-foreground/10">
				<Image
					src={blog.banner}
					alt=""
					fill
					priority
					sizes="(max-width: 768px) 100vw, 768px"
					className="object-cover"
				/>
			</div>

			<article className="mt-10">
				<header className="flex flex-col gap-4">
					<div className="flex flex-wrap items-center gap-2">
						<Badge variant="secondary">{blog.category}</Badge>
						<span className="flex items-center gap-1.5 text-xs text-muted-foreground">
							<Clock className="size-3.5" />
							{blog.read_time_minutes} min read
						</span>
					</div>

					<h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
						{blog.title}
					</h1>

					<div className="flex items-center gap-3 text-sm text-muted-foreground">
						<span className="relative size-9 shrink-0 overflow-hidden rounded-full ring-1 ring-foreground/10">
							<Image
								src={blog.icon}
								alt=""
								fill
								sizes="36px"
								className="object-cover"
							/>
						</span>
						<span>
							{blog.author} · {formatDate(blog.date)}
						</span>
					</div>
				</header>

				<Separator className="my-8" />

				<p className="text-base leading-relaxed font-medium text-balance">
					{blog.summary}
				</p>

				<p className="mt-4 text-base leading-relaxed text-muted-foreground">
					This is placeholder body copy — the full article comes later when we
					practice pulling content from MDX files or a CMS. The route is
					dynamic and typed: the slug is awaited from <code>params</code>,
					unknown slugs call <code>notFound()</code>, and every post is
					prerendered via <code>generateStaticParams</code>.
				</p>

				<div className="mt-8 flex flex-wrap gap-1.5">
					{blog.tags.map((tag) => (
						<Badge key={tag} variant="outline" className="font-normal">
							{tag}
						</Badge>
					))}
				</div>
			</article>

			{related.length > 0 && (
				<section className="mt-16">
					<Separator className="mb-8" />
					<h2 className="mb-6 text-lg font-semibold tracking-tight">
						Keep reading
					</h2>
					<div className="grid gap-6 sm:grid-cols-2">
						{related.slice(0, 2).map((item) => (
							<BlogCard key={item.id} blog={item} />
						))}
					</div>
				</section>
			)}
		</div>
	);
}
