import React from 'react';
import Intro from './intro';
import { ProjectList } from '../reuseable/projectList';
import Project from './project';
import ProjectWrap from '../reuseable/projectWrap';
export default function Index() {
	return (
		<div className="flex flex-col flex-1 ">
			<Intro />
			<ProjectWrap text={'Projects'}>
				{ProjectList.map((item, id) => (
					<Project
						description={item.project_description}
						name={item.project_name}
						type={item.project_type}
						link={item.project_link}
						key={id}
					/>
				))}
			</ProjectWrap>
		</div>
	);
}
