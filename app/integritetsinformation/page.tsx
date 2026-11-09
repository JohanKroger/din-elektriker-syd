import { ExternalLink } from "../components/ExternalLink";
import { company } from "../data/company";
import { pageMeta } from "../data/seo";
import { ReturnLink } from "./ReturnLink";
export const metadata = pageMeta(
	"Integritetsinformation",
	"Så behandlar Din Elektriker Syd AB dina personuppgifter vid besök och kontakt.",
	"/integritetsinformation",
);
export default function Privacy() {
	return (
		<section className="wrap section">
			<div className="mx-auto max-w-3xl space-y-4">
				<ReturnLink />
				<h1 style={{ fontSize: "clamp(1.7rem, 6vw, 4rem)" }}>
					Integritetsinformation
				</h1>
				<p className="pt-2">
					{company.name} är personuppgiftsansvarigt. Du når oss på{" "}
					<a className="underline" href={`mailto:${company.email}`}>
						{company.email}
					</a>{" "}
					eller per post på {company.address.streetAddress},{" "}
					{company.address.postalCode} {company.address.addressLocality}.
				</p>
				<p>
					<strong>När du besöker webbplatsen.</strong> Cloudflare behandlar din
					IP-adress och tekniska uppgifter om anslutningen för att leverera
					sidan och skydda den mot angrepp. Webbläsaren kan också skicka
					rapporter om anslutningsfel till Cloudflare. Grunden är vårt
					berättigade intresse av en säker och tillgänglig webbplats.
				</p>
				<p>
					Behovet av tekniska uppgifter beror på om de behövs för att felsöka
					anslutningen eller utreda en säkerhetshändelse. Cloudflare kan
					behandla uppgifter utanför EU/EES. I Cloudflares dataskyddsvillkor
					beskrivs skyddet för överföringar, bland annat EU:s beslut om adekvat
					skyddsnivå och standardavtalsklausuler. Kontakta oss om du vill ha en
					kopia av de skyddsåtgärder som gäller.
				</p>
				<ExternalLink href="https://www.cloudflare.com/cloudflare-customer-dpa/">
					Cloudflares dataskyddsvillkor
				</ExternalLink>
				<p>
					<strong>När du kontaktar oss.</strong> Vi använder dina
					kontaktuppgifter och det du berättar för att besvara din fråga.
					Grunden är vårt berättigade intresse av att besvara förfrågningar. Om
					du som privatperson ber om en offert eller anlitar oss behöver vi
					uppgifterna för att förbereda eller fullgöra avtalet. Du väljer vilka
					uppgifter du lämnar. För att kunna svara behöver vi ett sätt att nå
					dig.
				</p>
				<p>
					<strong>Så hanterar vi kunduppgifter.</strong> Mejlen finns kvar i
					Microsoft 365. Inom företaget har bara ägaren tillgång till
					brevlådan. Vid uppdrag registrerar vi de uppgifter som behövs för
					arbetsordern i Mowin och för fakturering och bokföring i Fortnox.
					Vår redovisningsbyrå kan ta del av uppgifterna i Fortnox.
				</p>
				<p>
					<strong>Hur länge behövs uppgifterna?</strong> Det beror på om vi
					behöver dem för att besvara en fråga, slutföra ett uppdrag eller
					hantera ett rättsligt anspråk. För bokföringsunderlag gäller
					bokföringslagens krav. Vi har i dag ingen fast rutin för rensning.
				</p>
				<p>
					<strong>Dina rättigheter.</strong> Mejla{" "}
					<a className="underline" href={`mailto:${company.email}`}>
						{company.email}
					</a>{" "}
					om du vill veta vilka uppgifter vi har om dig eller be oss rätta dem.
					Företagets ägare tar hand om din begäran. Du kan också invända mot behandling som
					bygger på berättigat intresse och, när villkoren är uppfyllda, begära
					radering, begränsning eller dataportabilitet. Du har rätt att klaga
					hos Integritetsskyddsmyndigheten (IMY).
				</p>
			</div>
		</section>
	);
}
