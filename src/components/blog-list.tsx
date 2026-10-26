"use client";

import { useMemo, useState } from "react";

import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import type { Blog } from "@/lib/blogs";

export function BlogList({ blogs }: { blogs: Blog[] }) {
	const categories = useMemo(
		() => ["All", ...new Set(blogs.map((blog) => blog.category))],
		[blogs]
	);

	const [active, setActive] = useState("All");

	const visible = useMemo(
		() =>
			active === "All"
				? blogs
				: blogs.filter((blog) => blog.category === active),
		[blogs, active]
	);

	const countFor = (category: string) =>
		category === "All"
			? blogs.length
			: blogs.filter((blog) => blog.category === category).length;

	return (
		<>
			<div className="mb-8 flex flex-wrap gap-2">
				{categories.map((category) => (
					<Badge
						key={category}
						render={<button type="button" />}
						variant={category === active ? "default" : "secondary"}
						aria-pressed={category === active}
						onClick={() => setActive(category)}
						className="cursor-pointer gap-1.5"
					>
						{category}
						<span className="opacity-60">{countFor(category)}</span>
					</Badge>
				))}
			</div>

			{visible.length > 0 ? (
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{visible.map((blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
			) : (
				<p className="border border-dashed p-10 text-center text-sm text-muted-foreground">
					No posts in this category yet.
				</p>
			)}
		</>
	);
}
