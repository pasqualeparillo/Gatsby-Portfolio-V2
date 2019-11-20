import React from 'react';
import Intro from './intro';
import ProjectInfo from './projectInfo';
import './index.css';
export default function Project({ data }) {
	return (
		<div className="flex flex-col flex-1">
			<Intro data={data} />
			<ProjectInfo data={data} />
		</div>
	);
}
