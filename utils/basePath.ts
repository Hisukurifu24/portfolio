// Utility to handle basePath for static assets
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

export function withBasePath(path: string): string {
	return `${basePath}${path}`
}
