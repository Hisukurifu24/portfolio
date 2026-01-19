import { ProjectCategory } from './types'

export const gameProjects: ProjectCategory[] = [
	{
		id: '1',
		title: 'Godot RPG Framework',
		description: 'A comprehensive collection of modular systems for RPG game development',
		links: {
			github: 'https://github.com/Hisukurifu24/GodotArtOffline',
		},
		previewImage: '/projects/games/godot-rpg/preview.png',
		tagline: 'Building blocks for immersive RPG experiences',
		expandedDescription: 'A production-ready suite of interconnected systems designed to accelerate RPG development. Each component is built with modularity and extensibility in mind, allowing developers to pick and choose features while maintaining seamless integration across the framework.',
		projects: [
			{
				id: '1',
				title: 'Dynamic Quest System',
				description: 'Modular quest framework with branching narratives and procedural objective generation.',
				problem: 'Building a scalable quest system that supports complex narrative structures',
				videoUrl: '/projects/games/godot-rpg/quest system/quest_system.mp4',
				thumbnailUrl: '/projects/games/godot-rpg/quest system/quest_system.png',
				techStack: ['Godot', 'GDScript', 'Custom Resources', 'JSON'],
				links: {
					github: 'https://github.com/Hisukurifu24/GodotArtOffline/tree/main/Scripts/QuestSystem',
				},
				caseStudy: {
					goals: [
						'Support branching quest lines with multiple outcomes',
						'Enable designers to create quests without code',
						'Track complex quest states and dependencies',
					],
					challenges: [
						'Managing quest state across save/load cycles',
						'Handling edge cases in complex quest chains',
						'Providing clear debugging tools for designers',
					],
					solutions: [
						'Built data-driven system using Custom Resources',
						'Implemented robust serialization for quest states',
						'Created in-editor debugging interface for real-time quest tracking',
					],
				},
			},
			{
				id: '2',
				title: 'Dialog System',
				description: 'Flexible dialogue engine with character portraits, branching choices, and trigger-based events.',
				problem: 'Creating an intuitive system for complex conversations with NPCs',
				videoUrl: '/projects/games/godot-rpg/dialog system/dialog_system.mp4',
				thumbnailUrl: '/projects/games/godot-rpg/dialog system/dialog_system.png',
				techStack: ['Godot', 'GDScript', 'Signals', 'Resource Scripts', 'JSON'],
				links: {
					github: 'https://github.com/Hisukurifu24/GodotArtOffline/blob/main/Scripts/UI/dialogue_box.gd',
				},
				caseStudy: {
					goals: [
						'Support branching conversations with multiple endings',
						'Enable character emotion and portrait switching',
						'Trigger events and quest updates through dialogue',
					],
					challenges: [
						'Managing complex dialogue trees efficiently',
						'Synchronizing UI animations with text display',
						'Handling localization for multiple languages',
					],
					solutions: [
						'Implemented node-based dialogue tree system',
						'Created custom resource types for dialogue data',
						'Built signal-based event system for dialogue triggers',
					],
				},
			},
			{
				id: '3',
				title: 'Inventory System',
				description: 'Grid-based inventory with drag-and-drop, item stacking, and equipment management.',
				problem: 'Designing an intuitive inventory that handles diverse item types',
				videoUrl: '/projects/games/godot-rpg/inventory system/inv_system.mp4',
				thumbnailUrl: '/projects/games/godot-rpg/inventory system/inv_system.png',
				techStack: ['Godot', 'GDScript', 'Control Nodes', 'Custom Resources'],
				links: {
					github: 'https://github.com/Hisukurifu24/GodotArtOffline/tree/main/Scripts/InventorySystem',
				},
				caseStudy: {
					goals: [
						'Create responsive drag-and-drop interface',
						'Support item stacking and categorization',
						'Implement equipment slots with stat bonuses',
					],
					challenges: [
						'Managing item data persistence across scenes',
						'Handling edge cases in drag-and-drop logic',
						'Optimizing UI performance with large inventories',
					],
					solutions: [
						'Built centralized inventory manager singleton',
						'Implemented slot-based grid system with validation',
						'Used object pooling for inventory UI elements',
					],
				},
			},
			{
				id: '4',
				title: 'Survival System',
				description: 'Comprehensive survival mechanics tracking health, mana, stamina, energy, hydration, and expiration timers.',
				problem: 'Managing multiple interconnected survival stats with realistic decay',
				videoUrl: '/projects/games/godot-rpg/survival system/surv_system.mp4',
				thumbnailUrl: '/projects/games/godot-rpg/survival system/surv_system.png',
				techStack: ['Godot', 'GDScript', 'Signals', 'Timers'],
				links: {
					github: 'https://github.com/Hisukurifu24/GodotArtOffline/tree/main/Scripts/Entities',
				},
				caseStudy: {
					goals: [
						'Track six survival stats with realistic degradation',
						'Create visual feedback for critical stat levels',
						'Balance stat interactions for engaging gameplay',
					],
					challenges: [
						'Balancing multiple stat decay rates',
						'Creating intuitive UI for six simultaneous meters',
						'Handling death and expiration mechanics gracefully',
					],
					solutions: [
						'Implemented modular stat system with configurable decay',
						'Created unified stat manager with signal-based events',
						'Built shader-based UI effects for low-stat warnings',
					],
				},
			},
		],
	},
	{
		id: '2',
		title: 'Pong Soccer',
		description: 'A systems-driven reimagining of Pong with international teams, group stages, and knockout tournaments.',
		previewImage: '/projects/games/pong-soccer/preview.png',
		links: {
			github: 'https://github.com/Hisukurifu24/Pong-Soccer',
			itchio: 'https://hiisukurifu.itch.io/pong-soccer',
		},
		tagline: 'Where classic gameplay meets modern sports simulation',
		expandedDescription: 'A unique fusion of retro arcade mechanics with sophisticated tournament management. This project demonstrates how simple gameplay can be elevated through robust system design, creating an engaging competitive experience with real-world tournament structures.',
		projects: [
			{
				id: '1',
				title: 'Tournament System',
				description: 'Dynamic tournament framework supporting group stages, standings, and knockout brackets.',
				problem: 'Designing a scalable tournament structure that simulates real-world international competitions.',
				videoUrl: '/projects/games/pong-soccer/tournament system/turnament_system.mp4',
				thumbnailUrl: '/projects/games/pong-soccer/tournament system/turnament_system.png',
				techStack: ['Godot', 'GDScript', 'Data Structures', 'UI Systems'],
				links: {
					github: 'https://github.com/Hisukurifu24/Pong-Soccer/blob/main/Scripts/group_stage.gd'
				},
				caseStudy: {
					goals: [
						'Support configurable tournament formats (groups + knockout)',
						'Automatically generate brackets based on standings',
						'Allow selection from any international national team',
					],
					challenges: [
						'Handling ranking tie-breakers in group stages',
						'Building a flexible bracket generator for variable team counts',
						'Maintaining tournament state across matches and scenes',
					],
					solutions: [
						'Implemented standings system with points, goal difference, and head-to-head logic',
						'Created procedural bracket generation algorithm',
						'Designed persistent tournament state manager using serialized match data',
					],
				},
			},
			{
				id: '2',
				title: 'Team & Country Selection System',
				description: 'Country-based team selection with unique identities, flags, and stat modifiers.',
				problem: 'Allowing players to choose any national team while preserving balance and identity.',
				videoUrl: '/projects/games/pong-soccer/selection system/team_selection.mp4',
				thumbnailUrl: '/projects/games/pong-soccer/selection system/team_selection.png',
				techStack: ['Godot', 'GDScript', 'UI Systems', 'Data Tables'],
				links: {
					github: 'https://github.com/Hisukurifu24/Pong-Soccer/blob/main/Scripts/team_select.gd',
				},
				caseStudy: {
					goals: [
						'Represent every country with visual identity',
						'Provide stat variation without breaking gameplay balance',
						'Enable easy expansion for new teams',
					],
					challenges: [
						'Managing large datasets of countries efficiently',
						'Preventing stat differences from overpowering gameplay skill',
						'Designing a clean and readable selection UI',
					],
					solutions: [
						'Built data-driven team profiles using JSON configuration files',
						'Applied subtle stat modifiers affecting paddle speed and ball control',
						'Created reusable UI components for team cards and filters',
					],
				},
			},
			{
				id: '3',
				title: 'Match Simulation & AI Opponent',
				description: 'Single-player match logic with adaptive AI and difficulty scaling.',
				problem: 'Creating an AI opponent that feels competitive, readable, and fair.',
				videoUrl: '/projects/games/pong-soccer/ai/ai.mp4',
				thumbnailUrl: '/projects/games/pong-soccer/ai/ai.png',
				techStack: ['Godot', 'GDScript', 'AI Programming'],
				links: {
					github: 'https://github.com/Hisukurifu24/Pong-Soccer/blob/main/Scripts/opponent.gd',
				},
				caseStudy: {
					goals: [
						'Simulate realistic paddle behavior with reaction time',
						'Scale difficulty dynamically across tournament rounds',
						'Ensure matches remain engaging without feeling scripted',
					],
					challenges: [
						'Avoiding perfect AI reaction times',
						'Balancing difficulty between early and late tournament matches',
						'Maintaining performance with real-time physics updates',
					],
					solutions: [
						'Implemented reaction-delay and prediction-based AI movement',
						'Created difficulty curve tied to tournament progression',
						'Used simplified physics sampling for AI ball trajectory prediction',
					],
				},
			},
		],
	},
	{
		id: '3',
		title: 'Shadow Protocol',
		description: 'A zombie survival game where you must resist waves of undead as long as possible.',
		links: {
			github: 'https://github.com/Hisukurifu24/Shadow-Protocol',
		},
		previewImage: '/projects/games/shadow-protocol/preview.png',
		tagline: 'Survive the endless horde',
		expandedDescription: 'An intense survival shooter featuring wave-based zombie combat. Players must manage their arsenal, survive increasingly difficult waves, and compete for the highest score in this test of endurance and precision.',
		projects: [
			{
				id: '1',
				title: 'Weapon System',
				description: 'Complete weapon management handling switching, reloading, and shooting mechanics.',
				problem: 'Creating a responsive and robust weapon system for combat.',
				videoUrl: '/projects/games/shadow-protocol/weapon system/weapons.mp4',
				thumbnailUrl: '/projects/games/shadow-protocol/weapon system/weapons.png',
				techStack: ['Godot', 'GDScript', 'State Machines'],
				links: {
					github: 'https://github.com/Hisukurifu24/Shadow-Protocol/tree/main/Scripts/Weapons',
				},
				caseStudy: {
					goals: [
						'Implement seamless weapon switching',
						'Create realistic reloading mechanics',
						'Handle shooting ballistics and feedback',
					],
					challenges: [
						'Managing weapon states during action',
						'Synchronizing UI with weapon data',
						'Balancing different weapon types',
					],
					solutions: [
						'Used state machine pattern for weapon logic',
						'Implemented modular weapon resources',
						'Created dynamic ammo management system',
					],
				},
			},
			{
				id: '2',
				title: 'Wave Manager',
				description: 'System to manage zombie spawning waves and difficulty progression.',
				problem: 'Designing a challenging yet fair difficulty curve.',
				videoUrl: '/projects/games/shadow-protocol/wave management/waves.mp4',
				thumbnailUrl: '/projects/games/shadow-protocol/wave management/waves.png',
				techStack: ['Godot', 'GDScript', 'Spawning Algorithms'],
				links: {
					github: 'https://github.com/Hisukurifu24/Shadow-Protocol/blob/main/Scripts/Managers/WaveManager.gd',
				},
				caseStudy: {
					goals: [
						'Spawn zombies in waves',
						'Increase difficulty over time',
						'Manage active enemy count',
					],
					challenges: [
						'Determining valid spawn locations',
						'Scaling enemy stats appropriately',
						'Handling wave transitions',
					],
					solutions: [
						'Implemented spawn point validation',
						'Created difficulty scaling formula',
						'Built wave state management system',
					],
				},
			},
			{
				id: '3',
				title: 'Highscore System',
				description: 'Data persistence system for tracking and saving high scores.',
				problem: 'Saving player progress reliably between sessions.',
				videoUrl: '/projects/games/shadow-protocol/highscore system/highscore.mp4',
				thumbnailUrl: '/projects/games/shadow-protocol/highscore system/highscore.png',
				techStack: ['Godot', 'GDScript', 'File System', 'JSON'],
				links: {
					github: 'https://github.com/Hisukurifu24/Shadow-Protocol/blob/main/Scripts/Managers/ScoreManager.gd',
				},
				caseStudy: {
					goals: [
						'Track current score',
						'Save high scores to disk',
						'Load and display high scores',
					],
					challenges: [
						'Ensuring data integrity',
						'Formatting score display',
						'Handling first-time save creation',
					],
					solutions: [
						'Implemented JSON save/load system',
						'Created score manager singleton',
						'Added error handling for file operations',
					],
				},
			},
		],
	},
	{
		id: '4',
		title: 'Unity Action RPG',
		description: 'A class-based Action RPG featuring dynamic combat, inventory management, and narrative systems.',
		links: {
			github: 'https://github.com/Hisukurifu24/Unity-Art-Offline',
		},
		previewImage: '/projects/games/unity-arpg/preview.jpg',
		tagline: 'Class-based combat and exploration',
		expandedDescription: 'A feature-rich Action RPG built in Unity, showcasing a flexible ability system across multiple classes (Assassin, Fighter, Warrior, Mage, Monk), a robust inventory for item management, and an interactive dialogue system for storytelling.',
		projects: [
			{
				id: '1',
				title: 'Action Ability System',
				description: 'Combat system supporting Assassin, Fighter, Warrior, Mage, and Monk classes with unique skills.',
				problem: 'Designing a scalable architecture for diverse combat styles and ability mechanics.',
				videoUrl: '/projects/games/unity-arpg/abilities/abilities.mp4',
				thumbnailUrl: '/projects/games/unity-arpg/abilities/abilities.png',
				techStack: ['Unity', 'C#', 'ScriptableObjects', 'Strategy Pattern'],
				links: {
					github: 'https://github.com/Hisukurifu24/Unity-Art-Offline/tree/main/Assets/Scripts/Gameplay/AbilitySystem/Abilities',
				},
				caseStudy: {
					goals: [
						'Implement distinct playstyles for 5 different classes',
						'Create a modular ability system using ScriptableObjects',
						'Handle cooldowns, resource costs, and visual effects',
					],
					challenges: [
						'Balancing damage and utility across different classes',
						'Decoupling ability logic from character controllers',
						'Managing complex state transitions during combat',
					],
					solutions: [
						'Used Strategy pattern for interchangeable ability behaviors',
						'Built a central ability manager to handle execution and cooldowns',
						'Implemented event-driven VFX and sound triggering',
					],
				},
			},
			{
				id: '2',
				title: 'Inventory System',
				description: 'Comprehensive item management with equipment slots and consumables.',
				problem: 'Creating a user-friendly system to manage diverse game items.',
				videoUrl: '/projects/games/unity-arpg/inventory/inventory.mp4',
				thumbnailUrl: '/projects/games/unity-arpg/inventory/inventory.png',
				techStack: ['Unity', 'C#', 'UI Toolkit', 'MVC'],
				links: {
					github: 'https://github.com/Hisukurifu24/Unity-Art-Offline/blob/main/Assets/Scripts/UI/InventoryUI.cs',
				},
				caseStudy: {
					goals: [
						'Support equipment, consumables, and quest items',
						'Implement drag-and-drop UI functionality',
						'Save and load inventory state',
					],
					challenges: [
						'Synchronizing UI state with backend data',
						'Handling item stacking and splitting',
						'Managing equipment stats and character updates',
					],
					solutions: [
						'Separated data (Model) from UI (View) using MVC pattern',
						'Created a database of item definitions',
						'Implemented serialization for persistent inventory data',
					],
				},
			},
			{
				id: '3',
				title: 'Dialog System',
				description: 'Interactive dialogue system for NPC interactions and storytelling.',
				problem: 'Delivering narrative content through an interactive interface.',
				videoUrl: '/projects/games/unity-arpg/dialog/dialog.mp4',
				thumbnailUrl: '/projects/games/unity-arpg/dialog/dialog.png',
				techStack: ['Unity', 'C#', 'Graph View', 'Node-based Editor'],
				links: {
					github: 'https://github.com/Hisukurifu24/Unity-Art-Offline/blob/main/Assets/Scripts/UI/DialogManager.cs',
				},
				caseStudy: {
					goals: [
						'Create branching dialogue trees',
						'Display character names and text dynamically',
						'Trigger game events from dialogue choices',
					],
					challenges: [
						'Visualizing complex conversation flows',
						'Parsing dialogue data at runtime',
						'Integrating dialogue UI with gameplay state',
					],
					solutions: [
						'Developed a custom node-based editor tool for writing dialogue',
						'Implemented a runtime parser for the dialogue graph',
						'Used events to pause gameplay and trigger cutscenes',
					],
				},
			},
		],
	},
	{
		id: '5',
		title: 'School Fighters',
		description: 'A 2D fighting game featuring dynamic combat, character selection, and local multiplayer.',
		links: {
			github: 'https://github.com/Hisukurifu24/School-Fighters',
			itchio: 'https://hiisukurifu.itch.io/school-fighters',
		},
		previewImage: '/projects/games/school-fighters/preview.png',
		tagline: 'Arcade-style 2D combat',
		expandedDescription: 'A competitive 2D fighting game built in Unity, featuring a robust combat system with combos, a diverse roster of characters, and support for both local player-vs-player and player-vs-AI matches.',
		projects: [
			{
				id: '1',
				title: 'Combat System',
				description: 'Core fighting mechanics including hit detection, combos, and health management.',
				problem: 'Implementing precise hit detection and responsive controls for a fighting game.',
				videoUrl: '/projects/games/school-fighters/combat/combat.mp4',
				thumbnailUrl: '/projects/games/school-fighters/combat/combat.png',
				techStack: ['Unity', 'C#', 'State Machine', 'Animation Events', 'Physics 2D'],
				links: {
					github: 'https://github.com/Hisukurifu24/School-Fighters/tree/master/Assets/Scripts/Battle',
				},
				caseStudy: {
					goals: [
						'Create responsive character movement and attacks',
						'Implement frame-perfect hit detection',
						'Handle health and damage calculations',
					],
					challenges: [
						'Synchronizing animations with hitboxes',
						'Managing input buffering for combos',
						'Balancing attack priority and recovery frames',
					],
					solutions: [
						'Used Animation Events to trigger hitboxes precisely',
						'Implemented an input buffer system for smoother controls',
						'Created a modular health component for all entities',
					],
				},
			},
			{
				id: '2',
				title: 'Character Selection',
				description: 'Menu system for selecting fighters with unique attributes and visuals.',
				problem: 'Allowing players to choose characters and load them into the game scene.',
				videoUrl: '/projects/games/school-fighters/selection/selection.mp4',
				thumbnailUrl: '/projects/games/school-fighters/selection/selection.png',
				techStack: ['Unity', 'C#', 'UI Toolkit', 'ScriptableObjects'],
				links: {
					github: 'https://github.com/Hisukurifu24/School-Fighters/tree/master/Assets/Scripts/Character%20Selection',
				},
				caseStudy: {
					goals: [
						'Display available characters with stats',
						'Handle player 1 and player 2 selection independently',
						'Pass selected character data to the game scene',
					],
					challenges: [
						'Managing UI navigation for two players simultaneously',
						'Loading character assets dynamically',
						'Visualizing selection state clearly',
					],
					solutions: [
						'Used ScriptableObjects to define character data',
						'Implemented a dual-input UI navigation system',
						'Created a persistent game manager to carry selection data',
					],
				},
			},
			{
				id: '3',
				title: 'Local PvP & AI',
				description: 'Game modes supporting local multiplayer and AI opponents.',
				problem: 'Creating an engaging gameplay for both solo and competitive play.',
				videoUrl: '/projects/games/school-fighters/modes/modes.mp4',
				thumbnailUrl: '/projects/games/school-fighters/modes/modes.png',
				techStack: ['Unity', 'C#', 'Finite State Machine', 'Input System'],
				links: {
					github: 'https://github.com/Hisukurifu24/School-Fighters/blob/master/Assets/Scripts/Main%20Screen/GameModeMenu.cs',
				},
				caseStudy: {
					goals: [
						'Support two local players on one device',
						'Create an AI opponent for single-player mode',
						'Manage match state (rounds, wins, game over)',
					],
					challenges: [
						'Handling multiple input devices',
						'Designing AI that reacts to player actions',
						'Resetting game state cleanly between rounds',
					],
					solutions: [
						'Utilized Unity Input System for device management',
						'Built a Finite State Machine for AI behavior',
						'Implemented a round manager to handle game flow',
					],
				},
			},
		],
	},
]
