const paths = {
	arrow: "M4 12h15m-6-6 6 6-6 6",
	diagonal: "M6 18 18 6M7 6h11v11",
	pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
	shield: "m12 2 8 3v6c0 5-4 8-8 11-4-3-8-6-8-11V5l8-3Zm-4 10 3 3 5-6",
	person: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21v-2a8 8 0 0 1 16 0v2",
	bolt: "m13 2-9 12h7l-1 8 10-13h-8l1-7Z",
	plug: "M8 2v5m8-5v5M5 7h14v3a7 7 0 0 1-14 0V7Zm7 10v5",
	pulse: "M2 13h5l3-9 4 16 3-9h5",
	house: "m2 12 10-9 10 9M5 10v11h14V10M10 21v-7h4v7",
	bulb: "M9 18h6m-6 3h6M8 15a7 7 0 1 1 8 0l-1 3H9l-1-3Z",
	charge:
		"M3 21V4h11v17M2 21h14M6 7h5v4H6zM14 12h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0V9l-4-4",
	sliders: "M4 6h6m4 0h6M4 12h11m4 0h1M4 18h2m4 0h10M10 3v6m6 0v6M7 15v6",
	mail: "M2 5h20v14H2zM2 6l10 7L22 6",
	phone: "m7 3 3 5-3 2c1 3 4 6 7 7l2-3 5 3-1 4C12 23 1 12 3 4l4-1Z",
	menu: "M3 6h18M3 12h18M3 18h18",
	close: "m5 5 14 14M19 5 5 19",
} as const;
export function Icon({
	name,
	size = 20,
}: {
	name: keyof typeof paths;
	size?: number;
}) {
	return (
		<svg
			aria-hidden="true"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.65"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d={paths[name]} />
		</svg>
	);
}
