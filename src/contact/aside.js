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
					<div className="w-full flex flex-col p-4">
						<p className="text-3vw uppercase break-words tracking-tighter ">Hello,</p>
						<p className="text-3vw uppercase break-words tracking-tighter mt-4  ">
							My name is Pasquale Parillo
						</p>
						<p className="text-3vw uppercase break-words tracking-tighter mt-4 ">
							I am a web developer currently living in Seattle, WA.{' '}
						</p>
						<p className="text-3vw uppercase break-words leading-normal tracking-tighter mt-4 ">
							Before becomming a professional developer I had a previous career in IT. This atypical
							background allows me to think with a user first approach to accessability & design.
						</p>
					</div>
				</motion.div>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<motion.div
					className="relative w-full flex flex-col justify-start items-start text-black"
					variants={child}
				>
					<div className="flex flex-col p-4">
						<p className="text-sm uppercase break-words tracking-tighter ">Hello,</p>
						<p className="text-sm uppercase break-words tracking-tighter mt-2  ">
							My name is Pasquale Parillo
						</p>
						<p className="text-sm uppercase break-words tracking-tighter mt-2 ">
							I am a web developer currently living in Seattle, WA.{' '}
						</p>
						<p className="text-sm uppercase break-words leading-normal tracking-tighter mt-2 ">
							Before becomming a professional developer I had a previous career in IT. This atypical
							background allows me to think with a user first approach to accessability & design.
						</p>
					</div>
				</motion.div>
			</MediaQuery>
		</motion.div>
	);
}
