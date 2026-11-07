import type { MetadataRoute } from "next";
import { navigation, siteUrl } from "./data/company";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
	return siteUrl ? navigation.map(([path]) => ({ url: siteUrl + path })) : [];
}
