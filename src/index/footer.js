import React from 'react';

export default function Footer() {
	return (
		<div className="bottom-0 flex-grow border-t-2 border-r border-black flex flex-col self-end justify-center ">
			<div className="flex w-full justify-around items-center h-full overflow-hidden relative">
				<div className="w-full flex justify-center border-r-2 border-black pt-8 pb-6">
					<p className="font-mono text-xs uppercase font-bold">© 2019 September</p>
				</div>
				<div className="w-full flex justify-center pt-8 pb-6">
					<p className="font-mono text-xs uppercase font-bold">Resume</p>
				</div>
			</div>
		</div>
	);
}
