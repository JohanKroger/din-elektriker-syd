import Image from "next/image";
import { Area, ContactSection, Intro } from "../components/Sections";
import { pageMeta } from "../data/seo";
import { company } from "../data/company";
export const metadata = pageMeta(
	"Om Johan Kröger",
	"Lär känna Johan Kröger, auktoriserad elinstallatör med 15 års erfarenhet av service och renovering i Södra Sandby med omnejd.",
	"/om-oss",
);
export default function About() {
	return (
		<>
			<Intro label="Om oss" title="Johan Kröger, din elektriker.">
				Din Elektriker Syd AB är ett personligt elinstallationsföretag i Södra
				Sandby. Du har direktkontakt med Johan från första frågan till färdigt
				arbete.
			</Intro>
			<section className="wrap story">
				<Image
					src="/belysning.webp"
					alt="Detalj av arbetsbelysning i ett modernt kök, illustrativ miljöbild"
					width={1200}
					height={800}
				/>
				<div>
					<p className="kicker">Arbetssätt</p>
					<h2>Först ett samtal, sedan en lösning.</h2>
					<p>
						Med 15 år inom service och renovering är Johan van vid att arbeta i
						befintliga bostäder och lokaler. Det börjar med att du berättar vad
						som fungerar i dag och vad du vill förändra.
					</p>
					<p>
						Johan går igenom förutsättningarna och förklarar alternativen. Du
						kan ställa frågor direkt till den som planerar och utför arbetet.
					</p>
					<h3>Auktorisation och registrering</h3>
					<p>
						Johan är auktoriserad elinstallatör. Företaget Din Elektriker Syd AB
						är registrerat hos Elsäkerhetsverket.
					</p>
					<a className="text-link" href={company.registry}>
						Kolla elföretaget ↗
					</a>
				</div>
			</section>
			<Area />
			<ContactSection />
		</>
	);
}
