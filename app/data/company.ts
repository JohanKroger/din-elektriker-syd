export const company = {
	name: "Din Elektriker Syd AB",
	person: "Johan Kröger",
	phone: "076-101 57 17",
	email: "info@desyd.se",
	organizationNumber: "559540-7692",
	registeredOffice: "Lund",
	vatNumber: "SE559540769201",
	address: {
		streetAddress: "Skarnberga 661",
		postalCode: "247 91",
		addressLocality: "Södra Sandby",
		addressCountry: "SE",
	},
	domain: "https://desyd.se",
	registry:
		"https://elsakerhetsverket.se/kolla-elforetaget/elforetag?id=12102849",
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
	? `tel:${company.phone.replace(/[\s()-]/g, "").replace(/^0/, "+46")}`
	: undefined;
export const emailHref = company.email ? `mailto:${company.email}` : undefined;
