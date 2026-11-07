import Image from "next/image";
import { Icon } from "./components/Icon";
import { Area, ContactSection, ProjectList } from "./components/Sections";
import { phoneHref } from "./data/company";
import { projects } from "./data/projects";
import { pageMeta } from "./data/seo";
import { services } from "./data/services";
export const metadata = pageMeta(
	"Elektriker i Södra Sandby med omnejd",
	"Personlig elservice med Johan Kröger. Elinstallationer, renovering och felsökning för hem och företag i Södra Sandby och runt Lund.",
	"/",
);
const strengths = [
	["bolt", "15 års erfarenhet", "Inom elservice och renovering."],
	[
		"shield",
		"Auktoriserad elinstallatör",
		"Johan Kröger, med personlig auktorisation.",
	],
	["person", "Personlig kontakt", "Samma elektriker genom hela uppdraget."],
] as const;
export default function Home() {
	return (
		<>
			<section className="hero">
				<div className="hero-photo">
					<Image
						src="/elcentral.webp"
						alt="Närbild av säkringar och ledningar i en elcentral"
						width={1122}
						height={1402}
						priority
					/>
				</div>
				<div className="wrap hero-inner">
					<div className="hero-copy">
						<p className="kicker light">
							<Icon name="pin" size={15} /> Södra Sandby med omnejd
						</p>
						<h1>
							Erfaren elektriker.
							<br />
							<em>Personlig service.</em>
						</h1>
						<p className="hero-intro">
							Elinstallationer, service och renovering för hem och företag. Hos
							Din Elektriker Syd har du direktkontakt med Johan Kröger från
							start till mål.
						</p>
						<div className="actions">
							<a className="button" href={phoneHref || "/kontakt"}>
								<Icon name={phoneHref ? "phone" : "mail"} size={18} />
								{phoneHref ? "Ring Johan" : "Kontakta Johan"}
							</a>
							<a className="button outline" href="/tjanster">
								Våra tjänster <Icon name="arrow" size={17} />
							</a>
						</div>
					</div>
				</div>
			</section>
			<section aria-label="Erfarenhet och kompetens" className="trust">
				<div className="wrap trust-grid">
					{strengths.map(([icon, title, copy]) => (
						<div key={title}>
							<span className="trust-icon">
								<Icon name={icon} size={23} />
							</span>
							<div>
								<h2>{title}</h2>
								<p>{copy}</p>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="wrap section">
				<div className="section-head">
					<div>
						<p className="kicker">Våra tjänster</p>
						<h2>Så kan vi hjälpa dig.</h2>
					</div>
					<a className="text-link" href="/tjanster">
						Se alla tjänster <Icon name="arrow" size={17} />
					</a>
				</div>
				<div className="service-grid">
					{services.map((s) => (
						<a key={s.id} className="service-card" href={`/tjanster#${s.id}`}>
							<span className="icon-box">
								<Icon name={s.icon} size={26} />
							</span>
							<h3>{s.title}</h3>
							<p>{s.short}</p>
							<span className="card-arrow">
								<Icon name="diagonal" size={16} />
							</span>
						</a>
					))}
				</div>
			</section>
			<section className="story-bg">
				<div className="wrap story">
					<Image
						src="/belysning.webp"
						alt="Illustrativ miljöbild av belysningen i ett kök"
						width={1200}
						height={800}
					/>
					<div>
						<p className="kicker">Om Johan Kröger</p>
						<h2>En elektriker som lyssnar.</h2>
						<p>
							Efter 15 år med service och renovering vet Johan hur olika två
							uppdrag kan vara. Han börjar med dina önskemål och går igenom
							vilka lösningar som passar platsen.
						</p>
						<p>
							Johan är auktoriserad elinstallatör och Din Elektriker Syd AB är
							registrerat hos Elsäkerhetsverket.
						</p>
						<a className="text-link" href="/om-oss">
							Lär känna Johan <Icon name="arrow" />
						</a>
					</div>
				</div>
			</section>
			<Area />
			{projects.length > 0 && (
				<section className="wrap section">
					<h2>Referensprojekt</h2>
					<ProjectList items={projects.slice(0, 3)} />
					<a className="text-link" href="/projekt">
						Alla referensprojekt →
					</a>
				</section>
			)}
			<ContactSection />
		</>
	);
}
