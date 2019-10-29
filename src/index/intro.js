import React from 'react';
import Aside from './aside';
import { motion } from 'framer-motion';

export default function Intro() {
	return (
		<div className="flex flex-wrap flex-grow relative  lg:flex-row">
			<div className="lg:w-3/5 w-full lg:h-full h-64 lg:border-r-2 border-black">
				<div className="w-full h-full flex flex-wrap p-4">
					<div className="flex flex-col justify-center w-full items-start relative overflow-hidden">
						<motion.p
							className="font-black tracking-tighter uppercase absolute"
							style={{ fontSize: '10vw', lineHeight: 0.9, transform: 'translateY(-10%)' }}
							animate={{ y: -10 }}
							initial={{ y: 100 }}
							transition={{ duration: 0.4 }}
						>
							Developer
						</motion.p>
					</div>
					<div className="flex flex-col justify-center w-full items-end relative overflow-hidden">
						<motion.p
							className="font-black tracking-tighter uppercase absolute"
							style={{ fontSize: '10vw', lineHeight: 0.9, transform: 'translateY(-10%)' }}
							animate={{ y: -10 }}
							initial={{ y: 100 }}
							transition={{ duration: 0.4 }}
						>
							from
						</motion.p>
					</div>
					<div className="flex flex-col justify-center w-full items-start relative overflow-hidden">
						<motion.p
							className="font-black tracking-tighter uppercase absolute"
							style={{ fontSize: '10vw', lineHeight: 0.9, transform: 'translateY(-10%)' }}
							animate={{ y: -10 }}
							initial={{ y: 100 }}
							transition={{ duration: 0.4 }}
						>
							Seattle
						</motion.p>
					</div>
				</div>
			</div>
			<Aside />
		</div>
	);
}
