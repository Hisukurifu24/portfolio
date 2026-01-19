'use client'

import SkillBadge from './SkillBadge'
import { Section } from '@/data/types'
import { skillsContent } from '@/data/sectionContent'
import { useSection } from '@/contexts/SectionContext'

interface SkillsProps {
	section: Section
	accentColorHex: string
}

export default function Skills({ section, accentColorHex }: SkillsProps) {
	const { setSelectedSection } = useSection()
	const skills = skillsContent[section]
	const categories = Object.entries(skills)

	return (
		<section id="skills" className="py-20 px-6 bg-dark-800">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
					<p className="text-gray-400 text-lg">
						{section === 'game' ? 'Game development tools and expertise' : 'Full-stack development technologies and frameworks'}
					</p>
				</div>

				<div className="space-y-12">
					{categories.map(([categoryName, categorySkills], index) => (
						<div key={categoryName}>
							<h3
								className="text-xl font-semibold mb-4"
								style={{ color: accentColorHex }}
							>
								{categoryName}
							</h3>
							<div className="flex flex-wrap gap-3">
								{categorySkills.map((skill) => (
									<SkillBadge
										key={skill}
										name={skill}
										category={index % 3 === 0 ? 'engine' : index % 3 === 1 ? 'language' : 'tool'}
									/>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 pt-8 border-t border-gray-700/50 text-center">
					<p className="text-gray-400 mb-4">
						Didn't find what you were looking for?
					</p>
					<button
						onClick={() => {
							setSelectedSection(section === 'game' ? 'web' : 'game')
							window.scrollTo({ top: 0, behavior: 'smooth' })
						}}
						className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-80 transition-opacity"
						style={{ color: accentColorHex }}
					>
						Have a look at the {section === 'game' ? 'Web Dev' : 'Game Dev'} section
						<span>→</span>
					</button>
				</div>
			</div>
		</section>
	)
}
