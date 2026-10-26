import type { Metadata } from "next";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
	title: "About",
	description: "What this practice project is and what it is built with.",
};

const stack = [
	["Next.js", "16.4.3 — App Router, React Compiler on"],
	["React", "19.3.0 — Server Components first"],
	["Tailwind CSS", "v4 — CSS-first tokens in globals.css"],
	["shadcn", "base-nova style · neutral · lucide icons"],
	["TypeScript", "strict mode, alias @/* → src/*"],
];

export default function AboutPage() {
	return (
		<div className="mx-auto w-full max-w-3xl px-6 py-16">
			<header className="mb-10 flex flex-col gap-3">
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
					About
				</h1>
				<p className="text-muted-foreground">
					A sandbox for practicing Next.js fundamentals — layouts, routing,
					data fetching, forms and component design — with shadcn components
					as the building blocks.
				</p>
			</header>

			<Card>
				<CardHeader>
					<CardTitle className="text-base">The stack</CardTitle>
					<CardDescription>
						What this project is actually running on.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-0 p-0">
					{stack.map(([name, detail], index) => (
						<div key={name}>
							{index > 0 && <Separator />}
							<div className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
								<span className="text-sm font-medium">{name}</span>
								<span className="text-sm text-muted-foreground">
									{detail}
								</span>
							</div>
						</div>
					))}
				</CardContent>
			</Card>
		</div>
	);
}
