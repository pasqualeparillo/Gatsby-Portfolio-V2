import React from 'react';

export default function Aside() {
	return (
		<div className="flex lg:flex-grow relative lg:w-auto w-full lg:h-full h-64">
			<div className="absolute h-full w-full" style={{ height: '80vh' }} />
		</div>
	);
}
