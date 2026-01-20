'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { ProjectCategory as ProjectCategoryType } from '@/data/types'
import { FaChevronDown } from 'react-icons/fa'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiItchdotio } from 'react-icons/si'
import { withBasePath } from '@/utils/basePath'

interface ProjectCategoryProps {
	category: ProjectCategoryType
	accentColor: string
	accentColorHex: string
}

export default function ProjectCategory({
	category,
	accentColor,
	accentColorHex,
}: ProjectCategoryProps) {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<div className="mb-20 last:mb-0">
			<div
				className="group relative bg-dark-800 rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-opacity-100 transition-all duration-300 cursor-pointer overflow-hidden"
				style={{
					borderColor: isExpanded ? accentColorHex + '40' : undefined,
					boxShadow: isExpanded ? `0 0 20px -5px ${accentColorHex}20` : undefined,
				}}
				onClick={() => setIsExpanded(!isExpanded)}
			>
				{/* Hover Gradient Background */}
				<div
					className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
					style={{ background: `linear-gradient(to right, ${accentColorHex}00, ${accentColorHex}10)` }}
				/>

				<div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
					{/* Preview Image */}
					{category.previewImage && (
						<div className="w-full md:w-48 h-48 md:h-32 rounded-xl overflow-hidden border border-gray-700 shrink-0 bg-dark-900/50 relative group-hover:border-opacity-50 transition-colors">
							<img
								src={withBasePath(category.previewImage)}
								alt={`${category.title} preview`}
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>
					)}

					{/* Content */}
					<div className="flex-1 w-full text-left">
						<div className="flex flex-wrap items-center gap-3 mb-2">
							<h3
								className="text-2xl md:text-3xl font-bold"
								style={{ color: accentColorHex }}
							>
								{category.title}
							</h3>
							<span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-gray-700 bg-dark-900/50 text-gray-400">
								{category.projects.length} {category.projects.length === 1 ? 'System' : 'Systems'}
							</span>
						</div>

						{category.tagline && (
							<p className="text-gray-300 font-medium mb-2">
								{category.tagline}
							</p>
						)}

						<p className="text-gray-400 text-sm md:text-base leading-relaxed">
							{category.description}
						</p>

						{/* Category Links */}
						{category.links && (
							<div className="flex flex-wrap gap-4 mt-3" onClick={(e) => e.stopPropagation()}>
								{category.links.github && (
									<a
										href={category.links.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
										style={{ color: accentColorHex }}
									>
										<FiGithub />
										<span>Repository</span>
									</a>
								)}
								{category.links.itchio && (
									<a
										href={category.links.itchio}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
										style={{ color: accentColorHex }}
									>
										<SiItchdotio />
										<span>Itch.io</span>
									</a>
								)}
								{category.links.live && (
									<a
										href={category.links.live}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
										style={{ color: accentColorHex }}
									>
										<FiExternalLink />
										<span>Live Site</span>
									</a>
								)}
							</div>
						)}

						{/* Mini Projects Preview */}
						{!isExpanded && category.projects.length > 0 && (
							<div className="mt-6 pt-4 border-t border-gray-700/50">
								<p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
									Contains:
								</p>
								<div className="flex flex-wrap gap-3">
									{category.projects.map((project) => (
										<div
											key={project.id}
											className="flex items-center gap-4 px-5 py-3 rounded-xl bg-dark-900/50 border border-gray-700/50 text-base font-medium text-gray-200"
										>
											{project.thumbnailUrl ? (
												<img
													src={withBasePath(project.thumbnailUrl)}
													alt=""
													className="w-12 h-12 rounded-lg object-cover shadow-sm border border-gray-800"
												/>
											) : (
												<span
													className="w-3 h-3 rounded-full"
													style={{ backgroundColor: accentColorHex }}
												/>
											)}
											<span>{project.title}</span>
										</div>
									))}
								</div>
							</div>
						)}

						{category.expandedDescription && isExpanded && (
							<div className="mt-4 pt-4 border-t border-gray-700/50 animate-fade-in">
								<p className="text-gray-400 text-sm leading-relaxed">
									{category.expandedDescription}
								</p>
							</div>
						)}
					</div>

					{/* Chevron */}
					<div className="absolute top-0 right-0 md:relative md:flex flex-col items-end justify-center h-full pl-4">
						<div
							className="p-2 rounded-full transition-colors duration-300"
							style={{
								color: isExpanded ? accentColorHex : '#6b7280'
							}}
						>
							<FaChevronDown
								className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
								size={24}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Projects Grid */}
			{isExpanded && (
				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 animate-fade-in mt-8">
					{category.projects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
							accentColor={accentColor}
							accentColorHex={accentColorHex}
						/>
					))}
				</div>
			)}
		</div>
	)
}
