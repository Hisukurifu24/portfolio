'use client'

import { useEffect } from 'react'
import { Section } from '@/data/types'
import { FaGamepad, FaCode } from 'react-icons/fa'

interface SectionChooserProps {
	onSelect: (section: Section) => void
}

export default function SectionChooser({ onSelect }: SectionChooserProps) {
	useEffect(() => {
		// Disable scrolling when chooser is open
		document.body.style.overflow = 'hidden'

		return () => {
			// Re-enable scrolling when chooser closes
			document.body.style.overflow = 'unset'
		}
	}, [])

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-sm">
			<div className="container mx-auto px-6 max-w-4xl">
				<div className="text-center mb-8 md:mb-12 animate-fade-in">
					<h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
						Welcome to my Portfolio
					</h1>
					<p className="text-lg md:text-xl text-gray-400">
						Which area are you interested in?
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-4 md:gap-8 animate-slide-up">
					{/* Game Developer Option */}
					<button
						onClick={() => onSelect('game')}
						className="group relative bg-darker/80 backdrop-blur-sm border-2 border-gray-800 rounded-2xl p-6 md:p-10 transition-all duration-300 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2"
					>
						<div className="flex flex-col items-center text-center">
							<div className="mb-4 md:mb-6 p-4 md:p-6 bg-sky-500/10 rounded-full transition-all duration-300 group-hover:bg-sky-500/20 group-hover:scale-110">
								<FaGamepad className="text-4xl md:text-6xl text-sky-500" />
							</div>
							<h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-white">
								Game Developer
							</h2>
							<p className="text-sm md:text-base text-gray-400 leading-relaxed">
								Explore my game programming projects, gameplay systems and interactive experiences
							</p>
						</div>
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</button>

					{/* Web Developer Option */}
					<button
						onClick={() => onSelect('web')}
						className="group relative bg-darker/80 backdrop-blur-sm border-2 border-gray-800 rounded-2xl p-6 md:p-10 transition-all duration-300 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2"
					>
						<div className="flex flex-col items-center text-center">
							<div className="mb-4 md:mb-6 p-4 md:p-6 bg-emerald-500/10 rounded-full transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-110">
								<FaCode className="text-4xl md:text-6xl text-emerald-500" />
							</div>
							<h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-white">
								Web & Software Developer
							</h2>
							<p className="text-sm md:text-base text-gray-400 leading-relaxed">
								Discover my full-stack applications, software solutions, and modern web development projects
							</p>
						</div>
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</button>
				</div>
			</div>
		</div>
	)
}
