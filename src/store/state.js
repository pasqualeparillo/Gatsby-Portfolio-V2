import React from 'react';
import { SizeProvider } from './size';
function ProviderComposer({ contexts, children }) {
	return contexts.reduceRight(
		(kids, parent) =>
			React.cloneElement(parent, {
				children: kids
			}),
		children
	);
}

function ContextProvider({ children }) {
	return <ProviderComposer contexts={[<SizeProvider />]}>{children}</ProviderComposer>;
}

export { ContextProvider };
