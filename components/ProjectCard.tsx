'use client'

import { useState } from 'react'
import { FiGithub, FiExternalLink, FiPlay } from 'react-icons/fi'
import { ProjectData } from '@/data/types'

interface ProjectCardProps {
	project: ProjectData
	accentColor: string
	accentColorHex: string
}

export default function ProjectCard({ project, accentColor, accentColorHex }: ProjectCardProps) {
	const [isHovered, setIsHovered] = useState(false)
	const [showCaseStudy, setShowCaseStudy] = useState(false)

	return (
		<div
			className="bg-dark-800 rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-lg"
			style={{
				borderColor: isHovered ? accentColorHex : undefined,
				boxShadow: isHovered ? `0 10px 30px -15px ${accentColorHex}33` : undefined,
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Video/Image Preview */}
			<div
				className="relative aspect-video bg-dark-700 overflow-hidden cursor-pointer"
				onClick={() => setIsHovered(!isHovered)}
			>
				{isHovered ? (
					<video
						src={project.videoUrl}
						className="w-full h-full object-cover"
						autoPlay
						loop
						muted
						playsInline
					/>
				) : (
					<img
						src={project.thumbnailUrl || project.videoUrl}
						alt={`${project.title} thumbnail`}
						className="w-full h-full object-cover"
						loading="lazy"
					/>
				)}
				{!isHovered && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/30">
						<FiPlay className="text-white text-4xl" />
					</div>
				)}
			</div>

			{/* Content */}
			<div className="p-6">
				<h3 className="text-2xl font-bold mb-3">{project.title}</h3>
				<p className="text-gray-400 mb-4">{project.description}</p>
				<p className="text-sm text-gray-500 mb-4">
					<span className="font-semibold text-gray-400">Problem:</span> {project.problem}
				</p>

				{/* Tech Stack */}
				<div className="flex flex-wrap gap-2 mb-6">
					{project.techStack.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 bg-dark-700 text-sm rounded-full border border-gray-700"
							style={{ color: accentColorHex }}
						>
							{tech}
						</span>
					))}
				</div>

				{/* Links */}
				<div className="flex flex-wrap gap-3 mb-4">
					{project.links.github && (
						<a
							href={project.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg transition-colors text-sm font-medium"
						>
							<FiGithub size={16} />
							Source
						</a>
					)}
				</div>

				{/* Case Study Toggle */}
				{project.caseStudy && (
					<button
						onClick={() => setShowCaseStudy(!showCaseStudy)}
						className="text-sm font-medium transition-all"
						style={{ color: accentColorHex }}
						onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
						onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
					>
						{showCaseStudy ? '− Hide' : '+ View'} Technical Details
					</button>
				)}

				{/* Case Study Expandable */}
				{showCaseStudy && project.caseStudy && (
					<div className="mt-4 pt-4 border-t border-gray-700 animate-fade-in">
						<div className="space-y-4">
							<div>
								<h4 className="font-semibold text-gray-300 mb-2">Design Goals</h4>
								<ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
									{project.caseStudy.goals.map((goal, idx) => (
										<li key={idx}>{goal}</li>
									))}
								</ul>
							</div>
							<div>
								<h4 className="font-semibold text-gray-300 mb-2">Technical Challenges</h4>
								<ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
									{project.caseStudy.challenges.map((challenge, idx) => (
										<li key={idx}>{challenge}</li>
									))}
								</ul>
							</div>
							<div>
								<h4 className="font-semibold text-gray-300 mb-2">Solutions Implemented</h4>
								<ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
									{project.caseStudy.solutions.map((solution, idx) => (
										<li key={idx}>{solution}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
