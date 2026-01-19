'use client'

import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import About from '@/components/About'
import SectionChooser from '@/components/SectionChooser'
import { useSection } from '@/contexts/SectionContext'
import { sectionConfigs } from '@/data/sectionContent'
import { gameProjects } from '@/data/gameProjects'
import { webProjects } from '@/data/webProjects'

export default function Home() {
	const { selectedSection, setSelectedSection, isLoading } = useSection()

	// Show loading or section chooser
	if (isLoading) {
		return null // Prevent flash of modal
	}

	if (!selectedSection) {
		return <SectionChooser onSelect={setSelectedSection} />
	}

	// Get current section configuration
	const config = sectionConfigs[selectedSection]
	const projects = selectedSection === 'game' ? gameProjects : webProjects

	return (
		<>
			<Hero section={selectedSection} accentColorHex={config.accentColorHex} />
			<Projects
				title={config.title}
				description={config.description}
				accentColor={config.accentColor}
				accentColorHex={config.accentColorHex}
				categories={projects}
			/>
			<Skills section={selectedSection} accentColorHex={config.accentColorHex} />
			<About section={selectedSection} accentColorHex={config.accentColorHex} />
		</>
	)
}
