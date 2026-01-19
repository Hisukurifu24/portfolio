import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PortfolioWrapper from '@/components/PortfolioWrapper'
import Footer from '@/components/Footer'
import { SectionProvider } from '@/contexts/SectionContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Portfolio | Francesco Naletto',
	description: 'Game Programmer and Full-Stack Developer specializing in gameplay systems and modern web applications',
	keywords: ['game developer', 'game programmer', 'full-stack developer', 'unity', 'godot', 'react', 'portfolio'],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SectionProvider>
					<PortfolioWrapper>
						<main className="min-h-screen">
							{children}
						</main>
					</PortfolioWrapper>
					<Footer />
				</SectionProvider>
			</body>
		</html>
	)
}
