'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiGithub, FiMenu, FiX } from 'react-icons/fi'
import { Section } from '@/data/types'

interface HeaderProps {
	currentSection: Section
	onSectionChange: (section: Section) => void
	accentColorHex: string
}

export default function Header({ currentSection, onSectionChange, accentColorHex }: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navLinks = [
		{ href: '#projects', label: 'Projects' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#about', label: 'About' },
	]

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-sm border-b border-gray-800">
			<nav className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<Link href="/" className="text-xl font-bold text-white hover:text-primary transition-colors">
						Portfolio
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{/* Section Toggle */}
						<div className="relative flex items-center gap-1 bg-dark-800 rounded-lg p-1">
							{/* Animated background indicator */}
							<div
								className="absolute h-[calc(100%-8px)] rounded-md transition-all duration-300 ease-out"
								style={{
									backgroundColor: accentColorHex,
									width: 'calc(50% - 4px)',
									transform: currentSection === 'game' ? 'translateX(4px)' : 'translateX(calc(100% + 4px))',
									boxShadow: `0 0 20px ${accentColorHex}40`,
								}}
							/>
							<button
								onClick={() => onSectionChange('game')}
								className="relative z-10 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
								style={{
									color: currentSection === 'game' ? '#fff' : '#9ca3af',
								}}
							>
								Game Dev
							</button>
							<button
								onClick={() => onSectionChange('web')}
								className="relative z-10 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
								style={{
									color: currentSection === 'web' ? '#fff' : '#9ca3af',
								}}
							>
								Web Dev
							</button>
						</div>

						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-gray-300 transition-colors"
								style={{ color: undefined }}
								onMouseEnter={(e) => (e.currentTarget.style.color = accentColorHex)}
								onMouseLeave={(e) => (e.currentTarget.style.color = '')}
							>
								{link.label}
							</a>
						))}
						<a
							href="https://github.com/Hisukurifu24"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-300 transition-colors"
							onMouseEnter={(e) => (e.currentTarget.style.color = accentColorHex)}
							onMouseLeave={(e) => (e.currentTarget.style.color = '')}
							aria-label="GitHub"
						>
							<FiGithub size={20} />
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-white"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden mt-4 pb-4 animate-fade-in">
						{/* Section Toggle Mobile */}
						<div className="relative mb-4 flex gap-2 bg-dark-800 rounded-lg p-1">
							{/* Animated background indicator for mobile */}
							<div
								className="absolute h-[calc(100%-8px)] rounded-md transition-all duration-300 ease-out"
								style={{
									backgroundColor: accentColorHex,
									width: 'calc(50% - 6px)',
									transform: currentSection === 'game' ? 'translateX(4px)' : 'translateX(calc(100% + 8px))',
									boxShadow: `0 0 15px ${accentColorHex}40`,
								}}
							/>
							<button
								onClick={() => {
									onSectionChange('game')
									setIsMenuOpen(false)
								}}
								className="relative z-10 flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 active:scale-95"
								style={{
									color: currentSection === 'game' ? '#fff' : '#9ca3af',
								}}
							>
								Game Dev
							</button>
							<button
								onClick={() => {
									onSectionChange('web')
									setIsMenuOpen(false)
								}}
								className="relative z-10 flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 active:scale-95"
								style={{
									color: currentSection === 'web' ? '#fff' : '#9ca3af',
								}}
							>
								Web Dev
							</button>
						</div>

						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="block py-2 text-gray-300 hover:text-primary transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								{link.label}
							</a>
						))}
						<a
							href="https://github.com/Hisukurifu24"
							target="_blank"
							rel="noopener noreferrer"
							className="block py-2 text-gray-300 hover:text-primary transition-colors"
						>
							GitHub
						</a>
					</div>
				)}
			</nav>
		</header>
	)
}
