import { Section } from '@/data/types'
import { aboutContent } from '@/data/sectionContent'

interface AboutProps {
	section: Section
	accentColorHex: string
}

export default function About({ section, accentColorHex }: AboutProps) {
	const content = aboutContent[section]

	return (
		<section id="about" className="py-20 px-6">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
				</div>

				<div className="space-y-6 text-gray-400 text-lg leading-relaxed">
					{content.paragraphs.map((paragraph, index) => (
						<p key={index}>
							{paragraph}
						</p>
					))}

					<div className="pt-8">
						<h3 className="text-2xl font-bold mb-4 text-white">What I Bring to Teams</h3>
						<ul className="space-y-3 text-gray-400">
							<li className="flex items-start gap-3">
								<span style={{ color: accentColorHex }} className="mt-1">▹</span>
								<span><strong className="text-white">Systems Thinking:</strong> Design and implement interconnected {section === 'game' ? 'gameplay' : 'software'} systems that scale</span>
							</li>
							<li className="flex items-start gap-3">
								<span style={{ color: accentColorHex }} className="mt-1">▹</span>
								<span><strong className="text-white">Performance Focus:</strong> Optimize code for {section === 'game' ? 'target platforms' : 'high-traffic environments'} without sacrificing maintainability</span>
							</li>
							<li className="flex items-start gap-3">
								<span style={{ color: accentColorHex }} className="mt-1">▹</span>
								<span><strong className="text-white">Tool Development:</strong> Create {section === 'game' ? 'editor tools that empower designers' : 'automation tools that streamline workflows'} and accelerate {section === 'game' ? 'workflows' : 'development'}</span>
							</li>
							<li className="flex items-start gap-3">
								<span style={{ color: accentColorHex }} className="mt-1">▹</span>
								<span><strong className="text-white">Problem Solving:</strong> Break down complex challenges into actionable, testable solutions</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 text-center" >
					<a
						href="mailto:f.naletto@outlook.com"
						style={{ backgroundColor: accentColorHex }}
						className="inline-block px-8 py-3 text-white rounded-lg transition-colors font-medium hover:opacity-90"
					>
						Let's Work Together
					</a>
				</div>
			</div>
		</section>
	)
}
