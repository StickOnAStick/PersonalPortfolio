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

export const singleProjectData = {
			
		ProjectHeader: {
			title: 'React & Tailwindcss Portfolio',
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
		
};