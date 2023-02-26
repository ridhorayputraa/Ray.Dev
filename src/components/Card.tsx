import React from "react";
import { motion } from "framer-motion";

type cardProps = {
  children: React.ReactNode;
  customClass: object;
  mobile?: boolean;
};

export default function Card({ children, customClass, mobile }: cardProps) {
  customClass = {
    'small': 'px-16 py-8'
  }
    return (
    <motion.button whileHover={{ scale: 1.1 }}>
      {mobile === true ? (
        <p className={` ${customClass} bg-red-800`}>{children}</p>
      ) : (
        <p className={`px-16 py-8 bg-red-800`}>{children}</p>
      )}
    </motion.button>
  );
}
