import React, { useContext } from 'react';
import { SizeContext } from '../store/size';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
export default function Aside() {
	const { footerSize, projectSize } = useContext(SizeContext);
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
		<div className="flex lg:flex-grow relative lg:w-auto w-full lg:h-full h-64 font-roboto">
			<MediaQuery minWidth={992}>
				<div
					className="lg:absolute relative w-full flex flex-col justify-end items-end text-black"
					style={{ height: `calc(100vh - ${footerSize.y}px - 5rem)` }}
				>
					<div className="flex flex-grow h-full w-full flex-1 border-black " />
					<motion.div
						variants={parent}
						className="flex w-full  overflow-hidden"
						style={{ height: `calc(${projectSize.y}px - ${footerSize.y}px` }}
					>
						<motion.div
							className="flex w-1/2 items-center justify-center border-black border-t border-r cursor-pointer "
							variants={child}
						>
							<motion.span
								className="w-full flex items-center justify-center text-13vw"
								whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
							>
								{'<'}
							</motion.span>
						</motion.div>
						<motion.div
							className="flex w-1/2 items-center justify-center border-black border-t cursor-pointer"
							variants={child}
						>
							<motion.span
								className="w-full flex items-center justify-center text-13vw"
								whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
							>
								>
							</motion.span>
						</motion.div>
					</motion.div>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<div className="relative w-full flex flex-col justify-end items-end text-black">
					<div className="flex flex-grow h-full w-full flex-1 border-black absolute" />
					<motion.div variants={parent} className="flex w-full overflow-hidden">
						<motion.div
							className="flex w-1/6 h-16 items-center justify-center border-black border-t border-r cursor-pointer z-50"
							variants={child}
						>
							<motion.span
								className="w-full flex items-center justify-center text-13vw"
								whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
							>
								{'<'}
							</motion.span>
						</motion.div>
						<motion.div
							className="flex w-1/6 h-16 items-center justify-center border-black border-t border-r cursor-pointer z-50"
							variants={child}
						>
							<motion.span
								className="w-full flex items-center justify-center text-13vw"
								whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
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
