'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Section } from '@/data/types'

interface SectionContextType {
	selectedSection: Section | null
	setSelectedSection: (section: Section) => void
	isLoading: boolean
}

const SectionContext = createContext<SectionContextType | undefined>(undefined)

export function SectionProvider({ children }: { children: ReactNode }) {
	const [selectedSection, setSelectedSection] = useState<Section | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	// Initialize without localStorage - let user choose every visit
	useEffect(() => {
		setIsLoading(false)
	}, [])

	// Handle section change - persists during navigation, resets on refresh
	const handleSectionChange = (section: Section) => {
		setSelectedSection(section)
		// Scroll to top when switching sections
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<SectionContext.Provider
			value={{
				selectedSection,
				setSelectedSection: handleSectionChange,
				isLoading,
			}}
		>
			{children}
		</SectionContext.Provider>
	)
}

export function useSection() {
	const context = useContext(SectionContext)
	if (context === undefined) {
		throw new Error('useSection must be used within a SectionProvider')
	}
	return context
}
