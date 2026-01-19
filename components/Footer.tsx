import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiItchdotio } from 'react-icons/si'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	const socialLinks = [
		{ icon: FiGithub, href: 'https://github.com/Hisukurifu24', label: 'GitHub' },
		{ icon: FiLinkedin, href: 'https://linkedin.com/in/francesconaletto', label: 'LinkedIn' },
		{ icon: SiItchdotio, href: 'https://hiisukurifu.itch.io', label: 'Itch.io' },
		{ icon: FiMail, href: 'mailto:f.naletto@outlook.com', label: 'Email' },
	]

	return (
		<footer className="bg-dark-800 border-t border-gray-800 py-12">
			<div className="container mx-auto px-6">
				<div className="flex flex-col items-center gap-6">
					<div className="flex gap-6">
						{socialLinks.map((link) => {
							const Icon = link.icon
							return (
								<a
									key={link.label}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-primary transition-colors"
									aria-label={link.label}
								>
									<Icon size={24} />
								</a>
							)
						})}
					</div>
					<p className="text-gray-500 text-sm">
						© {currentYear} Francesco Naletto. Built with Next.js & TypeScript.
					</p>
				</div>
			</div>
		</footer>
	)
}
