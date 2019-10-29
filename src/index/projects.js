import React from 'react';
import Footer from './footer';

export default function Projects() {
	return (
		<div className="flex flex-wrap w-full">
			<div className="bottom-0 lg:w-3/5 w-full flex flex-col flex-wrap relative">
				<p className="uppercase font-black mb-6 font-mono tracking-tight leading-none pl-10 text-xs absolute right-0 -mt-4 mr-2">
					Projects
				</p>
				<div className="border-t-2 lg:border-r-2 border-black w-full flex justify-between">
					<div className="pt-6 pl-10 pr-10 border-r-2 border-black w-1/3 h-full">
						<div className="w-3/4">
							<p className="font-black uppercase leading-none tracking-tighter font-mono">
								Have One of your own
							</p>
							<div className="border-b-2 border-black w-1/2 mt-6 mb-6" />
						</div>
						<div className="h-32 w-3/4">
							<p className="leading-none tracking-tighter font-mono">Grow a vine in your name</p>
						</div>
						<div className="w-1/2 h-10">
							<div className="h-px bg-black w-full" />
						</div>
					</div>
					<div className="pt-6 pl-10 pr-10 border-r-2 border-black w-1/3 h-full">
						<div className="w-3/4">
							<p className="font-black uppercase leading-none tracking-tighter font-mono">
								Have One of your own
							</p>
							<div className="border-b-2 border-black w-1/2 mt-6 mb-6" />
						</div>
						<div className=" h-32 w-3/4">
							<p className="leading-none tracking-tighter font-mono">Grow a vine in your name</p>
						</div>
						<div className="w-1/2 h-10">
							<div className="h-px bg-black w-full" />
						</div>
					</div>
					<div className="pt-6 pl-10 pr-10 w-1/3 h-full">
						<div className="w-3/4">
							<p className="font-black uppercase leading-none tracking-tighter font-mono">
								Have One of your own
							</p>
							<div className="border-b-2 border-black w-1/2 mt-6 mb-6" />
						</div>
						<div className=" h-32 w-3/4">
							<p className="leading-none tracking-tighter font-mono">Grow a vine in your name</p>
						</div>
						<div className="w-1/2 h-10">
							<div className="h-px bg-black w-full relative test" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
