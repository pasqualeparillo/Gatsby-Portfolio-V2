import React from 'react';
import { motion } from 'framer-motion';

export default function IntroAnimation({ variant, text, color }) {
	return (
		<motion.span
			className={color + ' absolute right-0 z-10 lg:text-9vw md:text-13vw text-18vw'}
			variants={variant}
			style={{
				lineHeight: 0.9,
				transform: 'translateY(-10%)'
			}}
			initial={{ y: '100%' }}
		>
			{text}
		</motion.span>
	);
}
