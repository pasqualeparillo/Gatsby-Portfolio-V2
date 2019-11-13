import React, { createContext, useState } from 'react';
export const ImageContext = createContext();

export function ImageProvider(props) {
	const [index, setIndex] = useState(0);
	return (
		<ImageContext.Provider
			value={{
				index,
				setIndex
			}}
		>
			{props.children}
		</ImageContext.Provider>
	);
}
