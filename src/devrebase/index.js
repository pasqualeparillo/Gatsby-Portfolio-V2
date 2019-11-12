import React from 'react';
import Intro from './intro';
import ProjectInfo from './projectInfo';
import { Link } from 'gatsby';
import './index.css';
export default function DevRebase() {
	return (
		<div className="flex flex-col flex-1 border-r border-l border-black">
			<Link to="/404" className="absolute z-50">
				404
			</Link>
			<Intro />
			<ProjectInfo />
		</div>
	);
}
