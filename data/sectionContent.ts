import { Section, SectionConfig } from './types'

// Section configurations with accent colors
export const sectionConfigs: Record<Section, SectionConfig> = {
	game: {
		id: 'game',
		title: 'Games',
		description: 'Game development work and interactive experiences',
		accentColor: 'sky-500',
		accentColorHex: '#0ea5e9',
	},
	web: {
		id: 'web',
		title: 'Web Development',
		description: 'Full-stack applications and software solutions',
		accentColor: 'emerald-500',
		accentColorHex: '#10b981',
	},
}

// Hero content for each section
export const heroContent: Record<Section, {
	title: string
	subtitle: string
	description: string
}> = {
	game: {
		title: 'Game Programmer',
		subtitle: 'Crafting Interactive Experiences',
		description: 'Building engaging gameplay systems and technical solutions that bring virtual worlds to life. Specializing in gameplay mechanics, AI systems, and robust game architecture.',
	},
	web: {
		title: 'Full-Stack Developer',
		subtitle: 'Building Digital Solutions',
		description: 'Creating scalable web applications and software systems that solve real-world problems. Specializing in modern frameworks, cloud architecture, and performant backend systems.',
	},
}

// About content for each section
export const aboutContent: Record<Section, {
	title: string
	paragraphs: string[]
}> = {
	game: {
		title: 'Game Programmer',
		paragraphs: [
			"I'm a game programmer driven by a love for systems-driven gameplay and player expression. I enjoy building mechanics that feel responsive, readable, and satisfying—systems players can learn, master, and bend in creative ways.",
			"Much of my work focuses on gameplay systems such as combat logic, AI behaviors, progression mechanics, and in-editor tools that speed up iteration. I particularly enjoy designing modular systems that can evolve from small prototypes into full-scale games.",
			"I approach game development as a balance between engineering and design. Clean architecture, performance awareness, and maintainability matter to me—but never at the expense of game feel. My goal is to build systems that are both technically solid and fun to play."
		],
	},
	web: {
		title: 'Full-Stack Developer',
		paragraphs: [
			"Alongside game development, I work as a software and full-stack developer with a strong focus on system architecture and maintainable codebases. I enjoy building reliable applications where clarity and structure matter as much as functionality.",
			"I have experience designing backend services, working with databases, and developing modern web frontends. This background helps me approach problems with a broader engineering mindset, especially when dealing with data-driven systems or complex logic.",
			"My software engineering experience directly influences my game development work. Concepts like modularity, scalability, and clean architecture shape how I design gameplay systems, tools, and workflows."
		],
	},
}

// Skills for each section
export const skillsContent: Record<Section, Record<string, string[]>> = {
	game: {
		'Game Engines': ['Unity', 'Godot', 'Unreal Engine'],
		'Programming Languages': ['C#', 'C++', 'GDScript'],
		'Game Systems': [
			'Gameplay Systems',
			'Combat & Ability Systems',
			'AI Behavior & State Machines',
			'Tool Development',
			'Rapid Prototyping',
			'Game Feel & Polish'],
		'Game Development Workflow': [
			'Version Control (Git)',
			'Gameplay Debugging & Profiling',
			'In-Editor Tooling',
			'Rapid Iteration & Playtesting'
		]

	},
	web: {
		'Programming Languages': ['Java', 'C#', 'C++', 'TypeScript', 'JavaScript', 'Python', 'PHP'],
		'Frontend': ['React', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
		'Backend': ['Node.js', 'Spring', 'Python', 'REST APIs'],
		'Databases': ['PostgreSQL', 'MySQL', 'MongoDB'],
		'DevOps & Tools': ['Docker', 'Git', 'RabbitMQ', 'Kafka', 'Jira'],
	},
}
