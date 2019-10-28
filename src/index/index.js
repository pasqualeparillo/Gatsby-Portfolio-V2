import React from 'react';
import Intro from './intro';
import Projects from './projects';
import Footer from './footer';

export default function Index() {
	return (
		<div className="flex flex-wrap flex-grow">
			<Intro />
			<Projects />
			<Footer />
		</div>
	);
}
