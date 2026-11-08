import type { MetadataRoute } from "next";
import { navigation, siteUrl } from "./data/company";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
	const paths = [
		...navigation.map(([path]) => path),
		"/integritetsinformation",
	];
	return siteUrl ? paths.map((path) => ({ url: siteUrl + path })) : [];
}
