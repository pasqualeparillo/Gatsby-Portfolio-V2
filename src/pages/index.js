import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../css/style.css';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<div className="flex flex flex-wrap flex-grow relative border-l-2 lg:border-r-0 border-r border-black">
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
			<div className="lg:border-l-2 lg:border-r-2 border-black flex flex-grow" />
		</div>
		<div className="absolute bottom-0 flex flex-wrap w-11/12">
			<div className="bottom-0 lg:w-3/5 w-full flex flex-col flex-wrap relative">
				<p className="uppercase font-black mb-6 font-mono tracking-tight leading-none pl-10 text-xs absolute right-0 -mt-4 mr-2">
					Projects
				</p>
				<div className="border-t-2 border-l-2 border-black w-full flex justify-between">
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
			<div className="bottom-0 flex-grow border-t-2 border-r-2 border-black flex flex-col self-end justify-center ">
				<div className="flex w-full mx-auto justify-around items-center h-full overflow-hidden relative">
					<div className="w-1/2 border-r-2 border-black pt-8 pb-6  flex justify-center items-center">
						<p className="font-mono text-xs uppercase">© 2019 September</p>
					</div>
					<div className="w-1/2 pt-8 pb-6 flex justify-center items-center">
						<p className="font-mono text-xs uppercase">Resume</p>
					</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
