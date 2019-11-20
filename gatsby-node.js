const path = require('path');
const data = require('./projectList.json');

exports.createPages = ({ actions }) => {
	const { createPage } = actions;

	const template = path.resolve('./src/template/template.js');

	data.forEach(project => {
		let path = project.project_name;
		createPage({
			path,
			component: template,
			context: project
		});
	});
};
