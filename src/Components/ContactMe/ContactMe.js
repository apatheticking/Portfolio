import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
	return (
		<div>
			<h1 className="Title">Contact Me</h1>

			<h3 className="Title">Want to get in touch with me?</h3>

			<p> 
				Phone Number: <a href="tel:416-912-1070">416-912-1070</a> <br />
				Linkedin: <a href="https://www.linkedin.com/in/jeffrey-lee-80760a48/"><i className="fa fa-linkedin"></i></a><br />
				or send me an email at <a href="mailto:jjlee16@gmail.com">jjlee16@gmail.com</a>
			</p>

			<form method="POST" action="https://formspree.io/jjlee16@gmail.com">
				<div className="email">
  					<input name="email" placeholder="Your email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" /><br />
  				</div>
  				<div className="message">
  					<textarea name="message" placeholder="Your message" required></textarea><br />
  				</div>
  				<button type="submit">Send</button>
  				<p>powered by <a href="https://formspree.io/">https://formspree.io/</a></p>
			</form>
		</div>
	);
}

export default ContactMe; 