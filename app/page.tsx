import { Experience } from "./components/Experience";
import { Icon } from "./components/Icon";
import { Area, ContactSection, ProjectList } from "./components/Sections";
import { phoneHref } from "./data/company";
import { projects } from "./data/projects";
import { pageMeta } from "./data/seo";
import { services } from "./data/services";
export const metadata = pageMeta(
	"Elektriker i Södra Sandby med omnejd",
	"Personlig elservice i Skåne. Elinstallationer, renovering och felsökning för hem och företag i Södra Sandby och runt Lund.",
	"/",
);
const strengths = [
	["bolt", <Experience key="experience" />, "Inom elservice och renovering."],
	["shield", "Registrerat elföretag", "Registrerat hos Elsäkerhetsverket."],
	["person", "Personlig kontakt", "Samma elektriker genom hela uppdraget."],
] as const;
export default function Home() {
	return (
		<>
			<section className="hero">
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
							Din Elektriker Syd har du direktkontakt med elektrikern som utför
							arbetet.
						</p>
						<div className="actions">
							<a className="button" href={phoneHref || "/kontakt"}>
								<Icon name={phoneHref ? "phone" : "mail"} size={18} />
								{phoneHref ? "Ring oss" : "Kontakta oss"}
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
						<div key={icon}>
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
				<a className="text-link" href="/tjanster#skattereduktion">
					ROT och grön teknik <Icon name="arrow" size={16} />
				</a>
			</section>
			<section className="story-bg">
				<div className="wrap story">
					<div>
						<p className="kicker">Om företaget</p>
						<h2>En elektriker som lyssnar.</h2>
					</div>
					<div>
						<p>
							När du anlitar oss går vi först igenom vad du vill förändra. Sedan
							tittar vi på den befintliga elen och föreslår lösningar som passar
							din bostad eller lokal.
						</p>
						<p>
							Vår elinstallatör är auktoriserad och Din Elektriker Syd AB är
							registrerat hos Elsäkerhetsverket.
						</p>
						<a className="text-link" href="/om-oss">
							Mer om företaget <Icon name="arrow" />
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
