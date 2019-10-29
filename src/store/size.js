import React, { createContext, useState } from 'react';
export const SizeContext = createContext();

export function SizeProvider(props) {
	const [size, setSize] = useState({ x: null, y: null });

	return (
		<SizeContext.Provider
			value={{
				size,
				setSize
			}}
		>
			{props.children}
		</SizeContext.Provider>
	);
}
