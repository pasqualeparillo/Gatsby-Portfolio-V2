import React from 'react';
import { motion } from 'framer-motion';
import { navigate } from 'gatsby';
export default function Footer() {
	return (
		<div
			className="bottom-0 flex-grow border-t border-black flex flex-col self-end justify-center h-24"
			style={{ zIndex: 999 }}
		>
			<div className="flex w-full mx-auto justify-around items-center h-full overflow-hidden relative">
				<motion.div
					className="w-1/2 border-r border-black pt-4 pb-4 flex justify-center items-center cursor-pointer h-full"
					whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
					whileTap={{ backgroundColor: '#000000', color: '#ffffff' }}
					initial={{ backgroundColor: '#ffffff', color: '#000000' }}
					onClick={() => navigate('/contact')}
				>
					<p className="text-base uppercase font-black font-fira">Contact</p>
				</motion.div>
				<motion.div
					className="w-1/2 pt-4 pb-4 flex justify-center items-center cursor-pointer h-full border-black border-r"
					whileHover={{ backgroundColor: '#ffffff', color: '#000000' }}
					whileTap={{ backgroundColor: '#ffffff', color: '#000000' }}
					initial={{ backgroundColor: '#000000', color: '#ffffff' }}
				>
					<p className="text-base uppercase font-black font-fira">Resume</p>
				</motion.div>
			</div>
		</div>
	);
}
