import { Project } from './types'

// Empty structure for you to populate with your web development projects
export const webProjects: Project[] = [
	// Example structure - replace with your actual projects:
	// {
	// 	id: '1',
	// 	title: 'Full-Stack Applications',
	// 	description: 'End-to-end web applications with modern frameworks',
	// 	icon: '🌐',
	// 	tagline: 'Building scalable solutions for the modern web',
	// 	expandedDescription: 'A showcase of full-stack development expertise, featuring responsive user interfaces, RESTful APIs, and cloud-native architectures.',
	// 	features: [
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
		features: [
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
		features: [
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
		tagline: 'Comprehensive solution for beauty treatment businesses',
		expandedDescription: 'A complete management system featuring client records, treatment tracking, promotional campaigns, appointment scheduling with calendar integration, birthday reminders, and streamlined app distribution through app stores.',
		links: {
			github: 'https://github.com/Hisukurifu24/app-centro-benessere-cristina',
			live: 'https://apps.apple.com/it/app/centro-estetico-cristina/id6756626676'
		},
		features: [
			{
				id: '1',
				title: 'Clients and Treatments Management',
				description: 'Comprehensive system for managing client records, treatment history, and service details.',
				problem: 'Efficiently manage client information and track treatment history for personalized service.',
				videoUrl: '/projects/web/wellness/client/client.mp4',
				thumbnailUrl: '/projects/web/wellness/client/client.png',
				techStack: ['React Native', 'TypeScript', 'SQLite'],
				links: {
					github: 'https://github.com/Hisukurifu24/app-centro-benessere-cristina/blob/main/src/screens/ClientiScreen.tsx'
				},
				caseStudy: {
					goals: [
						'Create a centralized client database with treatment history',
						'Enable quick access to client information during appointments',
						'Track treatment outcomes and preferences',
					],
					challenges: [
						'Designing an intuitive mobile interface for busy professionals',
						'Managing complex relational data between clients and treatments',
						'Ensuring data privacy and security',
					],
					solutions: [
						'Implemented local SQLite database for offline access',
						'Created reusable components for data entry and display',
						'Built search and filter functionality for quick client lookup',
					],
				},
			},
			{
				id: '2',
				title: 'Promos Management',
				description: 'System for creating, tracking, and managing promotional campaigns and special offers.',
				problem: 'Need to attract new clients and retain existing ones through targeted promotional campaigns.',
				videoUrl: '/projects/web/wellness/promos/promos.mp4',
				thumbnailUrl: '/projects/web/wellness/promos/promos.png',
				techStack: ['React Native', 'Push Notifications'],
				links: {
					github: 'https://github.com/Hisukurifu24/app-centro-benessere-cristina/blob/main/src/screens/PromozioniScreen.tsx'
				},
				caseStudy: {
					goals: [
						'Create and manage promotional offers with validity periods',
						'Track promotion usage and effectiveness',
						'Notify clients about available promotions',
					],
					challenges: [
						'Designing flexible promotion types (percentage, fixed amount, bundled services)',
						'Preventing duplicate usage of one-time promotions',
						'Scheduling automatic promotion activation and expiration',
					],
					solutions: [
						'Built a promotion engine with customizable parameters',
						'Implemented validation logic for promotion eligibility',
						'Integrated push notifications for promotion alerts',
					],
				},
			},
			{
				id: '3',
				title: 'Calendar and Reminder Management',
				description: 'Integrated calendar system for appointment scheduling with automated birthday and follow-up reminders.',
				problem: 'Reduce no-shows and maintain client engagement through timely reminders and scheduling.',
				videoUrl: '/projects/web/wellness/calendar/calendar.mp4',
				thumbnailUrl: '/projects/web/wellness/calendar/calendar.png',
				techStack: ['React Native', 'Calendar API', 'Local Notifications'],
				links: {
					github: 'https://github.com/Hisukurifu24/app-centro-benessere-cristina/blob/main/src/screens/CalendarioScreen.tsx'
				},
				caseStudy: {
					goals: [
						'Provide visual calendar view for appointment management',
						'Automate birthday reminders for personalized client outreach',
						'Send appointment reminders to reduce no-shows',
					],
					challenges: [
						'Synchronizing with device calendar while maintaining app-specific data',
						'Managing multiple reminder types and schedules',
						'Handling timezone considerations for reminders',
					],
					solutions: [
						'Integrated native calendar APIs for seamless synchronization',
						'Built notification scheduling system with customizable timing',
						'Created dashboard for upcoming birthdays and appointments',
					],
				},
			},
			{
				id: '4',
				title: 'App Distribution (App Store)',
				description: 'Managed the complete app deployment process including App Store submission and distribution.',
				problem: 'Deliver the application to end users through official app stores with proper configuration.',
				videoUrl: '/projects/web/wellness/distribution/distribution.mp4',
				thumbnailUrl: '/projects/web/wellness/distribution/distribution.png',
				techStack: ['React Native', 'Expo', 'App Store Connect', 'TestFlight'],
				links: {},
				caseStudy: {
					goals: [
						'Successfully publish app to Apple App Store',
						'Configure app metadata, screenshots, and descriptions',
						'Set up beta testing distribution channel',
					],
					challenges: [
						'Meeting App Store review guidelines and requirements',
						'Optimizing app bundle size and performance',
						'Managing app signing and provisioning profiles',
					],
					solutions: [
						'Followed Apple Human Interface Guidelines for design',
						'Used Expo build services for streamlined compilation',
						'Set up TestFlight for beta testing before public release',
					],
				},
			},
		],
	},
	{
		id: '4',
		title: 'Sushi Restaurant Website',
		description: 'A modern, responsive website for an all-you-can-eat sushi restaurant featuring menu display, online reservations, order management, and a customer area.',
		previewImage: '/projects/web/sushi/preview.png',
		tagline: 'All-you-can-eat sushi web platform',
		expandedDescription: 'As part of the "Web Technologies" course, I developed a website for an all-you-can-eat sushi restaurant, offering a user-friendly platform for managing information. The site includes features such as menu display, online reservations, order management, and a personalized customer area. It was designed with a modern, responsive interface to ensure optimal navigation on both mobile and desktop devices.',
		links: {
			github: 'https://github.com/AlessandroTigani/Progetto_TecWeb/tree/main',
		},
		features: [
			{
				id: '1',
				title: 'Menu & Online Ordering',
				description: 'Dynamic menu display with categories, item details, and an integrated online ordering flow for takeout and in-restaurant pickup.',
				problem: 'Provide customers with an easy-to-browse menu and a fast ordering experience across devices.',
				videoUrl: '/projects/web/sushi/menu/menu.mov',
				thumbnailUrl: '/projects/web/sushi/menu/menu.png',
				techStack: ['HTML', 'CSS', 'JavaScript'],
				links: {
					github: 'https://github.com/AlessandroTigani/Progetto_TecWeb/blob/main/website/menu.php',
				},
				caseStudy: {
					goals: [
						'Expose a clear and navigable menu',
						'Enable fast, mobile-friendly ordering',
					],
					challenges: [
						'Designing an intuitive UI for many menu items',
						'Keeping the ordering flow snappy on low-bandwidth connections',
					],
					solutions: [
						'Implemented progressive enhancement and client-side caching',
						'Optimized assets and lazy-loaded menu categories',
					],
				},
			},
			{
				id: '2',
				title: 'Reservations System',
				description: 'Online reservation scheduler with time-slot management, capacity handling, and admin controls.',
				problem: 'Allow customers to book tables reliably while preventing overbooking and conflicts.',
				videoUrl: '/projects/web/sushi/reservations/reservations.mov',
				thumbnailUrl: '/projects/web/sushi/reservations/reservations.png',
				techStack: ['JavaScript', 'PostgreSQL'],
				links: {
					github: 'https://github.com/AlessandroTigani/Progetto_TecWeb/blob/main/website/prenota.php',
				},
				caseStudy: {
					goals: [
						'Implement a robust reservation flow',
						'Provide admin tools for managing bookings',
					],
					challenges: [
						'Handling concurrent bookings and edge cases',
						'Providing clear availability feedback to users',
					],
					solutions: [
						'Designed transactional reservation logic in the database',
						'Built an intuitive UI with live availability checks',
					],
				},
			},
			{
				id: '3',
				title: 'Customer Area & Order Management',
				description: 'Personalized customer profiles, order history, and an order management interface for staff.',
				problem: 'Allow customers to view past orders and let staff manage incoming orders seamlessly.',
				videoUrl: '/projects/web/sushi/customer/customer.mov',
				thumbnailUrl: '/projects/web/sushi/customer/customer.png',
				techStack: ['JavaScript', 'PostgreSQL'],
				links: {
					github: 'https://github.com/AlessandroTigani/Progetto_TecWeb/blob/main/website/profilo_utente_prenotazioni.php',
				},
				caseStudy: {
					goals: [
						'Provide a personalized experience for returning customers',
						'Simplify order processing for staff',
					],
					challenges: [
						'Keeping customer data secure',
						'Ensuring order state consistency between client and server',
					],
					solutions: [
						'Implemented secure session handling and database access controls',
						'Used transactional updates and optimistic UI patterns',
					],
				},
			},
			{
				id: '4',
				title: 'Responsive Design & Database Integration',
				description: 'Mobile-first responsive layout and an advanced database layer for managing restaurant data and analytics.',
				problem: 'Ensure consistent experience across devices while maintaining reliable data storage and reporting.',
				videoUrl: '/projects/web/sushi/database/database.mov',
				thumbnailUrl: '/projects/web/sushi/database/database.png',
				techStack: ['PostgreSQL', 'SQL', 'HTML/CSS'],
				links: {
					github: 'https://github.com/AlessandroTigani/Progetto_TecWeb/blob/main/website/css/style.css',
				},
				caseStudy: {
					goals: [
						'Create a responsive UI for both mobile and desktop',
						'Implement a scalable database for orders, reservations, and customers',
					],
					challenges: [
						'Balancing performance and rich functionality',
						'Designing an extensible schema for future features',
					],
					solutions: [
						'Used mobile-first CSS and component reusability',
						'Designed normalized schema with indexes and transaction support',
					],
				},
			},
		],
	},
	{
		id: '5',
		title: 'Database for Cultural Event Management',
		description: 'A dedicated database system to manage conventions and cultural events—handling exhibitors, participants, sessions, tickets, and logistics while providing reporting and analysis tools.',
		previewImage: '/projects/web/expo-database/preview.png',
		tagline: 'Event organization backed by robust data modeling',
		expandedDescription: 'As part of the "Database" course, I developed a database dedicated to managing cultural events such as anime, manga, video game, and film conventions. The system supports the registration and tracking of exhibitors, participants, scheduled events, ticket sales, and logistics, while providing tools for analysis and reporting. Designed to simplify organization and enhance efficiency in resource management.',
		links: {
			github: 'https://github.com/Hisukurifu24/ProgettoBasi',
		},
		features: [
			{
				id: '1',
				title: 'Core Data Model & Schema',
				description: 'Normalized relational schema capturing exhibitors, participants, events, tickets, venues, and logistics.',
				problem: 'Provide a reliable foundation to model complex relationships and ensure data integrity across event operations.',
				videoUrl: '/projects/web/expo-database/database/database.mov',
				thumbnailUrl: '/projects/web/expo-database/database/database.png',
				techStack: ['PostgreSQL', 'SQL', 'ER Modeling', 'Python'],
				links: {
					github: 'https://github.com/Hisukurifu24/ProgettoBasi/blob/main/Codice%20SQL.sql',
				},
				caseStudy: {
					goals: [
						'Design a normalized schema covering exhibitors, sessions, tickets, and logistics',
						'Support efficient queries for reporting and analysis',
						'Ensure transactional integrity for ticket sales and registrations',
					],
					challenges: [
						'Modeling many-to-many relationships (participants/events/exhibitors)',
						'Handling concurrent ticket purchases and availability',
						'Designing reporting queries that remain performant on large datasets',
					],
					solutions: [
						'Normalized schema with junction tables and appropriate indexing',
						'Implemented transaction-based ticket purchase flows and constraints',
						'Created materialized views and optimized queries for frequent reports; used Python/Pandas for deeper analysis',
					],
				},
			},
		],
	},
	{
		id: '6',
		title: 'Graph Creation Software',
		description: 'A desktop application for creating and editing graphs, built to demonstrate object-oriented design and principles.',
		previewImage: '/projects/web/graph-creator/preview.svg',
		tagline: 'Visual graph editor showcasing OOP design',
		expandedDescription: 'Developed for the "Object-Oriented Programming" course, this software lets users create, modify, and persist graphs. Implemented in C++ using the Qt framework, it emphasizes SOLID principles and design patterns to separate model, view, and controller logic, enabling maintainability and extensibility.',
		links: {},
		features: [
			{
				id: '1',
				title: 'Graph Editor & OOP Design',
				description: 'Interactive editor for adding/removing nodes and edges, with support for labels, weights, and layout.',
				problem: 'Provide an intuitive interface and a robust object-oriented model to represent graph structures and editing operations.',
				videoUrl: '/projects/web/graph-creator/editor/editor.mov',
				thumbnailUrl: '/projects/web/graph-creator/editor/editor.svg',
				techStack: ['C++', 'Qt', 'OOP', 'Design Patterns'],
				links: {},
				caseStudy: {
					goals: [
						'Implement a modular object-oriented architecture for graph structures',
						'Provide user-friendly editing tools for graph construction and modification',
						'Enable save/load functionality and basic analysis features',
					],
					challenges: [
						'Designing flexible data structures for various graph types',
						'Keeping UI responsive during layout and edits',
						'Ensuring easy extensibility for future algorithms and features',
					],
					solutions: [
						'Applied design patterns (MVC, Observer, Factory) for clear separation of concerns',
						'Used efficient data structures and incremental layout updates',
						'Implemented serialization for persistence and unit tests for core components',
					],
				},
			},
		],
	},
]