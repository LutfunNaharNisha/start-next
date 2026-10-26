import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { formatDate, type Blog } from "@/lib/blogs";

export function FeaturedPost({ blog }: { blog: Blog }) {
	return (
		<Link href={`/blogs/${blog.slug}`} className="group block">
			<Card className="gap-0 overflow-hidden p-0 ring-1 ring-primary/20 transition-colors group-hover:ring-primary/50 md:grid md:grid-cols-2">
				<div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-auto md:h-full md:min-h-72">
					<Image
						src={blog.banner}
						alt=""
						fill
						priority
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
					/>
				</div>

				<div className="flex flex-col justify-between gap-6 bg-accent/30 p-8">
					<CardHeader className="gap-4 p-0">
						<div className="flex flex-wrap items-center gap-2">
							<Badge>Featured</Badge>
							<Badge variant="secondary">{blog.category}</Badge>
							<span className="flex items-center gap-1.5 text-xs text-muted-foreground">
								<Clock className="size-3.5" />
								{blog.read_time_minutes} min read
							</span>
						</div>

						<h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
							{blog.title}
						</h2>

						<p className="text-sm text-muted-foreground sm:text-base">
							{blog.summary}
						</p>

						<div className="flex flex-wrap gap-1.5">
							{blog.tags.map((tag) => (
								<Badge key={tag} variant="outline" className="font-normal">
									{tag}
								</Badge>
							))}
						</div>
					</CardHeader>

					<CardFooter className="justify-between border-t-0 p-0 text-xs text-muted-foreground">
						<span className="flex items-center gap-2">
							<span className="relative size-6 shrink-0 overflow-hidden rounded-full ring-1 ring-foreground/10">
								<Image
									src={blog.icon}
									alt=""
									fill
									sizes="24px"
									className="object-cover"
								/>
							</span>
							{blog.author} · {formatDate(blog.date)}
						</span>
						<span className="flex items-center gap-1.5 font-medium text-foreground transition-colors group-hover:text-primary">
							Read the post
							<ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
						</span>
					</CardFooter>
				</div>
			</Card>
		</Link>
	);
}
