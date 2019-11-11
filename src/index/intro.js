import React from 'react';
import Aside from './aside';
import { motion } from 'framer-motion';

const parent = {
	exit: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
			delayChildren: 0.4,
			staggerChildren: 0.1
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
const childTwo = {
	exit: {
		y: '100%',
		transition: {
			ease: 'easeInOut',
			duration: 0.4,
			delay: 0.1
		}
	},
	enter: {
		y: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.4,
			delay: 0.1
		}
	}
};
const childThree = {
	exit: {
		y: '100%',
		transition: {
			ease: 'easeInOut',
			duration: 0.4,
			delay: 0.2
		}
	},
	enter: {
		y: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.4,
			delay: 0.2
		}
	}
};
const childFour = {
	exit: {
		y: '100%',
		transition: {
			ease: 'easeInOut',
			duration: 0.4,
			delay: 0.3
		}
	},
	enter: {
		y: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.4,
			delay: 0.3
		}
	}
};
const childFive = {
	exit: {
		y: '100%',
		transition: {
			ease: 'easeInOut',
			duration: 0.4,
			delay: 0.4
		}
	},
	enter: {
		y: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.4,
			delay: 0.4
		}
	}
};
export default function Intro() {
	return (
		<div className="flex flex-wrap flex-grow relative  lg:flex-row">
			<div className="lg:w-3/5 w-full lg:h-full h-64 lg:border-b-0 border-b border-black">
				<motion.div variants={parent} className="w-full h-full flex flex-wrap p-2 relative">
					<div className="flex flex-col justify-center w-full items-start relative overflow-hidden">
						<motion.p
							className="font-black tracking-tighter uppercase absolute z-20 text-blue-800 lg:text-10vw md:text-13vw text-18vw"
							style={{
								lineHeight: 0.9,
								transform: 'translateY(-10%)'
							}}
							variants={child}
							initial={{ y: '100%' }}
						>
							Developer
							<motion.span
								className="absolute right-0 text-white z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childTwo}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								Developer
							</motion.span>
							<motion.span
								className="absolute right-0 text-yellow-400 z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childThree}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								Developer
							</motion.span>
							<motion.span
								className="absolute right-0 text-red-600 z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childFour}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								Developer
							</motion.span>
							<motion.span
								className="absolute right-0 text-black z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childFive}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								Developer
							</motion.span>
						</motion.p>
					</div>
					<div className="flex flex-col justify-center w-full items-end relative overflow-hidden">
						<motion.p
							className="font-black tracking-tighter uppercase absolute text-blue-800 lg:text-10vw md:text-13vw text-18vw"
							style={{
								lineHeight: 0.9,
								transform: 'translateY(-10%)'
							}}
							variants={child}
							initial={{ y: '100%' }}
						>
							from
							<motion.span
								className="absolute right-0 text-white z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childTwo}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								From
							</motion.span>
							<motion.span
								className="absolute right-0 text-yellow-400 z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childThree}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								From
							</motion.span>
							<motion.span
								className="absolute right-0 text-red-600 z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childFour}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								From
							</motion.span>
							<motion.span
								className="absolute right-0 text-black z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childFive}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								From
							</motion.span>
						</motion.p>
					</div>
					<div className="flex flex-col justify-center w-full items-start relative overflow-hidden">
						<motion.p
							className="font-black tracking-tighter uppercase absolute text-blue-800 lg:text-10vw md:text-13vw text-18vw"
							style={{
								lineHeight: 0.9,
								transform: 'translateY(-10%)'
							}}
							variants={child}
							initial={{ y: '100%' }}
						>
							Seattle
							<motion.span
								className="absolute right-0 text-white z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childTwo}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								Seattle
							</motion.span>
							<motion.span
								className="absolute right-0 text-yellow-400 z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childThree}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								Seattle
							</motion.span>
							<motion.span
								className="absolute right-0 text-red-600 z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childFour}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								Seattle
							</motion.span>
							<motion.span
								className="absolute right-0 text-black z-10 lg:text-10vw md:text-13vw text-18vw"
								variants={childFive}
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								initial={{ y: '100%' }}
							>
								Seattle
							</motion.span>
						</motion.p>
					</div>
				</motion.div>
			</div>
			<Aside />
		</div>
	);
}
