import React from "react";
import "./layout.css";
import { ContextProvider } from "../store/state";
import NavIndex from "../navigation";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => (
  <ContextProvider>
    <div className="flex flex-col self-center items-center min-h-screen full justify-between relative overflow-hidden bg-black">
      <NavIndex />
      <main className="lg:w-11/12 w-full flex mx-auto flex-1 overflow-hidden bg-white">
        <AnimatePresence exitBeforeEnter initial={false}>
          {children}
        </AnimatePresence>
      </main>
    </div>
  </ContextProvider>
);

export default Layout;
