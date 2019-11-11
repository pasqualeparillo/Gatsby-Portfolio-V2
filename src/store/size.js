import React, { createContext, useState } from 'react';
export const SizeContext = createContext();

export function SizeProvider(props) {
	const [footerSize, setFooterSize] = useState({ x: null, y: null });
	const [projectSize, setProjectSize] = useState({ x: null, y: null });
	return (
		<SizeContext.Provider
			value={{
				footerSize,
				setFooterSize,
				projectSize,
				setProjectSize
			}}
		>
			{props.children}
		</SizeContext.Provider>
	);
}
