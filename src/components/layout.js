import React from 'react';
import './layout.css';
import { ContextProvider } from '../store/state';
import NavIndex from '../navigation';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Menu from '../navigation/menu';

const Layout = ({ children, location }) => (
	<ContextProvider>
		<div className="flex flex-col self-center items-center min-h-screen full justify-between relative overflow-hiddenfont-roboto">
			<Menu />
			<NavIndex location={location} />
			<AnimatePresence exitBeforeEnter initial={false}>
				<motion.div
					className="lg:w-11/12 w-full flex mx-auto flex-1 overflow-hidden"
					initial="exit"
					animate="enter"
					exit="exit"
					style={{ backgroundColor: '#f7f3f0' }}
					key={location.pathname}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	</ContextProvider>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};
Layout.defaultProps = {
	location: {}
};

export default Layout;
