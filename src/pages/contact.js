import React from 'react';
import SEO from '../components/seo';
import '../css/style.css';
import Contact from '../contact/index';

const ContactPage = () => (
	<div className="w-full flex mx-auto flex-1 overflow-hidden bg-white relative">
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<Contact />
	</div>
);

export default ContactPage;
