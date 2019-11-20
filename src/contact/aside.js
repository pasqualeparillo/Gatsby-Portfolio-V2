import React from 'react';
import MediaQuery from 'react-responsive';
import { motion } from 'framer-motion';
export default function Aside() {
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
				duration: 0.6
			}
		},
		enter: {
			y: 0,
			transition: {
				duration: 0.6
			}
		}
	};
	return (
		<motion.div
			className="flex lg:flex-grow relative lg:w-auto w-full lg:h-full h-64 font-roboto"
			variants={parent}
		>
			<MediaQuery minWidth={992}>
				<motion.div
					className="lg:absolute relative w-full flex flex-col justify-end items-end text-black"
					variants={child}
					style={{ height: `calc(100vh - 11rem)` }}
				>
					<div className="w-full flex justify-center flex-col p-4">
						<p className="font-black leading-none tracking-tighter p-1">Social</p>
						<p className="text-sm leading-none tracking-tighter p-1">Twitter</p>
						<p className="text-sm leading-none tracking-tighter p-1">Linkedin</p>
						<p className="text-sm leading-none tracking-tighter p-1">Github</p>
					</div>
				</motion.div>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<motion.div
					className="relative w-full flex flex-col justify-end items-start text-black"
					variants={child}
				>
					<div className="w-full flex justify-center flex-col p-4">
						<p className="font-black leading-none tracking-tighter p-1">Social</p>
						<p className="text-sm leading-none tracking-tighter p-1">Twitter</p>
						<p className="text-sm leading-none tracking-tighter p-1">Linkedin</p>
						<p className="text-sm leading-none tracking-tighter p-1">Github</p>
					</div>
				</motion.div>
			</MediaQuery>
		</motion.div>
	);
}
