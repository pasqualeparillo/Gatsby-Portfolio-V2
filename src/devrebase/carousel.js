import React from 'react';
import paginationHook from './paginationHook';
import MediaQuery from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';

export function Carousel() {
	const { currentImage } = paginationHook();
	return (
		<div className="flex flex-grow h-full w-full flex-1 overflow-hidden relative">
			<MediaQuery minWidth={992}>
				<AnimatePresence>
					<motion.img
						className="bg-contain w-full absolute"
						style={{ height: 'calc(100vh - 21rem)' }}
						key={currentImage}
						exit={{ y: '-200%', opacity: 0 }}
						enter={{ y: '200%', opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						initial={{ y: '-200%', opacity: 0 }}
						transition={{ duration: 1 }}
						src={currentImage}
					/>
				</AnimatePresence>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<motion.img
					className="bg-contain w-full absolute h-64"
					key={currentImage}
					exit={{ x: '-100%', opacity: 0 }}
					enter={{ x: '100%', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					initial={{ x: '-100%', opacity: 0 }}
					transition={{ duration: 1 }}
					src={currentImage}
				/>
			</MediaQuery>
		</div>
	);
}
