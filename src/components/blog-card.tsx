import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { formatDate, type Blog } from "@/lib/blogs";

export function BlogCard({ blog }: { blog: Blog }) {
	return (
		<Link href={`/blogs/${blog.slug}`} className="group block">
			<Card className="h-full transition-colors group-hover:border-primary/40 group-hover:bg-accent/40">
				<CardHeader>
					<div className="mb-3 flex items-center justify-between gap-3">
						<Badge variant="secondary">{blog.category}</Badge>
						<span className="flex items-center gap-1.5 text-xs text-muted-foreground">
							<Clock className="size-3.5" />
							{blog.read_time_minutes} min read
						</span>
					</div>

					<h2 className="text-lg font-semibold tracking-tight text-balance group-hover:underline group-hover:underline-offset-4">
						{blog.title}
					</h2>

					<p className="text-sm text-muted-foreground">{blog.summary}</p>

					<div className="mt-2 flex flex-wrap gap-1.5">
						{blog.tags.map((tag) => (
							<Badge key={tag} variant="outline" className="font-normal">
								{tag}
							</Badge>
						))}
					</div>
				</CardHeader>

				<CardFooter className="mt-auto justify-between text-xs text-muted-foreground">
					<span>
						{blog.author} · {formatDate(blog.date)}
					</span>
					<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
				</CardFooter>
			</Card>
		</Link>
	);
}
