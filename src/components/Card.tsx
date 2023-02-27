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
        <p className={` 
        ${customClass === 'small' ? 'px-12 py-6' : ''}
        ${customClass === 'medium' ? 'px-4 py-8' : ''}
        ${customClass === 'large' ? 'px-4 py-8' : ''}
        
        bg-red-800`}>{children}</p>
      ) : (
        <p className={`px-16 py-8 mb-10 dark:bg-zinc-800 bg-slate-200 shadow-2xl`}>{children}</p>
      )}
    </motion.button>
  );
}
