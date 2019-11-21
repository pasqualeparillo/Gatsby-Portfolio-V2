import React from 'react';
import Project from '../project';
import { graphql } from 'gatsby';

export default ({ data }) => {
	let items = data.allSitePage.edges[0].node.context;
	return (
		<div className="w-full flex mx-auto flex-1 overflow-hidden bg-white relative">
			<Project data={items} />
		</div>
	);
};

export const query = graphql`
	query($path: String!) {
		allSitePage(filter: { path: { eq: $path } }) {
			edges {
				node {
					context {
						project_name
						data {
							project_description
							project_description_brief
							project_stack
							project_type
						}
					}
				}
			}
		}
	}
`;
