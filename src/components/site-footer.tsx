import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
	return (
		<footer className="border-t bg-muted/30">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
				<p>
					&copy; {new Date().getFullYear()} {siteConfig.name}. Built with
					Next.js &amp; shadcn.
				</p>
				<nav className="flex items-center gap-5">
					{siteConfig.nav.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="transition-colors hover:text-foreground"
						>
							{item.title}
						</Link>
					))}
				</nav>
			</div>
		</footer>
	);
}
