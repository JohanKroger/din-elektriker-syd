export const company = {
	name: "Din Elektriker Syd AB",
	person: "Johan Kröger",
	phone: "",
	email: "",
	organizationNumber: "",
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
