import React from 'react';
import './layout.css';
import { ContextProvider } from '../store/state';
import NavIndex from '../navigation';

const Layout = ({ children }) => (
	<ContextProvider>
		<div className="flex flex-col self-center items-center min-h-screen full justify-between relative overflow-hidden">
			<NavIndex />
			<main className="lg:w-11/12 w-full flex mx-auto flex-1 overflow-hidden">{children}</main>
		</div>
	</ContextProvider>
);

export default Layout;
