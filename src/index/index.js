import React from 'react';
import Intro from './intro';
import Projects from './projects';

export default function Index() {
	return (
		<div className="flex flex-col flex-1 border-r-2 border-l-2 border-black">
			<Intro />
			<Projects />
		</div>
	);
}
