'use client'

import { ReactNode, useEffect } from 'react'
import Header from './Header'
import { useSection } from '@/contexts/SectionContext'
import { sectionConfigs } from '@/data/sectionContent'

interface PortfolioWrapperProps {
	children: ReactNode
}

export default function PortfolioWrapper({ children }: PortfolioWrapperProps) {
	const { selectedSection, setSelectedSection } = useSection()

	// Default to 'game' if no section selected yet (before localStorage loads)
	const currentSection = selectedSection || 'game'
	const config = sectionConfigs[currentSection]

	// Update CSS variable for scrollbar color
	useEffect(() => {
		document.documentElement.style.setProperty('--scrollbar-color', config.accentColorHex)
	}, [config.accentColorHex])

	return (
		<>
			<Header
				currentSection={currentSection}
				onSectionChange={setSelectedSection}
				accentColorHex={config.accentColorHex}
			/>
			{children}
		</>
	)
}
