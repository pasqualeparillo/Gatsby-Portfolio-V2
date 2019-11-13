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
			when: 'beforeChildren'
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
			ease: 'easeInOut',
			duration: 0.4
		}
	},
	enter: {
		y: -10,
		transition: {
			ease: 'easeInOut',
			duration: 0.4
		}
	}
};

export default function Intro() {
	return (
		<div className="flex flex-wrap flex-grow relative lg:flex-row">
			<div className="lg:w-3/5 w-full lg:h-full h-64 lg:border-b-0 border-b border-black">
				<motion.div variants={parent} className="w-full h-full flex flex-wrap relative">
					<div className="flex flex-col justify-center w-full lg:items-start relative overflow-hidden items-center">
						<motion.p
							className="font-black tracking-tighter uppercase absolute z-20 bottom-0 lg:text-9vw md:text-13vw text-18vw"
							style={{
								lineHeight: 0.9
							}}
							variants={child}
							initial={{ y: '100%' }}
						>
							DevRebase
						</motion.p>
					</div>
				</motion.div>
			</div>
			<Aside />
		</div>
	);
}
