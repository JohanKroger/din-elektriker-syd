import { ExternalLink } from "./ExternalLink";
import Image from "next/image";
import { company, emailHref, navigation, phoneHref } from "../data/company";
import type { Project } from "../data/projects";
import { Icon } from "./Icon";

export function Intro({
	label,
	title,
	children,
}: {
	label: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="intro">
			<div className="wrap">
				<p className="kicker">{label}</p>
				<h1>{title}</h1>
				<p className="lead">{children}</p>
			</div>
		</section>
	);
}
export function ContactLinks() {
	return (
		<div className="contacts">
			{(
				[
					[
						"phone",
						"Ring oss",
						company.phone,
						phoneHref,
						"Telefonnummer kommer",
					],
					[
						"mail",
						"Skicka e-post",
						company.email,
						emailHref,
						"E-postadress kommer",
					],
				] as const
			).map(([icon, label, value, href, placeholder]) => {
				const content = (
					<>
						<Icon name={icon} />
						<span>
							<strong>{label}</strong>
							<small>{value || placeholder}</small>
						</span>
						{href && <Icon name="diagonal" />}
					</>
				);
				return href ? (
					<a key={icon} className="contact-line" href={href}>
						{content}
					</a>
				) : (
					<div key={icon} className="contact-line">
						{content}
					</div>
				);
			})}
		</div>
	);
}
export function ContactSection() {
	return (
		<section className="contact-section">
			<div className="wrap split">
				<div>
					<p className="kicker light">Kontakt</p>
					<h2>Behöver du hjälp med elen?</h2>
					<p>Berätta för oss vad du planerar eller vad som behöver ses över.</p>
				</div>
				<ContactLinks />
			</div>
		</section>
	);
}
export function Footer() {
	return (
		<footer>
			<div className="wrap foot-grid">
				<div>
					<strong>{company.name}</strong>
					<p>
						{company.address.streetAddress}
						<br />
						{company.address.postalCode} {company.address.addressLocality}
						<br />
						Org.nr {company.organizationNumber}
					</p>
					<p>
						{company.phone ? (
							<a href={phoneHref}>{company.phone}</a>
						) : (
							"Telefonnummer kommer"
						)}
						<br />
						{company.email ? (
							<a href={emailHref}>{company.email}</a>
						) : (
							"E-postadress kommer"
						)}
					</p>
				</div>
				<nav aria-label="Sidfotsmeny">
					{navigation.map(([href, label]) => (
						<a href={href} key={href}>
							{label}
						</a>
					))}
				</nav>
				<div>
					<strong>Registrerat elföretag</strong>
					<p>Kontrollera företagets registrering hos Elsäkerhetsverket.</p>
					<ExternalLink href={company.registry}>
						Se vår registrering
					</ExternalLink>
					<p>Företaget är registrerat för moms och godkänt för F-skatt.</p>
				</div>
			</div>
			<div className="wrap copyright">
				© {new Date().getFullYear()} {company.name}
			</div>
		</footer>
	);
}
export function ProjectList({ items }: { items: Project[] }) {
	return (
		<div className="project-list">
			{items.map((p) => (
				<article key={p.title + p.town}>
					<p className="kicker">
						{p.town} · {p.category}
					</p>
					<h3>{p.title}</h3>
					<p>{p.description}</p>
					{p.images.map((i) => (
						<Image key={i.src} {...i} />
					))}
				</article>
			))}
		</div>
	);
}
export function Area() {
	return (
		<section className="area">
			<div className="wrap split">
				<div>
					<p className="kicker">Verksamhetsområde</p>
					<h2>Med Södra Sandby som utgångspunkt.</h2>
				</div>
				<div>
					<p>
						Vi hjälper privatpersoner, företag, bostadsrättsföreningar och
						fastighetsägare i Södra Sandby med omnejd.
					</p>
					<p>
						Lund, Dalby, Staffanstorp, Eslöv och Malmö är några av orterna i
						området.
					</p>
				</div>
			</div>
		</section>
	);
}
