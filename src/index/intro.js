import React from 'react';
import Aside from './aside';
import { motion } from 'framer-motion';

const parent = {
	exit: {
		opacity: 0,
		transition: {
			when: 'afterChildren'
		}
	},
	enter: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.1
		}
	},
	initial: {
		opacity: 0
	}
};
const child = {
	exit: {
		y: '100%',
		transition: {
			duration: 0.4
		}
	},
	enter: {
		y: -10,
		transition: {
			duration: 0.4
		}
	}
};
export default function Intro() {
	return (
		<div className="flex flex-wrap flex-grow relative  lg:flex-row">
			<div className="lg:w-3/5 w-full lg:h-full h-64 lg:border-b-0 border-b-2 border-black">
				<motion.div variants={parent} className="w-full h-full flex flex-wrap p-2">
					<div className="flex flex-col justify-center w-full items-start relative overflow-hidden">
						<motion.p
							className="font-black tracking-tighter uppercase absolute"
							style={{
								fontSize: '10vw',
								lineHeight: 0.9,
								transform: 'translateY(-10%)'
							}}
							variants={child}
							initial={{ y: '100%' }}
						>
							Developer
						</motion.p>
					</div>
					<div className="flex flex-col justify-center w-full items-end relative overflow-hidden">
						<motion.p
							className="font-black tracking-tighter uppercase absolute"
							style={{
								fontSize: '10vw',
								lineHeight: 0.9,
								transform: 'translateY(-10%)'
							}}
							variants={child}
							initial={{ y: '100%' }}
						>
							from
						</motion.p>
					</div>
					<div className="flex flex-col justify-center w-full items-start relative overflow-hidden">
						<motion.p
							className="font-black tracking-tighter uppercase absolute"
							style={{
								fontSize: '10vw',
								lineHeight: 0.9,
								transform: 'translateY(-10%)'
							}}
							variants={child}
							initial={{ y: '100%' }}
						>
							Seattle
						</motion.p>
					</div>
				</motion.div>
			</div>
			<Aside />
		</div>
	);
}
