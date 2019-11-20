import React from 'react';
import Aside from './aside';
import { motion } from 'framer-motion';
import IntroAnimation from './introAnimation';
import MediaQuery from 'react-responsive';

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
		y: 300,
		transition: {
			ease: 'easeInOut',
			duration: 0.4
		}
	},
	enter: {
		y: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.4
		}
	}
};
const childTwo = {
	exit: {
		y: 300,
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
		y: 300,
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
		y: 300,
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
		y: 300,
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
		<div className="flex flex-wrap flex-grow relative lg:flex-row">
			<div className="lg:w-3/5 w-full lg:h-full h-64 lg:border-b-0 border-b border-black ">
				<motion.div variants={parent} className="w-full h-full flex flex-wrap relative font-bebas">
					<MediaQuery maxWidth={992}>
						<div className="flex flex-col lg:justify-center justify-end w-full items-start relative overflow-hidden">
							<motion.p
								className="font-black tracking-widest uppercase lg:absolute relative z-20 text-black lg:text-8vw md:text-13vw text-8vw leading-none tracking-normal cursor-pointer pl-4 pt-2 pb-2"
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								variants={child}
								initial={{ y: 300 }}
							>
								<a className="appearance-none" href="mailto:patparillo@gmail.com">
									Email:
									<IntroAnimation
										text={'Email:'}
										variant={child}
										color={'text-green-600'}
										size={'text-8vw'}
									/>
									<IntroAnimation
										text={'Email:'}
										variant={childTwo}
										color={'text-yellow-600'}
										size={'text-8vw'}
									/>
									<IntroAnimation
										text={'Email:'}
										variant={childThree}
										color={'text-blue-600'}
										size={'text-8vw'}
									/>
									<IntroAnimation
										text={'Email:'}
										variant={childFour}
										color={'text-red-600'}
										size={'text-8vw'}
									/>
									<IntroAnimation
										text={'Email:'}
										variant={childFive}
										color={'text-black'}
										size={'text-8vw'}
									/>
								</a>
							</motion.p>
							<motion.p
								className="font-black tracking-widest uppercase lg:absolute relative text-black lg:text-5vw md:text-13vw text-8vw leading-none tracking-normal pl-4 pt-2 pb-2"
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								variants={child}
								size={'text-8vw'}
								initial={{ y: 300 }}
							>
								patparillo@gmail.com
								<a className="appearance-none" href="mailto:patparillo@gmail.com">
									<IntroAnimation
										text={'patparillo@gmail.com'}
										variant={child}
										size={'text-8vw'}
										color={'text-green-600'}
									/>
									<IntroAnimation
										text={'patparillo@gmail.com'}
										variant={childTwo}
										size={'text-8vw'}
										color={'text-yellow-600'}
									/>
									<IntroAnimation
										text={'patparillo@gmail.com'}
										variant={childThree}
										size={'text-8vw'}
										color={'text-blue-600'}
									/>
									<IntroAnimation
										text={'patparillo@gmail.com'}
										variant={childFour}
										size={'text-8vw'}
										color={'text-red-600'}
									/>
									<IntroAnimation
										text={'patparillo@gmail.com'}
										variant={childFive}
										size={'text-8vw'}
										color={'text-black'}
									/>
								</a>
							</motion.p>
						</div>
					</MediaQuery>
					<MediaQuery minWidth={992}>
						<div className="flex flex-col lg:justify-center justify-end w-full items-start relative overflow-hidden p-1">
							<motion.p
								className="font-black tracking-widest uppercase lg:absolute relative z-20 text-black lg:text-5vw md:text-13vw text-8vw leading-none tracking-normal cursor-pointer"
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								variants={child}
								size={'text-5vw'}
								initial={{ y: 300 }}
							>
								<a className="appearance-none" href="mailto:patparillo@gmail.com">
									Email:
									<IntroAnimation
										text={'Email:'}
										variant={child}
										color={'text-green-600'}
										size={'text-5vw'}
									/>
									<IntroAnimation
										text={'Email:'}
										variant={childTwo}
										color={'text-yellow-600'}
										size={'text-5vw'}
									/>
									<IntroAnimation
										text={'Email:'}
										variant={childThree}
										color={'text-blue-600'}
										size={'text-5vw'}
									/>
									<IntroAnimation
										text={'Email:'}
										variant={childFour}
										color={'text-red-600'}
										size={'text-5vw'}
									/>
									<IntroAnimation
										text={'Email:'}
										variant={childFive}
										color={'text-black'}
										size={'text-5vw'}
									/>
								</a>
							</motion.p>
						</div>
						<div className="flex flex-col lg:justify-center justify-end w-full items-start relative overflow-hidden p-1">
							<motion.p
								className="font-black tracking-widest uppercase lg:absolute relative text-black lg:text-5vw md:text-13vw text-8vw leading-none tracking-normal"
								style={{
									lineHeight: 0.9,
									transform: 'translateY(-10%)'
								}}
								variants={child}
								size={'text-5vw'}
								initial={{ y: 300 }}
							>
								patparillo@gmail.com
								<a className="appearance-none" href="mailto:patparillo@gmail.com">
									<IntroAnimation
										text={'patparillo@gmail.com'}
										variant={child}
										size={'text-5vw'}
										color={'text-green-600'}
									/>
									<IntroAnimation
										text={'patparillo@gmail.com'}
										variant={childTwo}
										size={'text-5vw'}
										color={'text-yellow-600'}
									/>
									<IntroAnimation
										text={'patparillo@gmail.com'}
										variant={childThree}
										size={'text-5vw'}
										color={'text-blue-600'}
									/>
									<IntroAnimation
										text={'patparillo@gmail.com'}
										variant={childFour}
										size={'text-5vw'}
										color={'text-red-600'}
									/>
									<IntroAnimation
										text={'patparillo@gmail.com'}
										variant={childFive}
										size={'text-5vw'}
										color={'text-black'}
									/>
								</a>
							</motion.p>
						</div>
					</MediaQuery>
				</motion.div>
			</div>
			<Aside />
		</div>
	);
}
