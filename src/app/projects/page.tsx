import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
	title: "Projects",
	description: "Practice projects built inside this sandbox.",
};

const projects = [
	{
		slug: "navbar",
		title: "Site navbar",
		summary:
			"Sticky header with active-link detection, a Sheet for mobile and a footer.",
		status: "Done",
	},
	{
		slug: "forms",
		title: "Forms & validation",
		summary:
			"Server Actions with typed form state and inline field errors.",
		status: "Planned",
	},
	{
		slug: "data-fetching",
		title: "Data fetching",
		summary: "Async Server Components, caching and revalidation tags.",
		status: "Planned",
	},
	{
		slug: "theme",
		title: "Dark mode",
		summary: "Theme toggle with next-themes and CSS variables.",
		status: "Done",
	},
];

export default function ProjectsPage() {
	return (
		<div className="mx-auto w-full max-w-5xl px-6 py-16">
			<header className="mb-10 flex flex-col gap-3">
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
					Projects
				</h1>
				<p className="max-w-xl text-muted-foreground">
					Everything I build while practicing lives here.
				</p>
			</header>

			<div className="grid gap-6 sm:grid-cols-2">
				{projects.map((project) => (
					<Card key={project.slug}>
						<CardHeader>
							<div className="flex items-start justify-between gap-3">
								<CardTitle>{project.title}</CardTitle>
								<Badge
									variant={
										project.status === "Done"
											? "default"
											: "secondary"
									}
								>
									{project.status}
								</Badge>
							</div>
							<CardDescription>{project.summary}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</div>
	);
}
