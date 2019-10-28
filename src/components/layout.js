import React from 'react';
import './layout.css';

const Layout = ({ children }) => (
	<div className="flex flex-col self-center items-center min-h-screen full justify-between relative overflow-hidden">
		<div className="w-11/12 h-20 border-b-2 border-black flex">
			<div className="flex p-6 bg-black justify-center h-20 w-20 ml-20">
				<div className="flex flex-col justify-around w-full h-full">
					<span className="w-full h-1 bg-white " />
					<span className="w-full h-1 bg-white " />
					<span className="w-full h-1 bg-white " />
				</div>
			</div>
		</div>
		<main className="w-11/12 flex mx-auto flex-1 overflow-hidden">{children}</main>
	</div>
);

export default Layout;
