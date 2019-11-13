import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigate } from 'gatsby';
export default function NavIndex({ location }) {
	return (
		<div className="lg:w-11/12 w-full h-20 flex border-b border-black z-50 overflow-hidden">
			<div className="w-20 h-20 flex flex-col items-center justify-center">
				<AnimatePresence>
					{location.pathname !== '/' ? (
						<motion.p
							className="font-black text-6xl h-full w-full flex items-center -mt-2 -mr-4 cursor-pointer"
							onClick={() => navigate('/')}
							initial={{ y: '-100%' }}
							exit={{ y: '-100%' }}
							enter={{ y: 0 }}
						>
							&#60;
						</motion.p>
					) : null}
				</AnimatePresence>
			</div>
			<div className="flex p-6 bg-black justify-center h-20 w-20">
				<div className="flex flex-col justify-around w-full h-full">
					<span className="w-full h-1 bg-white " />
					<span className="w-full h-1 bg-white " />
					<span className="w-full h-1 bg-white " />
				</div>
			</div>
			<div className="flex items-center justify-end text-right h-full ">
				<motion.p
					animate={{ y: 0 }}
					initial={{ y: '100%' }}
					transition={{ duration: 0.4 }}
					className="text-2xl font-black p-4 font-roboto"
				>
					Pasquale Parillo
				</motion.p>
			</div>
		</div>
	);
}
