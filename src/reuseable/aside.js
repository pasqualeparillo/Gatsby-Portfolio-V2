import React from 'react';

import { motion } from 'framer-motion';
export default function Aside({ children }) {
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

	return (
		<motion.div className="flex lg:flex-grow relative lg:w-auto w-full lg:h-full h-64" variants={parent}>
			{children}
		</motion.div>
	);
}
