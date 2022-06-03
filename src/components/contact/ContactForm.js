import Button from '../reusable/Button';
import { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser'
import React from 'react';

const ContactForm = () => {

	const form = useRef();
	
	const [buttonText, setButtonText] = useState("Submit");

	const clearForm = () =>  {
		form.current.reset();
	}

	const sendEmail = (e) => {
		e.preventDefault();
		setButtonText("Sending.. 🚀");
		emailjs.sendForm('service_xh2i2r2', 'template_ulst08g', form.current, 'gM2Qeixu4TJ33cb1n')
		.then((result) => {
			//handle button text
			setButtonText("Sent! 😁");
			setTimeout( () => {
				setButtonText("Submit");
			}, 1000 );

			//handle form
			clearForm();

		}, (error) => {
			//handle button text
			setButtonText("Failed to send! ☠️")
			console.log(error.text);

			//handle form
			clearForm();
		});
	};
  
	
	
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					ref={form}
					onSubmit={sendEmail}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<div className="font-general-regular">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="user_name"
						>
							Full Name
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="user_name"
							name="user_name"
							type="text"
							required
							placeholder="Your Name"
							aria-label="Name"
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="user_email"
						>
							Email
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="user_email"
							name="user_email"
							type="text"
							required
							placeholder="Your Email"
							aria-label="Email"
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="subject"
						>
							Subject
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="subject"
							name="subject"
							type="text"
							required
							placeholder="Subject"
							aria-label="Subject"
						/>
					</div>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title={buttonText}
							type="submit"
							value="Send"
							aria-label="Send Message"
							
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
