export type Project = {
	title: string;
	description: string;
	town: string;
	category: string;
	images: { src: string; alt: string; width: number; height: number }[];
};
// Lägg endast till godkända projekt med bilder som får publiceras.
export const projects: Project[] = [];
