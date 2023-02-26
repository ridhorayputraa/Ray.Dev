import React from "react";
import { motion } from "framer-motion";

type cardProps = {
  children: React.ReactNode;
  customClass: any;
  mobile?: boolean;
};

export default function Card({ children, customClass, mobile }: cardProps) {
  console.log(customClass)
    customClass = {
    'small': 'px-16 py-8'
  }
    return (
    <motion.button whileHover={{ scale: 1.1 }}>
      {mobile === true ? (
        <p className={` ${customClass === 'small' ? '' : 'px-12 py-6'} bg-red-800`}>{children}</p>
      ) : (
        <p className={`px-16 py-8 bg-red-800`}>{children}</p>
      )}
    </motion.button>
  );
}
