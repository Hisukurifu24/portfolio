import { Project } from '@/data/types'

// Sorts projects to match the given list of ids. Any project whose id is not
// in the order list is appended at the end in its original array position.
export function orderProjects(projects: Project[], order: string[]): Project[] {
	const byId = new Map(projects.map((p) => [p.id, p]))
	const ordered = order
		.map((id) => byId.get(id))
		.filter((p): p is Project => p !== undefined)
	const listed = new Set(order)
	const rest = projects.filter((p) => !listed.has(p.id))
	return [...ordered, ...rest]
}
