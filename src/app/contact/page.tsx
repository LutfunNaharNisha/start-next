import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch.",
};

export default function ContactPage() {
	return (
		<div className="mx-auto w-full max-w-2xl px-6 py-16">
			<header className="mb-10 flex flex-col gap-3">
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
					Contact
				</h1>
				<p className="text-muted-foreground">
					The form is a visual placeholder — Server Actions come next.
				</p>
			</header>

			<Card>
				<CardHeader>
					<CardTitle className="text-base">Send a message</CardTitle>
					<CardDescription>I usually reply within a day.</CardDescription>
				</CardHeader>
				<CardContent>
					<form className="flex flex-col gap-5">
						<div className="grid gap-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" name="name" placeholder="Your name" />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="you@example.com"
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								name="message"
								rows={5}
								placeholder="What's on your mind?"
							/>
						</div>
						<Button type="button" className="self-start">
							Send
						</Button>
					</form>
				</CardContent>
			</Card>

			<div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground">
				<div className="flex items-center gap-2">
					<Mail className="size-4 text-primary" />
					<span>hello@example.com</span>
				</div>
				<div className="flex items-center gap-2">
					<MapPin className="size-4 text-primary" />
					<span>Dhaka, Bangladesh</span>
				</div>
			</div>
		</div>
	);
}
