// Utility to handle basePath for static assets
// Next.js basePath is configured in next.config.js and handled automatically for routes
// For public folder assets (videos/images), we need to check the actual deployment environment
export function withBasePath(path: string): string {
	// In production build, Next.js sets the basePath automatically
	// But we need to detect if we're actually deployed on GitHub Pages
	if (typeof window !== 'undefined') {
		const isGitHubPages = window.location.hostname.includes('github.io')
		return isGitHubPages ? `/portfolio${path}` : path
	}
	// Server-side: use environment variable
	return process.env.NODE_ENV === 'production' ? `/portfolio${path}` : path
}
