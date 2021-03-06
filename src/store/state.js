import React from "react";
import { SizeProvider } from "./size";
import { ImageProvider } from "./image";
import { MenuProvider } from "./menu";
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
  return (
    <ProviderComposer
      contexts={[<SizeProvider />, <ImageProvider />, <MenuProvider />]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
