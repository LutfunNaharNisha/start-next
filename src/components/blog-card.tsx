import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { formatDate, type Blog } from "@/lib/blogs";

export function BlogCard({ blog }: { blog: Blog }) {
	return (
		<Link href={`/blogs/${blog.slug}`} className="group block">
			<Card className="h-full gap-4 pt-0 transition-colors group-hover:border-primary/40 group-hover:bg-accent/40">
				<div className="relative aspect-[2/1] w-full overflow-hidden">
					<Image
						src={blog.banner}
						alt=""
						fill
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
					/>
				</div>

				<CardHeader className="gap-3">
					<div className="flex items-center justify-between gap-3">
						<div className="flex items-center gap-2">
							<span className="relative size-6 shrink-0 overflow-hidden rounded-full ring-1 ring-foreground/10">
								<Image
									src={blog.icon}
									alt=""
									fill
									sizes="24px"
									className="object-cover"
								/>
							</span>
							<Badge variant="secondary">{blog.category}</Badge>
						</div>
						<span className="flex items-center gap-1.5 text-xs text-muted-foreground">
							<Clock className="size-3.5" />
							{blog.read_time_minutes} min
						</span>
					</div>

					<h2 className="text-base font-semibold tracking-tight text-balance group-hover:underline group-hover:underline-offset-4">
						{blog.title}
					</h2>

					<p className="line-clamp-2 text-sm text-muted-foreground">
						{blog.summary}
					</p>

					<div className="flex flex-wrap gap-1.5">
						{blog.tags.slice(0, 3).map((tag) => (
							<Badge key={tag} variant="outline" className="font-normal">
								{tag}
							</Badge>
						))}
					</div>
				</CardHeader>

				<CardFooter className="mt-auto justify-between text-xs text-muted-foreground">
					<span className="flex min-w-0 items-center gap-2">
						<span className="relative size-5 shrink-0 overflow-hidden rounded-full ring-1 ring-foreground/10">
							<Image
								src={blog.icon}
								alt=""
								fill
								sizes="20px"
								className="object-cover"
							/>
						</span>
						<span className="truncate">
							{blog.author} · {formatDate(blog.date)}
						</span>
					</span>
					<ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
				</CardFooter>
			</Card>
		</Link>
	);
}
