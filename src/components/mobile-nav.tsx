"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function MobileNav() {
	const pathname = usePathname();

	return (
		<nav className="flex flex-col gap-1">
			{siteConfig.nav.map((item) => {
				const isActive =
					item.href === "/"
						? pathname === "/"
						: pathname.startsWith(item.href);

				return (
					<Link
						key={item.href}
						href={item.href}
						aria-current={isActive ? "page" : undefined}
						className={cn(
							"rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
							isActive
								? "bg-accent text-accent-foreground"
								: "text-muted-foreground hover:bg-muted hover:text-foreground"
						)}
					>
						{item.title}
					</Link>
				);
			})}
		</nav>
	);
}
