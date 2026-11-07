export const company = {
	name: "Din Elektriker Syd AB",
	person: "Johan Kröger",
	phone: "+46 76 101 57 17",
	email: "info@desyd.se",
	organizationNumber: "559540-7692",
	address: {
		streetAddress: "Skarnberga 661",
		postalCode: "247 91",
		addressLocality: "Södra Sandby",
		addressCountry: "SE",
	},
	// Ange den publika HTTPS-adressen före lansering. CF_PAGES_URL stöder förhandsbyggen.
	domain: "",
	registry: "https://www.elsakerhetsverket.se/kollaelforetaget/",
};
export const siteUrl = (
	company.domain ||
	process.env.CF_PAGES_URL ||
	""
).replace(/\/$/, "");
export const navigation = [
	["/", "Start"],
	["/tjanster", "Tjänster"],
	["/om-oss", "Om oss"],
	["/projekt", "Referensprojekt"],
	["/kontakt", "Kontakt"],
] as const;
export const phoneHref = company.phone
	? `tel:${company.phone.replace(/[\s()-]/g, "")}`
	: undefined;
export const emailHref = company.email ? `mailto:${company.email}` : undefined;
