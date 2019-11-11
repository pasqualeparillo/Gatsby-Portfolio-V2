import React from 'react';
import './layout.css';
import { ContextProvider } from '../store/state';
import NavIndex from '../navigation';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Layout = ({ children, location }) => (
	<ContextProvider>
		<div className="flex flex-col self-center items-center min-h-screen full justify-between relative overflow-hidden bg-white font-sans">
			<NavIndex location={location} />
			<AnimatePresence exitBeforeEnter initial={false}>
				<motion.div
					className="lg:w-11/12 w-full flex mx-auto flex-1 overflow-hidden bg-white"
					initial="exit"
					animate="enter"
					exit="exit"
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
