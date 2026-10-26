"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const options = [
	{ value: "light", label: "Light", icon: Sun },
	{ value: "dark", label: "Dark", icon: Moon },
	{ value: "system", label: "System", icon: Monitor },
] as const;

const emptySubscribe = () => () => {};

/**
 * True only after hydration. The server has no idea which theme is stored, so
 * rendering the real icon during SSR would cause a mismatch.
 */
function useMounted() {
	return useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false
	);
}

export function ThemeToggle() {
	const { resolvedTheme, theme, setTheme } = useTheme();
	const mounted = useMounted();

	const active =
		options.find((option) => option.value === theme) ??
		options.find((option) => option.value === resolvedTheme) ??
		options[0];

	const Icon = mounted ? active.icon : Sun;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				render={
					<Button variant="ghost" size="icon" aria-label="Toggle theme" />
				}
			>
				<Icon className="size-4" />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="min-w-36">
				{options.map(({ value, label, icon: OptionIcon }) => (
					<DropdownMenuItem
						key={value}
						onClick={() => setTheme(value)}
						className="cursor-pointer data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
						data-active={mounted && theme === value}
					>
						<OptionIcon className="size-4" />
						{label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
