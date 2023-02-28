import React from "react";
import { motion } from "framer-motion";

type cardProps = {
  children: React.ReactNode;
  customClass?: any;
  mobile?: boolean;
};

export default function Card({ children, customClass, mobile }: cardProps) {
  return (
    <motion.button whileHover={{ scale: 1.1 }}>
      {mobile === true ? (
        <p
          className={` 
        ${customClass === "small" ? "px-16 py-6" : ""}
        ${customClass === "medium" ? "px-4 py-8" : ""}
        ${customClass === "large" ? "px-4 py-8" : ""}
        
        dark:bg-zinc-800 mb-5  flex justify-center rounded-lg bg-slate-200 shadow-xl`}
        >
          {children}
        </p>
      ) : (
        <p
          className={`px-14 py-7 mb-10  rounded-lg flex justify-center dark:bg-zinc-800 bg-slate-200 shadow-2xl`}
        >
          {children}
        </p>
      )}
    </motion.button>
  );
}
