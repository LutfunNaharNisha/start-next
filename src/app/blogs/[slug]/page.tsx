import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { blogs, formatDate, getBlogBySlug } from "@/lib/blogs";

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
	};
}

export default async function BlogPostPage({ params }: PageProps) {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);

	if (!blog) notFound();

	return (
		<article className="mx-auto w-full max-w-2xl px-6 py-16">
			<Button
				variant="ghost"
				size="sm"
				className="mb-8 -ml-2.5"
				render={<Link href="/blogs" />}
			>
				<ArrowLeft className="size-4" />
				All posts
			</Button>

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

				<p className="text-sm text-muted-foreground">
					{blog.author} · {formatDate(blog.date)}
				</p>
			</header>

			<Separator className="my-8" />

			<p className="text-base leading-relaxed text-muted-foreground">
				{blog.summary}
			</p>

			<p className="mt-4 text-base leading-relaxed">
				This is placeholder body copy — the full article comes later when we
				practice pulling content from MDX files or a CMS. The route is dynamic
				and typed: the slug is awaited from <code>params</code>, unknown slugs
				call <code>notFound()</code>, and every post is prerendered via{" "}
				<code>generateStaticParams</code>.
			</p>

			<div className="mt-8 flex flex-wrap gap-1.5">
				{blog.tags.map((tag) => (
					<Badge key={tag} variant="outline" className="font-normal">
						{tag}
					</Badge>
				))}
			</div>
		</article>
	);
}
