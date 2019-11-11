import React, { useState, useContext, useRef, useEffect } from 'react';
import Footer from './footer';
import { motion } from 'framer-motion';
import ProjectList from './projectList';
import { navigate } from 'gatsby';
import { SizeContext } from '../store/size';
import MediaQuery from 'react-responsive';
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
	}
};
export default function Projects() {
	const projRef = useRef(null);
	const { setProjectSize } = useContext(SizeContext);
	useEffect(() => {
		setProjectSize({
			x: projRef.current.getBoundingClientRect().width,
			y: projRef.current.getBoundingClientRect().height
		});
	}, []);
	useEffect(() => {
		function setWindowSize() {
			setProjectSize({
				x: projRef.current.getBoundingClientRect().width,
				y: projRef.current.getBoundingClientRect().height
			});
		}
		window.addEventListener('resize', setWindowSize);
		return () => window.removeEventListener('resize', setWindowSize);
	});

	return (
		<motion.div className="flex flex-wrap w-full font-roboto" variants={parent}>
			<div className="bottom-0 lg:w-3/5 w-full flex flex-col flex-wrap relative">
				<MediaQuery minWidth={992}>
					<motion.p
						className="uppercase font-black tracking-tight leading-none absolute right-0 p-4 -mt-12 border-r border-l border-t border-black bg-black text-white z-10"
						variants={child}
					>
						DevRebase
					</motion.p>
				</MediaQuery>
				<MediaQuery maxWidth={992}>
					<motion.p
						className="uppercase font-black tracking-tight h-16 leading-none absolute right-0 p-4 -mt-16 border-r border-l border-t border-black bg-black text-white z-10 flex items-center "
						variants={child}
					>
						DevRebase
					</motion.p>
				</MediaQuery>
				<div className="border-t border-r border-black w-full flex justify-between z-20" ref={projRef}>
					{ProjectList.slice(0, 1).map((item, id) => (
						<Project
							description={item.project_description}
							name={item.project_name}
							type={item.project_type}
							link={item.project_link}
							key={id}
						/>
					))}
					<div className="flex bg-black flex-grow" />
				</div>
			</div>
			<Footer />
		</motion.div>
	);
}

function Project({ description, name, type, link }) {
	const [hovered, setIsHovered] = useState(false);
	return (
		<div
			className="w-1/3 h-full lg:border-r border-black relative bg-white cursor-pointer"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={() => navigate(`${link}`)}
		>
			<div className="w-full h-full relative">
				<motion.div
					className="absolute left-0 top-0 bottom-0 bg-black"
					animate={hovered ? { width: '1rem' } : { width: '0rem' }}
				/>
				<div className="pt-4 lg:px-10 px-2 w-full relative">
					<div className="w-full flex flex-wrap ">
						<div className="w-full flex flex-wrap justify-start">
							<div className="w-1/2 flex justify-start">
								<p className="font-black uppercase leading-none tracking-tighter py-2 lg:text-base md:text-base text-xxs">
									Name:
								</p>
							</div>
							<div className="w-1/2 flex justify-start">
								<p className="uppercase leading-none tracking-tighter py-2 lg:text-base md:text-base text-xxs">
									{name}
								</p>
							</div>
						</div>

						<div className="w-full flex flex-wrap justify-start">
							<div className="w-1/2 flex justify-start">
								<p className="font-black uppercase leading-none tracking-tighter py-2 lg:text-base md:text-base text-xxs">
									Type:
								</p>
							</div>
							<div className="w-1/2 flex justify-start">
								<p className="uppercase leading-none tracking-tighter py-2 lg:text-base md:text-base text-xxs">
									{type}
								</p>
							</div>
						</div>
						<div className="border-b border-black w-1/2 mt-6 mb-6" />
					</div>
					<div className="h-32 w-full">
						<p className="leading-normal tracking-tighter ">{description}</p>
					</div>
					<motion.div
						className="h-10 "
						animate={hovered ? { width: '20%' } : { width: '40%' }}
						initial={{ width: '40%' }}
					>
						<div className="h-px bg-black w-full relative ">
							<span
								className="absolute arrow right-0 w-0 h-0"
								style={{
									transform: 'translateY(-50%)',
									borderBottom: '5px solid transparent',
									borderLeft: '7.5px solid black',
									borderTop: '5px solid transparent'
								}}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
