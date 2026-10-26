import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
	return (
		<div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 px-6 py-28 text-center">
			<Badge variant="outline" className="font-mono">
				404
			</Badge>
			<h1 className="text-3xl font-semibold tracking-tight">
				This page went missing.
			</h1>
			<p className="text-muted-foreground">
				The link may be broken, or the page may have moved.
			</p>
			<Button
				className="mt-2"
				render={<Link href="/" />}
			>
				Back home
			</Button>
		</div>
	);
}
