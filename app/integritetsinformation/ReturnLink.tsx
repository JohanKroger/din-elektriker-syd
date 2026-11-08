"use client";

import { useEffect, useState } from "react";
import { navigation } from "../data/company";

export function ReturnLink() {
	const [previous, setPrevious] = useState<(typeof navigation)[number]>(
		navigation[0],
	);
	useEffect(() => {
		if (!document.referrer) return;
		const source = new URL(document.referrer);
		if (source.origin !== window.location.origin) return;
		const page = navigation.find(
			([path]) => path === (source.pathname.replace(/\/$/, "") || "/"),
		);
		if (page) setPrevious(page);
	}, []);

	return (
		<a className="text-link" href={previous[0]}>
			<span aria-hidden="true">←</span>{" "}
			{previous[0] === "/" ? "Till startsidan" : `Tillbaka till ${previous[1]}`}
		</a>
	);
}
