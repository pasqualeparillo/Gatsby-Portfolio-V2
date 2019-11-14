import React from 'react';
import Intro from './intro';
import ProjectInfo from './projectInfo';
import './index.css';
export default function DevRebase() {
	return (
		<div className="flex flex-col flex-1 border-r border-l border-black">
			<Intro />
			<ProjectInfo />
		</div>
	);
}
