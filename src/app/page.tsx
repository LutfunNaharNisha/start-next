import Link from "next/link";
import { ArrowRight, Layers, Palette, Route } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

const highlights = [
	{
		icon: Route,
		title: "App Router",
		body: "Nested layouts, route groups and streaming — all under src/app.",
	},
	{
		icon: Palette,
		title: "Tailwind v4 + shadcn",
		body: "CSS-first design tokens and components you actually own.",
	},
	{
		icon: Layers,
		title: "Server first",
		body: "Server Components by default, Client Components only where needed.",
	},
];

export default function HomePage() {
	return (
		<>
			<section className="border-b bg-muted/30">
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-24">
					<Badge variant="outline" className="w-fit">
						{siteConfig.name}
					</Badge>
					<h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
						A playground for building things properly.
					</h1>
					<p className="max-w-xl text-lg text-muted-foreground">
						{siteConfig.description} Pick a page from the nav and start
						breaking things.
					</p>
					<div className="flex flex-wrap items-center gap-3 pt-2">
						<Button
							size="lg"
							render={<Link href="/projects" />}
						>
							See projects
							<ArrowRight className="size-4" />
						</Button>
						<Button
							size="lg"
							variant="outline"
							render={<Link href="/about" />}
						>
							About this setup
						</Button>
					</div>
				</div>
			</section>

			<section className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
				{highlights.map(({ icon: Icon, title, body }) => (
					<Card key={title}>
						<CardHeader>
							<div className="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
								<Icon className="size-5" />
							</div>
							<CardTitle className="text-base">{title}</CardTitle>
							<CardDescription>{body}</CardDescription>
						</CardHeader>
						<CardContent className="text-sm text-muted-foreground">
							Start here, then extend it your way.
						</CardContent>
					</Card>
				))}
			</section>
		</>
	);
}
