import { Area, ContactLinks, Intro } from "../components/Sections";
import { company } from "../data/company";
import { ExternalLink } from "../components/ExternalLink";
import { pageMeta } from "../data/seo";
export const metadata = pageMeta(
	"Kontakta Johan Kröger",
	"Kontakt med Din Elektriker Syd AB för elarbeten i Södra Sandby med omnejd. Johan Kröger hjälper dig med frågor om service, renovering och installation.",
	"/kontakt",
);
export default function Contact() {
	return (
		<>
			<Intro label="Kontakt" title="Prata med Johan.">
				Behöver du hjälp med elen hemma, i lokalen eller i föreningen? Berätta
				gärna var arbetet ska göras och vad du vill ha hjälp med.
			</Intro>
			<section className="wrap section split">
				<div>
					<p className="kicker">Din Elektriker Syd AB</p>
					<h2>{company.person}</h2>
					<p>Auktoriserad elinstallatör och kontaktperson.</p>
					<p>
						{company.address.streetAddress}, {company.address.postalCode}{" "}
						{company.address.addressLocality}
						<br />
						Org.nr {company.organizationNumber}
					</p>
				</div>
				<ContactLinks />
			</section>
			<Area />
			<section
				id="personuppgifter"
				className="wrap section border-t border-[var(--line)]"
			>
				<div className="max-w-3xl space-y-4">
					<h2>Så behandlar vi personuppgifter</h2>
					<p>
						{company.name} är personuppgiftsansvarigt. Du når oss på{" "}
						<a className="underline" href={`mailto:${company.email}`}>
							{company.email}
						</a>{" "}
						eller på postadressen ovan.
					</p>
					<p>
						<strong>När du besöker webbplatsen.</strong> Cloudflare behandlar
						din IP-adress och tekniska uppgifter om anslutningen för att
						leverera sidan och skydda den mot angrepp. Webbläsaren kan också
						skicka rapporter om anslutningsfel till Cloudflare. Grunden är vårt
						berättigade intresse av en säker och tillgänglig webbplats.
					</p>
					<p>
						Behovet av tekniska uppgifter beror på om de behövs för att felsöka
						anslutningen eller utreda en säkerhetshändelse. Cloudflare kan
						behandla uppgifter utanför EU/EES. I Cloudflares dataskyddsvillkor
						beskrivs skyddet för överföringar, bland annat EU:s beslut om
						adekvat skyddsnivå och standardavtalsklausuler. Kontakta oss om du
						vill ha en kopia av de skyddsåtgärder som gäller.
					</p>
					<ExternalLink href="https://www.cloudflare.com/cloudflare-customer-dpa/">
						Cloudflares dataskyddsvillkor
					</ExternalLink>
					<p>
						<strong>När du kontaktar oss.</strong> Vi använder dina
						kontaktuppgifter och det du berättar för att besvara din fråga.
						Grunden är vårt berättigade intresse av att besvara förfrågningar.
						Om du som privatperson ber om en offert eller anlitar oss behöver vi
						uppgifterna för att förbereda eller fullgöra avtalet. Du väljer
						vilka uppgifter du lämnar. För att kunna svara behöver vi ett sätt
						att nå dig.
					</p>
					<p>
						Vår e-postleverantör behandlar uppgifter i mejl. Hur länge uppgifter
						behöver sparas beror på ärendet, exempelvis om en fråga leder till
						ett uppdrag eller om uppgifterna behövs för att hantera ett
						rättsligt anspråk. För bokföringsunderlag gäller bokföringslagens
						krav.
					</p>
					<p>
						<strong>Dina rättigheter.</strong> Du kan kontakta oss för att
						begära tillgång eller rättelse. Du kan också invända mot behandling
						som bygger på berättigat intresse och, när villkoren är uppfyllda,
						begära radering, begränsning eller dataportabilitet. Du har rätt att
						klaga hos Integritetsskyddsmyndigheten (IMY).
					</p>
				</div>
			</section>
		</>
	);
}
