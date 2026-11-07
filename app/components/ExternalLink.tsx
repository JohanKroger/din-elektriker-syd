import { Icon } from "./Icon";

export function ExternalLink({
	href,
	children,
}: {
	href: string;
	children: string;
}) {
	return (
		<a
			className="text-link"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			<span>
				{children} <small className="font-normal">(ny flik)</small>
			</span>
			<Icon name="diagonal" size={15} />
		</a>
	);
}
