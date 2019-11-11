import React from 'react';
import SEO from '../components/seo';
import '../css/style.css';
import DevRebase from '../devrebase/index';

const IndexPage = () => (
	<div className="w-full flex mx-auto flex-1 overflow-hidden bg-white relative">
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<DevRebase />
	</div>
);

export default IndexPage;
