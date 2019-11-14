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
		y: '150%',
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
		<div className="flex flex-wrap flex-grow relative lg:flex-row ">
			<div className="lg:w-3/5 w-full lg:h-full lg:h-64 md:h-80 h-64 lg:border-b-0 border-b border-black">
				<motion.div
					variants={parent}
					className="w-full h-full flex flex-wrap relative flex flex-col w-full overflow-hidden justify-center "
				>
					<div className="flex flex-1 items-end px-2">
						<motion.p
							className="font-black tracking-tighter uppercase z-20 lg:text-9vw md:text-13vw text-18vw bottom-0"
							style={{
								lineHeight: 0.9
							}}
							variants={child}
							initial={{ y: 200 }}
							transition={{ duration: 0.6, ease: 'easeInOut' }}
						>
							DevRebase
						</motion.p>
					</div>

					<div className="lg:w-3/4 w-full flex flex-col justify-between px-4">
						<p className="uppercase py-2 text-xs">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s
						</p>
					</div>
				</motion.div>
			</div>
			<Aside />
		</div>
	);
}
