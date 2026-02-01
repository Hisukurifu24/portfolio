import Project from './Project'
import { Project as ProjectType } from '@/data/types'

interface ProjectsProps {
	title: string
	description: string
	accentColor: string
	accentColorHex: string
	projects: ProjectType[]
}

export default function Projects({
	title,
	description,
	accentColor,
	accentColorHex,
	projects,
}: ProjectsProps) {
	return (
		<section id="projects" className="py-20 px-6 bg-black/20">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
					<p className="text-gray-400 text-lg">{description}</p>
				</div>

				{/* Render each project with its features */}
				<div className="space-y-20">
					{projects.map((project) => (
						<Project
							key={project.id}
							project={project}
							accentColor={accentColor}
							accentColorHex={accentColorHex}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
