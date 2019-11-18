import React, { createContext, useState } from "react";
export const MenuContext = createContext();

export function MenuProvider(props) {
  const [active, setActive] = useState(false);
  return (
    <MenuContext.Provider
      value={{
        active,
        setActive
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}
