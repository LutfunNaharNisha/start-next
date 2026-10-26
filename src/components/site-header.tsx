import Link from "next/link";
import { GitBranch, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-6">
				{/* Mobile menu */}
				<Sheet>
					<SheetTrigger
						className="md:hidden"
						aria-label="Open menu"
						render={<Button variant="ghost" size="icon" />}
					>
						<Menu className="size-5" />
					</SheetTrigger>
					<SheetContent side="left" className="w-72">
						<SheetHeader>
							<SheetTitle className="text-lg font-semibold">
								{siteConfig.name}
							</SheetTitle>
						</SheetHeader>
						<div className="px-3 pb-6">
							<MobileNav />
						</div>
					</SheetContent>
				</Sheet>

				<Link
					href="/"
					className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-80"
				>
					{siteConfig.name}
				</Link>

				<Separator orientation="vertical" className="mx-2 hidden h-6 md:block" />

				<MainNav className="hidden md:flex" />

				<div className="ml-auto flex items-center gap-2">
					<ThemeToggle />
					<Button
						variant="outline"
						size="sm"
						render={
							<a
								href="https://github.com"
								target="_blank"
								rel="noreferrer"
							/>
						}
					>
						<GitBranch className="size-4" />
						GitHub
					</Button>
					<Button
						size="sm"
						render={<Link href="/contact" />}
					>
						Get in touch
					</Button>
				</div>
			</div>
		</header>
	);
}
