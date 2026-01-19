interface SkillBadgeProps {
	name: string
	category: 'engine' | 'language' | 'tool' | 'specialty'
}

export default function SkillBadge({ name, category }: SkillBadgeProps) {
	const categoryStyles = {
		engine: 'bg-primary/20 text-primary border-primary/50',
		language: 'bg-secondary/20 text-secondary border-secondary/50',
		tool: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
		specialty: 'bg-orange-500/20 text-orange-400 border-orange-500/50',
	}

	return (
		<span className={`px-4 py-2 rounded-lg border text-sm font-medium ${categoryStyles[category]}`}>
			{name}
		</span>
	)
}
