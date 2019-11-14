import React from 'react';
import Intro from './intro';
import Projects from './projects';
import './index.css';
export default function Contact() {
	return (
		<div className="flex flex-col flex-1 border-r border-l border-black">
			<Intro />
			<Projects />
		</div>
	);
}
