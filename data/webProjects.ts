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
				videoUrl: '/projects/web/ecommerce/backend/backend.mp4',
				thumbnailUrl: '/projects/web/ecommerce/backend/backend.png',
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
				videoUrl: '/projects/web/ecommerce/frontend/frontend.mp4',
				thumbnailUrl: '/projects/web/ecommerce/frontend/frontend.png',
				techStack: ['Angular', 'TypeScript', 'HTML/SCSS'],
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
				videoUrl: '/projects/web/ecommerce/telegram/telegram.mp4',
				thumbnailUrl: '/projects/web/ecommerce/telegram/telegram.png',
				techStack: ['Telegram Mini Apps API', 'Angular', 'TypeScript'],
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
	{
		id: '2',
		title: 'Public Lighting Optimization Web App',
		description: 'A web app designed to monitor and optimize public lighting, managing energy consumption and detecting anomalies.',
		previewImage: '/projects/web/public-lighting/preview.png',
		tagline: 'Smart city solution for energy efficiency',
		expandedDescription: 'During the "Software Engineering" course, I collaborated in a team of 6 people to develop a web app for a company. The app dynamically manages energy consumption, provides real-time monitoring, and detects anomalies. The project required the use of agile methodologies and advanced technologies.',
		links: {
			github: 'https://github.com/SWEllfish14/SWEllfish14',

		},
		projects: [
			{
				id: '1',
				title: 'Frontend Dashboard',
				description: 'Interactive interface for monitoring and controlling public lighting.',
				problem: 'Providing a clear visualization of complex energy data and lighting status.',
				videoUrl: '/projects/web/public-lighting/frontend/frontend.mp4',
				thumbnailUrl: '/projects/web/public-lighting/frontend/frontend.png',
				techStack: ['React', 'TypeScript', 'Material UI'],
				links: {
					github: 'https://github.com/SWEllfish14/SWEllfish14/tree/main/LumosMinima/client',
				},
				caseStudy: {
					goals: [
						'Visualize real-time monitoring data',
						'Provide controls for lighting optimization',
						'Ensure responsive user experience',
					],
					challenges: [
						'Handling real-time state updates',
						'Visualizing geospatial data',
						'Integrating with backend APIs',
					],
					solutions: [
						'Component-based architecture',
						'Real-time data polling/sockets',
						'Interactive data visualization charts',
					],
				},
			},
			{
				id: '2',
				title: 'Backend System',
				description: 'Core logic for energy management, anomaly detection, and data processing.',
				problem: 'Managing data flow and implementing optimization logic for energy consumption.',
				videoUrl: '/projects/web/public-lighting/backend/backend.mp4',
				thumbnailUrl: '/projects/web/public-lighting/backend/backend.png',
				techStack: ['Node.js', 'Express', 'MariaDB'],
				links: {
					github: 'https://github.com/SWEllfish14/SWEllfish14/tree/main/LumosMinima/server',
				},
				caseStudy: {
					goals: [
						'Dynamically manage energy consumption',
						'Detect anomalies in real-time',
						'Serve data to frontend securely',
					],
					challenges: [
						'Processing sensor data efficiently',
						'Implementing optimization algorithms',
						'Database schema design',
					],
					solutions: [
						'RESTful API implementation',
						'Automated detection services',
						'Efficient data modeling',
					],
				},
			},
			{
				id: '3',
				title: 'Team Work & Methodology',
				description: 'Collaboration in a team of 6 using Agile methodologies.',
				problem: 'Coordinating development efforts across a medium-sized team.',
				videoUrl: '/projects/web/public-lighting/team/team.mp4',
				thumbnailUrl: '/projects/web/public-lighting/team/team.png',
				techStack: ['Agile', 'Scrum', 'Git', 'Jira'],
				links: {},
				caseStudy: {
					goals: [
						'Efficient team collaboration',
						'Iterative product development',
						'Code quality maintenance',
					],
					challenges: [
						'Task coordination among 6 members',
						'Version control management',
						'Meeting project deadlines',
					],
					solutions: [
						'Regular sprint planning and standups',
						'Branch-based development workflow',
						'Collaborative code reviews',
					],
				},
			},
			{
				id: '4',
				title: 'Hardware Simulators',
				description: 'Python-based simulators to mimic public lighting hardware and sensor data.',
				problem: 'Testing the system without physical hardware access.',
				videoUrl: '/projects/web/public-lighting/sim/sim.mp4',
				thumbnailUrl: '/projects/web/public-lighting/sim/sim.png',
				techStack: ['Python'],
				links: {},
				caseStudy: {
					goals: [
						'Simulate lamp behavior and energy consumption',
						'Generate realistic sensor data for backend testing',
						'Test anomaly detection algorithms',
					],
					challenges: [
						'Accurately modeling hardware characteristics',
						'Generating diverse data scenarios',
						'Integrating with the backend API',
					],
					solutions: [
						'Object-oriented simulation models',
						'Configurable scenario generation',
						'Automated data transmission scripts',
					],
				},
			},
		],
	},
	{
		id: '3',
		title: 'Wellness & Beauty Client Manager App',
		description: 'Developed a mobile-style application designed for managing client records in a beauty treatment business.',
		previewImage: '/projects/web/wellness/preview.png',
		tagline: 'Manage client records in a beauty treatment business',
		expandedDescription: 'It features client management, treatments management, promos management, track appointments, receive birthday reminders.',
		links: {},
		projects: [
			{
				id: '1',
				title: 'Client Management',
				description: 'Manage client records, track appointments, and receive birthday reminders.',
				problem: 'Streamline client management processes for beauty treatment businesses.',
				videoUrl: '/projects/web/wellness/client/client.mp4',
				thumbnailUrl: '/projects/web/wellness/client/client.png',
				techStack: ['React Native', 'Firebase'],
				links: {},
				caseStudy: {
					goals: [
						'Develop a mobile-style application for managing client records',
						'Implement features for treatments and promos management',
						'Enable appointment tracking and birthday reminders',
					],
					challenges: [
						'Designing an intuitive interface for mobile devices',
						'Integrating with backend services',
					],
					solutions: [],
				},
			},
		],
	},
]
