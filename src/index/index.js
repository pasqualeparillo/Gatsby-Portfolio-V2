import React from 'react';
import Intro from './intro';
import Projects from './projects';

export default function Index() {
	return (
		<div className="flex flex-col flex-1 ">
			<Intro />
			<Projects />
		</div>
	);
}
