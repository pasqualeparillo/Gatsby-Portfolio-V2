import React from 'react';
import Footer from './footer';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
const parent = {
	exit: {
		opacity: 1,
		transition: {
			when: 'afterChildren',
			staggerChildren: 0.2
		}
	},
	enter: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerDirection: -1,
			staggerChildren: 0.2
		}
	}
};
const child = {
	exit: {
		y: '100%',
		transition: {
			delay: 0.4,
			duration: 0.4
		}
	},
	enter: {
		y: 0,
		transition: {
			delay: 0.4,
			duration: 0.4
		}
	}
};
const childTwo = {
	exit: {
		y: '100%',
		transition: {
			duration: 0.4
		}
	},
	enter: {
		y: 0,
		transition: {
			duration: 0.4
		}
	}
};
export default function ProjectInfo() {
	return (
		<motion.div className="flex flex-wrap w-full font-roboto lg:h-64" variants={parent}>
			<div className="bottom-0 lg:w-3/5 w-full flex flex-col flex-wrap relative bg-white border-black border-t border-r">
				<MediaQuery minWidth={992}>
					<motion.p
						className="uppercase font-black tracking-tight leading-none absolute right-0 p-4 -mt-12 border-r border-l border-t border-black bg-black text-white z-10"
						style={{ marginRight: '-1px' }}
						variants={child}
					>
						DevRebase
					</motion.p>
				</MediaQuery>
				<MediaQuery maxWidth={992}>
					<motion.p
						className="uppercase font-black tracking-tight h-16 leading-none absolute right-0 p-4 -mt-16 border-r border-l border-t border-black bg-black text-white flex items-center z-10"
						variants={child}
					>
						DevRebase
					</motion.p>
				</MediaQuery>
				<motion.div className="min-w-full flex justify-between z-50 bg-white h-full" variants={parent}>
					<Info />
				</motion.div>
			</div>
			<Footer />
		</motion.div>
	);
}

function Info() {
	return (
		<motion.div className="h-full flex flex-1 relative bg-white" variants={childTwo} initial="exit">
			<div className="pt-4 lg:px-10 px-2 w-full flex">
				<div className="flex flex-col w-3/4">
					<div className="lg:w-1/4 w-3/4 flex justify-between">
						<p className="uppercase font-black py-2">Title:</p>
						<p className="uppercase  py-2">Devrebase</p>
					</div>
					<div className="lg:w-1/4 w-3/4 flex justify-between">
						<p className="uppercase font-black py-2">Type:</p>
						<p className="uppercase  py-2">Fullstack</p>
					</div>
					<div className="w-full flex flex-col justify-between">
						<p className="uppercase font-black py-2">About:</p>
						<p className="uppercase py-2 text-xs">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s
						</p>
					</div>
				</div>
				<div className="flex">
					<div className="lg:flex-row justify-between">
						<p className="uppercase font-black py-2">Link:</p>
						<motion.button
							className="uppercase font-black py-2 px-4 bg-white border border-black"
							whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
							whileTap={{ backgroundColor: '#000000', color: '#ffffff' }}
						>
							Devrebase
						</motion.button>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
