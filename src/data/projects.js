// Import images
import WebImage1 from '../images/PortfolioProj2.jpg';
import easyco from '../images/easy1.svg';
import MobileImage2 from '../images/mobile-project-2.jpg';



export const projectsData = [
	{
		id: 1,
		title: 'React & Tailwindcss Portfolio',
		category: 'Web Application',
		img: WebImage1,
		ProjectHeader: {
			title: 'React & Tailwindcss Portfolio',
			publishDate: 'May 16, 2022',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: 'MechanALink',
		category: 'Mobile Application',
		img: MobileImage2,
		ProjectHeader: {
			title: 'Web App',
			publishDate: 'TBA',
			tags: 'Mobile App',
		},
	},
	{
		id: 3,
		title: 'Easy Co.',
		category: 'Mobile Application',
		img: easyco,
		ProjectHeader: {
			title: 'Easy Co. Machine Learning',
			publishDate: 'TBA',
			tags: 'Simplified Neural Network',
		},
	},
];
