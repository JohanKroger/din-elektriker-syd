import { ExternalLink } from "../components/ExternalLink";
import { Area, ContactSection, Intro } from "../components/Sections";
import { pageMeta } from "../data/seo";
import { company } from "../data/company";
export const metadata = pageMeta(
	"Om företaget",
	"Lär känna Din Elektriker Syd AB, ett elföretag med 15 års erfarenhet av service och renovering i Södra Sandby med omnejd.",
	"/om-oss",
);
export default function About() {
	return (
		<>
			<Intro label="Om oss" title="Din elektriker i Södra Sandby.">
				Din Elektriker Syd AB är ett personligt elinstallationsföretag i Södra
				Sandby. Du har direktkontakt med oss från första frågan till färdigt
				arbete.
			</Intro>
			<section className="wrap story">
				<div>
					<p className="kicker">Arbetssätt</p>
					<h2>Först ett samtal, sedan en lösning.</h2>
				</div>
				<div>
					<p>
						Med 15 år inom service och renovering har vi erfarenhet av arbete i
						befintliga bostäder och lokaler. Det börjar med att du berättar vad
						som fungerar i dag och vad du vill förändra.
					</p>
					<p>
						Vi går igenom förutsättningarna och förklarar alternativen. Du kan
						ställa frågor direkt till den som planerar och utför arbetet.
					</p>
					<h3>Auktorisation och registrering</h3>
					<p>
						Vår elinstallatör är auktoriserad elinstallatör. Företaget Din
						Elektriker Syd AB är registrerat hos Elsäkerhetsverket.
					</p>
					<ExternalLink href={company.registry}>
						Se vår registrering hos Elsäkerhetsverket
					</ExternalLink>
				</div>
			</section>
			<Area />
			<ContactSection />
		</>
	);
}
