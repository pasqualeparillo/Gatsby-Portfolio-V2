import React from 'react';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
import { Carousel } from './carousel';
import paginationHook from './paginationHook';
export default function Aside() {
	const { nextSlide, prevSlide } = paginationHook();
	const parent = {
		exit: {
			opacity: 1,
			transition: {
				when: 'afterChildren'
			}
		},
		enter: {
			opacity: 1,
			transition: {
				when: 'beforeChildren'
			}
		}
	};
	const child = {
		exit: {
			y: '100%',
			transition: {
				duration: 0.4,
				delay: 0.2
			}
		},
		enter: {
			y: 0,
			transition: {
				duration: 0.4,
				delay: 0.4
			}
		},
		whileHover: {
			backgroundColor: '#000000',
			color: '#ffffff',
			transition: {
				duration: 0.4,
				delay: 0.4
			}
		},
		whileTap: {
			backgroundColor: '#000000',
			color: '#ffffff',
			transition: {
				duration: 0.4,
				delay: 0.4
			}
		}
	};
	return (
		<div className="flex lg:flex-grow relative lg:w-auto w-full lg:h-full">
			<MediaQuery minWidth={992}>
				<div
					className="lg:absolute relative w-full flex flex-col justify-end items-end text-black flex-grow"
					style={{ height: `calc(100vh - 11rem)` }}
				>
					<Carousel />
					<motion.div
						variants={parent}
						className="flex w-full overflow-hidden "
						style={{ height: 'calc(16rem - 2rem)' }}
					>
						<motion.div
							className="flex w-1/2 items-center justify-center border-black border-t border-r cursor-pointer "
							variants={child}
						>
							<motion.span
								className="w-full flex items-center justify-center text-13vw font-fira"
								whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
								onClick={prevSlide}
							>
								{'<'}
							</motion.span>
						</motion.div>
						<motion.div
							className="flex w-1/2 items-center justify-center border-black border-t border-r cursor-pointer"
							variants={child}
						>
							<motion.span
								className="w-full flex items-center justify-center text-13vw font-fira"
								whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
								onClick={nextSlide}
							>
								>
							</motion.span>
						</motion.div>
					</motion.div>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<div
					className="relative w-full flex flex-col justify-end items-end text-black"
					style={{ height: `20.1rem` }}
				>
					<Carousel />
					<motion.div variants={parent} className="flex w-full overflow-hidden absolute">
						<motion.div
							className="flex w-1/6 h-16 items-center justify-center border-black border-t border-r border-l cursor-pointer z-50 overflow-hidden"
							variants={child}
						>
							<motion.span
								className="w-full flex items-center justify-center text-13vw "
								initial={{ backgroundColor: '#ffffff', color: '#000000' }}
								whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
								whileTap={{ backgroundColor: '#000000', color: '#ffffff' }}
								onClick={prevSlide}
							>
								{'<'}
							</motion.span>
						</motion.div>
						<motion.div
							className="flex w-1/6 h-16 items-center justify-center border-black border-t border-r cursor-pointer z-50 overflow-hidden"
							variants={child}
						>
							<motion.span
								className="w-full flex items-center justify-center text-13vw "
								initial={{ backgroundColor: '#ffffff', color: '#000000' }}
								whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
								whileTap={{ backgroundColor: '#000000', color: '#ffffff' }}
								onClick={nextSlide}
							>
								>
							</motion.span>
						</motion.div>
					</motion.div>
				</div>
			</MediaQuery>
		</div>
	);
}
