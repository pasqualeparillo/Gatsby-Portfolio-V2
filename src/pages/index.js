import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../css/style.css';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<div className="flex flex flex-wrap flex-grow relative border-l lg:border-r-0 border-r border-black">
			<div className="mt-20 flex flex-col lg:w-3/5 w-full pl-10 pr-10">
				<h1 className="font-black text-3xl text-black leading-none tracking-tighter">Grow your own vine</h1>
				<div className="mt-8 w-full">
					<p className="font-hairline leading-none tracking-tighter font-mono text-xs">
						Grow a vine anywhere in Georgia in your friend’s or your name and receive a bottle of wine from
						your very own vineyard
					</p>
				</div>
			</div>
			<div className="border-l border-r border-black flex flex-grow" />
		</div>
		<div className="absolute bottom-0 flex flex-wrap w-11/12">
			<div className="bottom-0 lg:w-3/5 w-full overflow-hidden flex flex-col flex-wrap">
				<p className="uppercase font-black mb-6 font-mono text-2xl tracking-tight leading-none pl-10">
					Projects
				</p>
				<div className="border-t border-l border-black w-full flex justify-between">
					<div className="pt-6 pl-10 pr-10 border-r border-black w-1/3 h-full">
						<div className="w-3/4">
							<p className="font-black uppercase leading-none tracking-tighter font-mono">
								Have One of your own
							</p>
							<div className="border-b border-black w-1/2 mt-6 mb-6" />
						</div>
						<div className="h-32 w-3/4">
							<p className="leading-none tracking-tighter font-mono">Grow a vine in your name</p>
						</div>
						<div className="w-1/2 h-10">
							<div className="h-px bg-black w-full" />
						</div>
					</div>
					<div className="pt-6 pl-10 pr-10 border-r border-black w-1/3 h-full">
						<div className="w-3/4">
							<p className="font-black uppercase leading-none tracking-tighter font-mono">
								Have One of your own
							</p>
							<div className="border-b border-black w-1/2 mt-6 mb-6" />
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
							<div className="border-b border-black w-1/2 mt-6 mb-6" />
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
			<div className="bottom-0 flex-grow pt-8 pb-6 pr-8 pl-8 border-t border-r border-black flex flex-col self-end justify-center ">
				<div className="flex w-3/4 mx-auto justify-around items-center h-full overflow-hidden relative">
					<p className="font-mono text-xs">© 2019 September</p>
					<div className="bg-black w-px h-full absolute" />
					<p className="font-mono text-xs">Leavingstone</p>
				</div>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
