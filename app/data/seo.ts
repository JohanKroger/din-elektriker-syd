import type { Metadata } from "next";
import { company, navigation, siteUrl } from "./company";

export function pageMeta(
	heading: string,
	description: string,
	path: string,
): Metadata {
	const url = siteUrl ? siteUrl + path : undefined;
	return {
		...(path !== "/" && {
			title: navigation.find(([href]) => href === path)?.[1] ?? heading,
		}),
		description,
		alternates: url ? { canonical: url } : undefined,
		openGraph: {
			title: `${heading} | ${company.name}`,
			description,
			locale: "sv_SE",
			type: "website",
			siteName: company.name,
			url,
			images: siteUrl ? [`${siteUrl}/logotyp.png`] : undefined,
		},
	};
}
