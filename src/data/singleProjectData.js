// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Easy2 from '../images/Easy2.jpg';
import Easy3 from '../images/Easy3.jpg';
import Easy from '../images/Easy1.jpg';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiGithub
} from 'react-icons/fi';
import React from 'react';

export const singleProjectData = [
	{
		ProjectHeader: {
			title: 'React & Tailwindcss Portfolio',
			publishDate: 'Apr 7, 2022',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Portfolio Project',
				img: Image1,
			},
			{
				id: 2,
				title: 'Portfolio Project',
				img: Image2,
			},
			{
				id: 3,
				title: 'Portfolio Project',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Self',
				},
				{
					id: 2,
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: 4,
					title: 'Phone',
					details: '408 607 7473',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Quickly launch a React & Tailwindcss portfolio, that meets personal standards to quality, ease of use, functionality, and refine project organization.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React',
						'TailwindCSS',
						'SvGator',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						"This project was that I was going to be taking all of the skills I'd learnt over the last half a year and create my first production ready website. Conjoining all my past experinces into this project allowed for skill homogenization, and orientation towards delivery of a quality end-product.",
				},
				{
					id: 2,
					details:
						"React was the front-end framework of choice as it was a good step up in functionality, performance, and widespread use from earlier projects of mine which relied on pure HTML/CSS/JS or Flask Apps. Many prototypes of this website were built, but as I was still learning the ropes of the framework many grew to unmaintable messes by over-compartmentalizing every component into it's own file. Adding to this, having individual css files for the overabundance of components made modifying or creating components a much more tedious task.",
				},
				{
					id: 3,
					details:
						"During my frustrations I stumbled across a video by FireShipIO about tailwindcss a lightweight, class-based css framework. Utilizing tailwindcss I was able to prototype and test at a much faster pace, allowing me to discover the novelities and structure of a proper react app.",
				},
				{
					id: 4,
					details:	
						"After everything, I've been left with the website before you. This was only the beginning of my portfolio, but I intend to keep adamant with my passions and create what I believe to make the world a better place.",
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://www.instagram.com/nicky_d_/',
				},
				{
					id: 2,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://www.facebook.com/nick.dickerman',
				},
				{
					id: 3,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://www.linkedin.com/in/nicholas-dimidik-71b20b159/',
				},
				{
					id: 4,
					name: 'Github',
					icon: <FiGithub />,
					url: 'https://github.com/StickOnAStick',
				},
			],
		}
	},
	{
		ProjectHeader: {
			title: 'MechanALink',
			publishDate: 'March, 2022',
			tags: 'Mobile App',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Image1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Self',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Full-Stack Web & Mobile App',
				},
				{
					id: 3,
					title: 'Website',
					details: 'TBD',
				},
				{
					id: 4,
					title: 'Phone',
					details: 'TBD',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Create a Web & Native mobile app to aliviate customer distrust in the vehicle mechanics by bringing the customer closer to the vehcile while in shop; as well as, provide resources for general public to have access to rentalable industrial grade-equipment. ',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React',
						'React Native',
						'TailwindCSS',
						'SvGator',
					],
				},
			],
			ProjectDetailsHeading: 'Concept & Origins',
			ProjectDetails: [
				{
					id: 1,
					details:
						"Conceptulization of MechanALink began as I was beginning to feel comfortable with modern frameworks like React, and wanted to see what other projects I could conjure up. It was during this time that I'd gotten the itch for a 'million dollar app idea' as so many other young developers do, which resulted in the formation of MechanALink (temporary name).",
				},
				{
					id: 2,
					details:
						"The original purpose for the app was to provide the public with rentable industrial tooling, and small mechanic shops with a way to rent out their equipment on a pay-per-hour basis. I'd gotten the idea for this after watching epoxy table crafters on YouTube who'd frequently need to rent out industrial planners to level large wood table tops, and saw through the millions of views and comments that many others wished that such a service existed near them for their own crafts. The goal of the project was to provide communities with such a hub in which they can have preferential access to tooling, and the shops would be able to make income off of unused equipment time.",
				},
				{
					id: 3,
					details:
						"During the conceptulization my girlfriend had also began running into car troubles, which required multiple visits to various mechanic shops. Much of this time was met with distrought as what would always seem to be a simple fix would expand into a large bundle of problems that needed urgent repair according to the salesman at the front. After multiple mechanic visits, all of which gave various differing issues listed for needing repair, I'd became frustrated at the state of these secrecy and upselling that these shops used to upsell customers. This is when I'd decided to expand on the app into MechanALink, which would serve to elimate the curtain that hides the customer from repairs.",
				},
				{
					id: 4,
					details:
						"The current goal to accomplish this is to to have mechanics photograph and document every part in need of repair, and subit a message to customers when other items not initially disclosed are also in need of repair or inspection. After more consideration to the idea I realized that yelp already provides such features for mechanic shops and decided to scrap the idea; however, I plan on continuing with the original plan for rentalable industrial equipment under the name of ShopStop as for now. ",
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://www.instagram.com/nicky_d_/',
				},
				{
					id: 2,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://www.facebook.com/nick.dickerman',
				},
				{
					id: 3,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://www.linkedin.com/in/nicholas-dimidik-71b20b159/',
				},
				{
					id: 4,
					name: 'Github',
					icon: <FiGithub />,
					url: 'https://github.com/StickOnAStick',
				},
			],
		}
	},
	{	
		ProjectHeader: {
			title: 'Easy Co.',
			publishDate: 'May, 2022',
			tags: 'FullStack / AI',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Easy,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Easy2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Easy3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Self',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Machine Learning in App',
				},
				{
					id: 3,
					title: 'Website',
					details: 'TBD',
				},
				{
					id: 4,
					title: 'Phone',
					details: 'TBD',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Quickly launch a React & Tailwindcss portfolio, that meets personal standards to quality, ease of use, functionality, and refine project organization.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React',
						'TailwindCSS',
						'SvGator',
					],
				},
			],
			ProjectDetailsHeading: 'Concept & Origins',
			ProjectDetails: [
				{
					id: 1,
					details:
						"Easy Co. serves to aliviate most mundane input based jobs and allow for automatic data processing with high level data abstractions. Easy will automatically scan for input data and feed it into a neural network, generating high level abstractions of the data. Put simply, Easy plans to overtake Excel.",
				},
				{
					id: 2,
					details:
						"Easy's idea came about after learning about WebApps using Electron, such as Discord, and personal interest as well as industry shift towards neural network (AI) usage. Every industry needs a spreadsheet, and many are still learning how to incorperate these networks for their benefit. Seeing the potential for this market, time should not be wasted towards discovery and production of the tool of tommorow.",
				},
				{
					id: 3,
					details:
						"",
				},
				{
					id: 4,
					details:
						"",
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://www.instagram.com/nicky_d_/',
				},
				{
					id: 2,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://www.facebook.com/nick.dickerman',
				},
				{
					id: 3,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://www.linkedin.com/in/nicholas-dimidik-71b20b159/',
				},
				{
					id: 4,
					name: 'Github',
					icon: <FiGithub />,
					url: 'https://github.com/StickOnAStick',
				},
			],
		}
	},

	];