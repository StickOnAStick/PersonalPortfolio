function AppFooterCopyright() {

	const handleCopyRightReference = (e) => {
		window.open("https://github.com/realstoman/react-tailwindcss-portfolio");
		window.open("https://stoman.me");
	};

	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="#/"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
					onClick={handleCopyRightReference}
				>
					React & TailwindCSS Portfolio
				</a>
				
			
			</div>
		</div>
	);
}

export default AppFooterCopyright;
