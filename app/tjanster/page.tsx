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
				Från ett extra vägguttag till elen i en ombyggnad. Johan hjälper dig att
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
								Prata med Johan <Icon name="arrow" size={16} />
							</a>
						</div>
					</section>
				))}
			</div>
			<ContactSection />
		</>
	);
}
