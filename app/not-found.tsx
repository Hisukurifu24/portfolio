import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: '404 - Page Not Found',
}

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
			<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
				Did you get lost?
			</h1>
			<p className="text-xl text-gray-400 mb-8">
				My portfolio is right here
			</p>
			<Link
				href="/"
				className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-sky-600 transition-colors duration-300"
			>
				Go to Portfolio
			</Link>
		</div>
	)
}