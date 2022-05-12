import AboutMeBio from '../components/about/AboutMeBio';
// import AboutCounter from '../components/about/AboutCounter';
// import AboutClients from '../components/about/AboutClients.js';
import { AboutMeProvider } from '../context/AboutMeContext';
import AboutTimeline from '../components/about/AboutTimeline';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 3 }}
				exit={{opacity: 0 }}
				class="container mx-auto"
				>

				<AboutTimeline />

			</motion.div>
			{/* * Counter without paddings
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div> */}
		</AboutMeProvider>
	);
};

export default About;
