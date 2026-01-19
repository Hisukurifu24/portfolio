import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiItchdotio } from 'react-icons/si'
import { Section } from '@/data/types'
import { heroContent } from '@/data/sectionContent'

interface HeroProps {
	section: Section
	accentColorHex: string
}

export default function Hero({ section, accentColorHex }: HeroProps) {
	const content = heroContent[section]

	return (
		<section className="min-h-screen flex items-center justify-center px-6 pt-20">
			<div className="container mx-auto max-w-4xl text-center">
				<h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
					{content.title.split(' ')[0]} <span style={{ color: accentColorHex }}>{content.title.split(' ').slice(1).join(' ')}</span>
				</h1>
				<p className="text-xl md:text-2xl text-gray-400 mb-8 animate-slide-up">
					{content.subtitle}
				</p>
				<p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-slide-up">
					{content.description}
				</p>

				<div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
					<a
						href="#projects"
						className="px-8 py-3 text-white rounded-lg transition-all font-medium"
						style={{ backgroundColor: accentColorHex }}
						onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
						onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
					>
						View Projects
					</a>
					<a
						href="mailto:f.naletto@outlook.com"
						className="px-8 py-3 bg-dark-700 hover:bg-dark-600 text-white rounded-lg transition-colors font-medium"
					>
						Get in Touch
					</a>
				</div>

				<div className="flex justify-center gap-6 animate-fade-in">
					<a
						href="https://github.com/Hisukurifu24"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 transition-colors"
						style={{ color: undefined }}
						onMouseEnter={(e) => (e.currentTarget.style.color = accentColorHex)}
						onMouseLeave={(e) => (e.currentTarget.style.color = '')}
						aria-label="GitHub"
					>
						<FiGithub size={28} />
					</a>
					<a
						href="https://linkedin.com/in/francesconaletto"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 transition-colors"
						onMouseEnter={(e) => (e.currentTarget.style.color = accentColorHex)}
						onMouseLeave={(e) => (e.currentTarget.style.color = '')}
						aria-label="LinkedIn"
					>
						<FiLinkedin size={28} />
					</a>
					<a
						href="https://hiisukurifu.itch.io"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 transition-colors"
						onMouseEnter={(e) => (e.currentTarget.style.color = accentColorHex)}
						onMouseLeave={(e) => (e.currentTarget.style.color = '')}
						aria-label="Itch.io"
					>
						<SiItchdotio size={28} />
					</a>
				</div>
			</div>
		</section>
	)
}
