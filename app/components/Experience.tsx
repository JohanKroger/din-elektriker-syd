"use client";

import { useEffect, useState } from "react";

const startDate = "2011-11-09";
const stockholmDate = new Intl.DateTimeFormat("sv-SE", {
	timeZone: "Europe/Stockholm",
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
});

export function Experience({ duration = false }: { duration?: boolean }) {
	const [years, setYears] = useState<number | null>(null);
	useEffect(() => {
		function update() {
			const today = stockholmDate.format(new Date());
			const elapsed = Number(today.slice(0, 4)) - Number(startDate.slice(0, 4));
			setYears(elapsed - Number(today.slice(5) < startDate.slice(5)));
		}
		update();
		const timer = window.setInterval(update, 60_000);
		window.addEventListener("pageshow", update);
		return () => {
			window.clearInterval(timer);
			window.removeEventListener("pageshow", update);
		};
	}, []);

	if (years === null) return duration ? "sedan 2011" : "Erfarenhet sedan 2011";
	return duration ? `i ${years} år` : `${years} års erfarenhet`;
}
