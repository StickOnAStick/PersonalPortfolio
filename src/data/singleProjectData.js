// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiGithub
} from 'react-icons/fi';

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
			publishDate: 'May 1, 2022',
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
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'',
				},
				{
					id: 2,
					details:
						'',
				},
				{
					id: 3,
					details:
						'',
				},
				{
					id: 4,
					details:
						'',
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
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
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
					title: 'Test Name',
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
					details: '555 8888 888',
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
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: 2,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 3,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 4,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
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