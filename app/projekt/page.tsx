import { ContactSection, Intro, ProjectList } from "../components/Sections";
import { projects } from "../data/projects";
import { Icon } from "../components/Icon";
import { pageMeta } from "../data/seo";
export const metadata = pageMeta(
	"Referensprojekt",
	"Här kommer Din Elektriker Syd AB att visa godkända referensprojekt med bilder och beskrivningar av utförda elarbeten.",
	"/projekt",
);
export default function ProjectsPage() {
	return (
		<>
			<Intro label="Referensprojekt" title="Utförda elarbeten.">
				Här kommer du att kunna se hur olika elinstallationer har lösts i
				praktiken.
			</Intro>
			<section className="wrap section">
				{projects.length ? (
					<ProjectList items={projects} />
				) : (
					<div className="empty">
						<span className="icon-box">
							<Icon name="house" />
						</span>
						<h2>Projektbilder kommer.</h2>
						<p>
							Vi publicerar beskrivningar och bilder när materialet har godkänts
							av kunderna. Under tiden kan du läsa om vilka arbeten vi
							hjälper till med.
						</p>
						<a href="/tjanster" className="text-link">
							Utforska våra tjänster <Icon name="arrow" />
						</a>
					</div>
				)}
			</section>
			<ContactSection />
		</>
	);
}
