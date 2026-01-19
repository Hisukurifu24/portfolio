import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./data/**/*.{js,ts,jsx,tsx}',
	],
	safelist: [
		// Safelist dynamic color classes
		'text-sky-500',
		'text-emerald-500',
		'bg-sky-500',
		'bg-emerald-500',
		'border-sky-500',
		'border-emerald-500',
		'hover:text-sky-400',
		'hover:text-emerald-400',
		'hover:bg-sky-600',
		'hover:bg-emerald-600',
	],
	theme: {
		extend: {
			colors: {
				primary: '#0ea5e9',
				secondary: '#8b5cf6',
				dark: {
					900: '#0a0a0f',
					800: '#12121a',
					700: '#1a1a24',
					600: '#22222e',
				},
				sky: {
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
				},
				emerald: {
					400: '#34d399',
					500: '#10b981',
					600: '#059669',
				},
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in',
				'slide-up': 'slideUp 0.5s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [],
}
export default config
