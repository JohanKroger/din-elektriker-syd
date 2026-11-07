import { ContactSection, Intro } from "../components/Sections";
import { Icon } from "../components/Icon";
import { services } from "../data/services";
import { pageMeta } from "../data/seo";
export const metadata = pageMeta(
	"Elinstallation, elservice och laddboxar",
	"Eltjänster för hem, företag och fastigheter i Södra Sandby, Lund och omnejd. Läs om installationer, elcentraler, felsökning och laddboxar.",
	"/tjanster",
);
export default function ServicesPage() {
	return (
		<>
			<Intro label="Våra tjänster" title="Elarbeten för hem och fastighet.">
				Från ett extra vägguttag till elen i en ombyggnad. Vi hjälper dig att
				reda ut vad som behövs och vad som passar din anläggning.
			</Intro>
			<div className="wrap service-details">
				{services.map((s) => (
					<section key={s.id} id={s.id}>
						<span className="icon-box">
							<Icon name={s.icon} />
						</span>
						<h2>{s.title}</h2>
						<div>
							<p>{s.detail}</p>
							<a className="text-link" href="/kontakt">
								Kontakta oss <Icon name="arrow" size={16} />
							</a>
						</div>
					</section>
				))}
			</div>
			<section id="skattereduktion" className="area story-bg">
				<div className="wrap">
					<p className="kicker">Skattereduktion för privatpersoner</p>
					<h2>ROT och grön teknik</h2>
					<div className="split section">
						<div>
							<h3>ROT vid elarbeten</h3>
							<p>
								Om du äger bostaden och villkoren är uppfyllda kan du få
								rotavdrag med upp till 30 procent av arbetskostnaden för
								exempelvis elarbeten vid en renovering. Material och resor ingår
								inte.
							</p>
							<a
								className="text-link"
								href="https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/gerarbetetratttillrotavdrag.4.5c1163881590be297b5173bf.html"
							>
								Se godkända rotarbeten hos Skatteverket ↗
							</a>
						</div>
						<div>
							<h3>Grön teknik för laddbox</h3>
							<p>
								Vid installation av en laddningspunkt för elbil kan du få
								skattereduktion med upp till 50 procent av kostnaden för godkänt
								arbete och material. Samma arbete kan inte ligga till grund för
								både grön teknik och ROT.
							</p>
							<a
								className="text-link"
								href="https://www.skatteverket.se/privat/fastigheterochbostad/gronteknik/safungerarskattereduktionenforgronteknik.4.676f4884175c97df4192870.html"
							>
								Läs villkoren för grön teknik hos Skatteverket ↗
							</a>
						</div>
					</div>
				</div>
			</section>
			<ContactSection />
		</>
	);
}
