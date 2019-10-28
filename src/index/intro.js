import React from 'react';
import Aside from './aside';

export default function Intro() {
	return (
		<div className="flex flex flex-wrap flex-grow relative border-l-2 lg:border-r-0 border-r-2 border-black">
			<div className="flex flex-col lg:w-3/5 w-full relative p-1">
				<div className="flex items-end justify-start">
					<p
						className="font-black text-black tracking-tighter uppercase leading-none -mt-1"
						style={{ fontSize: '10vw', lineHeight: 0.85 }}
					>
						Developer
					</p>
				</div>
				<div className="flex items-end justify-end">
					<p
						className="font-black text-black tracking-tighter uppercase leading-none -mt-1"
						style={{ fontSize: '10vw', lineHeight: 0.85 }}
					>
						From
					</p>
				</div>
				<div className="flex items-end justify-start">
					<p
						className="font-black text-black tracking-tighter uppercase leading-none -mt-1"
						style={{ fontSize: '10vw', lineHeight: 0.85 }}
					>
						Seattle
					</p>
				</div>
			</div>
		</div>
	);
}
