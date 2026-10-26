import type { Metadata } from "next";

import { BlogList } from "@/components/blog-list";
import { Badge } from "@/components/ui/badge";
import { blogs } from "@/lib/blogs";

export const metadata: Metadata = {
	title: "Blogs",
	description: "Notes on building for the web, design and productivity.",
};

export default function BlogsPage() {
	return (
		<div className="mx-auto w-full max-w-6xl px-6 py-16">
			<header className="mb-10 flex flex-col gap-4">
				<Badge variant="outline" className="w-fit">
					{blogs.length} posts
				</Badge>
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
					Blogs
				</h1>
				<p className="max-w-xl text-muted-foreground">
					Notes on building for the web, design and productivity.
				</p>
			</header>

			<BlogList blogs={blogs} />
		</div>
	);
}
