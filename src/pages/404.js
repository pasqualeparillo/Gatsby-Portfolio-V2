import React from 'react';
import SEO from '../components/seo';
import Index from '../404/index';

const NotFoundPage = () => (
	<div className="w-full flex mx-auto flex-1 overflow-hidden bg-white">
		<SEO title="404: Not found" />
		<Index />
	</div>
);

export default NotFoundPage;
