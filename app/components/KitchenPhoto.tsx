import Image from "next/image";

export function KitchenPhoto() {
	return (
		<figure>
			<Image
				src="/belysning.webp"
				width={1200}
				height={800}
				alt="Köksinteriör med arbetsytor och takbelysning"
			/>
			<figcaption className="mt-2 text-xs text-neutral-600">
				Miljöbild av Pbroks13,{" "}
				<a
					className="underline"
					href="https://commons.wikimedia.org/wiki/File:Modern_Kitchen.jpg"
				>
					Modern Kitchen
				</a>
				. Beskuren WebP under{" "}
				<a
					className="underline"
					href="https://creativecommons.org/licenses/by-sa/3.0/"
				>
					CC BY-SA 3.0
				</a>
				.
			</figcaption>
		</figure>
	);
}
