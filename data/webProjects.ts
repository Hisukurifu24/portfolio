import { ProjectCategory } from './types'

// Empty structure for you to populate with your web development projects
export const webProjects: ProjectCategory[] = [
	// Example structure - replace with your actual projects:
	// {
	// 	id: '1',
	// 	title: 'Full-Stack Applications',
	// 	description: 'End-to-end web applications with modern frameworks',
	// 	icon: '🌐',
	// 	tagline: 'Building scalable solutions for the modern web',
	// 	expandedDescription: 'A showcase of full-stack development expertise, featuring responsive user interfaces, RESTful APIs, and cloud-native architectures.',
	// 	projects: [
	// 		{
	// 			id: '1',
	// 			title: 'Your Project Name',
	// 			description: 'Brief project description',
	// 			problem: 'What problem does this solve?',
	// 			videoUrl: '/projects/your-project/demo.mp4',
	// 			thumbnailUrl: '/projects/your-project/thumbnail.png',
	// 			techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
	// 			links: {
	// 				live: 'https://your-project.com',
	// 				github: 'https://github.com/yourusername/project',
	// 			},
	// 			caseStudy: {
	// 				goals: [
	// 					'Goal 1',
	// 					'Goal 2',
	// 				],
	// 				challenges: [
	// 					'Challenge 1',
	// 					'Challenge 2',
	// 				],
	// 				solutions: [
	// 					'Solution 1',
	// 					'Solution 2',
	// 				],
	// 			},
	// 		},
	// 	],
	// },
	{
		id: '1',
		title: 'E-Commerce & Telegram Mini App',
		description: 'A full-stack e-commerce solution featuring a Spring backend, Angular frontend, and seamless Telegram Mini App integration.',
		previewImage: '/projects/web/ecommerce/preview.png',
		tagline: 'Bridging web and messaging platforms',
		expandedDescription: 'Developed as part of my university thesis, this project integrates a traditional e-commerce web application with the Telegram messaging platform. It allows users to browse catalogs and place orders directly within Telegram, while administrators manage the system via a comprehensive web dashboard.',
		links: {
			github: 'https://github.com/Hisukurifu24/prototype',
			live: 'https://web.telegram.org/k/#@AmazingSynclabBot',
		},
		projects: [
			{
				id: '1',
				title: 'Backend System',
				description: 'The core server-side application managing data, business logic, and API endpoints using Spring Boot.',
				problem: 'Establishing a secure and scalable foundation for managing e-commerce data and API requests.',
				videoUrl: '/projects/web/ecommerce/dashboard/demo.mp4',
				thumbnailUrl: '/projects/web/ecommerce/dashboard/thumbnail.png',
				techStack: ['Spring Boot', 'Java', 'REST APIs', 'PostgreSQL'],
				links: {
					github: 'https://github.com/Hisukurifu24/prototype/tree/main/back-end-prototype',
				},
				caseStudy: {
					goals: [
						'Develop a scalable backend architecture',
						'Implement secure user authentication and authorization',
						'Expose RESTful APIs for web and mobile clients',
					],
					challenges: [
						'Designing a flexible database schema for products and orders',
						'Implementing complex business logic for order processing',
						'Ensuring data consistency across different platforms',
					],
					solutions: [
						'Leveraged Spring Boot for rapid and robust development',
						'Implemented comprehensive REST controllers',
						'Utilized JPA/Hibernate for efficient data management',
					],
				},
			},
			{
				id: '2',
				title: 'Web Dashboard',
				description: 'A responsive administrative interface built with Angular for catalog and order management.',
				problem: 'Providing an intuitive interface for administrators to manage the platform efficiently.',
				videoUrl: '/projects/web/ecommerce/dashboard/demo.mp4',
				thumbnailUrl: '/projects/web/ecommerce/dashboard/thumbnail.png',
				techStack: ['Angular', 'TypeScript', 'RxJS', 'HTML/SCSS'],
				links: {
					github: 'https://github.com/Hisukurifu24/prototype/tree/main/front-end-prototype',
				},
				caseStudy: {
					goals: [
						'Create a dynamic single-page application (SPA)',
						'Design a responsive UI for desktop and tablet use',
						'Visualize sales data and order statuses',
					],
					challenges: [
						'Synchronizing frontend state with backend updates',
						'Creating complex forms for product management',
						'Handling asynchronous API calls and error states',
					],
					solutions: [
						'Used Angular framework for modular component design',
						'Implemented RxJS for reactive state management',
						'Designed a clean, material-inspired user interface',
					],
				},
			},
			{
				id: '3',
				title: 'Telegram Mini App Integration',
				description: 'Advanced integration providing quick and intuitive access directly through the Telegram messaging app.',
				problem: 'Delivering a seamless shopping experience within a chat interface.',
				videoUrl: '/projects/web/ecommerce/telegram/demo.mp4',
				thumbnailUrl: '/projects/web/ecommerce/telegram/thumbnail.png',
				techStack: ['Telegram Web Apps API', 'Angular', 'TypeScript'],
				links: {},
				caseStudy: {
					goals: [
						'Integrate the e-commerce platform as a Telegram Mini App',
						'Design an optimal user experience for the messaging context',
						'Enable quick access to catalogs and ordering',
					],
					challenges: [
						'Adapting the UI for the Mini App environment',
						'Ensuring smooth communication between Telegram and the backend',
						'Optimizing performance for mobile usage',
					],
					solutions: [
						'Utilized Telegram API for native-like integration',
						'Designed a mobile-optimized interface with Angular',
						'Implemented efficient API integration for the Mini App',
					],
				},
			},
		],
	},
]
