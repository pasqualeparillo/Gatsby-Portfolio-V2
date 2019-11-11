import React, { useContext, useRef, useEffect } from 'react';
import { SizeContext } from '../store/size';
import { motion } from 'framer-motion';
export default function Footer() {
	const { setFooterSize } = useContext(SizeContext);
	const footerRef = useRef(null);
	useEffect(() => {
		setFooterSize({
			x: footerRef.current.getBoundingClientRect().width,
			y: footerRef.current.getBoundingClientRect().height
		});
	}, []);
	useEffect(() => {
		function setWindowSize() {
			setFooterSize({
				x: footerRef.current.getBoundingClientRect().width,
				y: footerRef.current.getBoundingClientRect().height
			});
		}
		window.addEventListener('resize', setWindowSize);
		return () => window.removeEventListener('resize', setWindowSize);
	});

	return (
		<div
			className="bottom-0 flex-grow border-t border-black flex flex-col self-end justify-center "
			ref={footerRef}
		>
			<div className="flex w-full mx-auto justify-around items-center h-full overflow-hidden relative">
				<motion.div
					className="w-1/2 border-r border-black pt-8 pb-6  flex justify-center items-center cursor-pointer"
					whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
					whileTap={{ backgroundColor: '#000000', color: '#ffffff' }}
					initial={{ backgroundColor: '#ffffff', color: '#000000' }}
					transition={{ duration: 0.2 }}
				>
					<p className="text-base uppercase font-black">Contact</p>
				</motion.div>
				<motion.div
					className="w-1/2 pt-8 pb-6 flex justify-center items-center cursor-pointer"
					whileHover={{ backgroundColor: '#ffffff', color: '#000000' }}
					whileTap={{ backgroundColor: '#ffffff', color: '#000000' }}
					initial={{ backgroundColor: '#000000', color: '#ffffff' }}
					transition={{ duration: 0.2 }}
				>
					<p className="text-base uppercase font-black">Resume</p>
				</motion.div>
			</div>
		</div>
	);
}
