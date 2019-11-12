import React from 'react';
import MediaQuery from 'react-responsive';
export default function Aside() {
	return (
		<div className="flex lg:flex-grow relative lg:w-auto w-full lg:h-full h-64 font-roboto">
			<MediaQuery minWidth={992}>
				<div
					className="lg:absolute relative w-full flex flex-col justify-end items-end text-black"
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
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<div className="relative w-full flex flex-col justify-start items-start text-black">
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
				</div>
			</MediaQuery>
		</div>
	);
}
