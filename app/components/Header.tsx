"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { company, navigation, phoneHref } from "../data/company";
import { Icon } from "./Icon";
export function Header() {
	const path = usePathname();
	const [open, setOpen] = useState(false);
	const toggle = useRef<HTMLButtonElement>(null);
	useEffect(() => {
		if (!open) return;
		document.querySelector<HTMLAnchorElement>("#huvudmeny a")?.focus();
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
				toggle.current?.focus();
			}
		};
		document.addEventListener("keydown", closeOnEscape);
		return () => document.removeEventListener("keydown", closeOnEscape);
	}, [open]);
	return (
		<header className="header">
			<div className="wrap header-row">
				<a href="/" className="logo">
					<Image
						src="/logotyp.png"
						width={2048}
						height={1194}
						alt={`${company.name} – startsida`}
						priority
					/>
				</a>
				<nav
					id="huvudmeny"
					className={open ? "nav open" : "nav"}
					aria-label="Huvudmeny"
				>
					{navigation.map(([href, label]) => (
						<a
							key={href}
							href={href}
							aria-current={path === href ? "page" : undefined}
						>
							{label}
						</a>
					))}
				</nav>
				<div className="header-actions">
					<a className="button small" href={phoneHref || "/kontakt"}>
						<Icon name={phoneHref ? "phone" : "mail"} size={16} />
						{phoneHref ? "Ring Johan" : "Kontakta oss"}
					</a>
					<button
						ref={toggle}
						type="button"
						className="toggle"
						aria-controls="huvudmeny"
						aria-expanded={open}
						aria-label={open ? "Stäng meny" : "Öppna meny"}
						onClick={() => setOpen(!open)}
					>
						<Icon name={open ? "close" : "menu"} />
					</button>
				</div>
			</div>
		</header>
	);
}
