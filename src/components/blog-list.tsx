"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { countByCategory, getCategories, type Blog } from "@/lib/blogs";

const fields = ["Category", "Author", "Tag"] as const;
type Field = (typeof fields)[number];

export function BlogList({ blogs }: { blogs: Blog[] }) {
	const categories = useMemo(() => ["All", ...getCategories()], []);
	const authors = useMemo(
		() => [...new Set(blogs.map((blog) => blog.author))],
		[blogs]
	);
	const tags = useMemo(
		() => [...new Set(blogs.flatMap((blog) => blog.tags))],
		[blogs]
	);

	const [field, setField] = useState<Field>("Category");
	const [selected, setSelected] = useState("All");
	const [query, setQuery] = useState("");

	const options =
		field === "Category"
			? categories
			: field === "Author"
				? ["All", ...authors]
				: ["All", ...tags];

	const visible = useMemo(() => {
		const q = query.trim().toLowerCase();

		return blogs.filter((blog) => {
			const matchesField =
				selected === "All" ||
				(field === "Category" && blog.category === selected) ||
				(field === "Author" && blog.author === selected) ||
				(field === "Tag" && blog.tags.includes(selected));

			const matchesQuery =
				q.length === 0 ||
				blog.title.toLowerCase().includes(q) ||
				blog.summary.toLowerCase().includes(q) ||
				blog.author.toLowerCase().includes(q) ||
				blog.tags.some((tag) => tag.toLowerCase().includes(q));

			return matchesField && matchesQuery;
		});
	}, [blogs, field, selected, query]);

	function changeField(next: Field) {
		setField(next);
		setSelected("All");
	}

	return (
		<>
			<div className="mb-6 flex flex-wrap gap-2">
				{fields.map((item) => (
					<Badge
						key={item}
						render={<button type="button" />}
						variant={field === item ? "default" : "outline"}
						aria-pressed={field === item}
						onClick={() => changeField(item)}
						className="cursor-pointer"
					>
						By {item}
					</Badge>
				))}
			</div>

			<div className="mb-8 flex flex-col gap-4">
				<div className="relative">
					<Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
					<Input
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Search posts, authors or tags…"
						className="h-9 pl-8"
						aria-label="Search posts"
					/>
				</div>

				<div className="flex flex-wrap gap-2">
					{options.map((option) => (
						<Badge
							key={option}
							render={<button type="button" />}
							variant={option === selected ? "default" : "secondary"}
							aria-pressed={option === selected}
							onClick={() => setSelected(option)}
							className="cursor-pointer gap-1.5"
						>
							{option}
							{field === "Category" && (
								<span className="opacity-60">
									{countByCategory(option)}
								</span>
							)}
						</Badge>
					))}
				</div>
			</div>

			<p className="mb-4 text-xs text-muted-foreground" aria-live="polite">
				Showing {visible.length} of {blogs.length} posts
			</p>

			{visible.length > 0 ? (
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{visible.map((blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
			) : (
				<div className="border border-dashed p-12 text-center">
					<p className="text-sm font-medium">No posts match that.</p>
					<p className="mt-1 text-sm text-muted-foreground">
						Try another {field.toLowerCase()}, or clear the search.
					</p>
				</div>
			)}
		</>
	);
}
