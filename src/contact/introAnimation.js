import React from 'react';
import { motion } from 'framer-motion';

export default function IntroAnimation({ variant, text, color, size }) {
	return (
		<motion.span
			className={color + ' absolute right-0 z-10 leading-none tracking-widest cursor-pointer ' + size}
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
