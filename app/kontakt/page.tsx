import { Area, ContactLinks, Intro } from "../components/Sections";
import { company } from "../data/company";
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
		</>
	);
}
