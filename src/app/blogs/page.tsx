import type { Metadata } from "next";

import { BlogList } from "@/components/blog-list";
import { FeaturedPost } from "@/components/featured-post";
import { Badge } from "@/components/ui/badge";
import { blogs, getFeaturedPost } from "@/lib/blogs";

export const metadata: Metadata = {
	title: "Blogs",
	description: "Notes on building for the web, design and productivity.",
};

export default function BlogsPage() {
	const featured = getFeaturedPost();

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

			<div className="mb-12">
				<FeaturedPost blog={featured} />
			</div>

			<BlogList blogs={blogs} />
		</div>
	);
}
