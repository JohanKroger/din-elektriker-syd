import type { ReactNode } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Sections";
import { company, siteUrl } from "./data/company";
import "./globals.css";

const business = {
	"@context": "https://schema.org",
	"@type": "Electrician",
	name: company.name,
	url: siteUrl || undefined,
	telephone: company.phone || undefined,
	email: company.email || undefined,
	areaServed: {
		"@type": "Place",
		name: "Södra Sandby med omnejd, cirka 60 km",
	},
};
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="sv">
			<body>
				<a href="#innehall" className="skip">
					Till innehållet
				</a>
				<Header />
				<main id="innehall">{children}</main>
				<Footer />
				<script type="application/ld+json">
					{JSON.stringify(business).replace(/</g, "\\u003c")}
				</script>
			</body>
		</html>
	);
}
