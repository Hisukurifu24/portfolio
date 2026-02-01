// Shared data types for both game and web development sections

export interface FeatureData {
	id: string
	title: string
	description: string
	problem: string
	videoUrl: string
	thumbnailUrl?: string
	techStack: string[]
	links: {
		github?: string
	}
	caseStudy?: {
		goals: string[]
		challenges: string[]
		solutions: string[]
	}
}

export interface Project {
	id: string
	title: string
	description: string
	previewImage?: string // URL or path to preview image
	links: {
		demo?: string
		live?: string
		github?: string
		itchio?: string
	}
	tagline?: string // Short catchy phrase
	expandedDescription?: string // Longer personality text
	features: FeatureData[]
}

export type Section = 'game' | 'web'

export interface SectionConfig {
	id: Section
	title: string
	description: string
	accentColor: string // Tailwind class (e.g., 'sky-500')
	accentColorHex: string // Hex value (e.g., '#0ea5e9')
}
