import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

type dataProps = {
  id?: number;
  name: string;
  description: string;
  link: any;
  techStack: string;
  page: string;
};

export default function ImageMobile({
  id,
  name,
  description,
  link,
  techStack,
  page,
}: dataProps) {
  return (
    <section className="sm:w-3/6 w-screen overflow-y-hidden ">
      {/* Cek kondisi Mobile || Dekstop */}

      {/* <Image src={`${link}.png`} /> */}
      {/* <Image */}
      <motion.div className="m-10 h-full  mb-20" whileHover={{ scale: 1.1 }}>
        <div className="p-4  rounded-lg  dark:bg-zinc-800 bg-slate-200 shadow-2xl">
          <Image
            style={{
              borderRadius: "8px",
              textShadow: "2px 2px 4px #00000",
              boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.3)",
            }}
            width={530}
            height={530}
            src={`${link}.png`}
            alt={name}
            loading="lazy"
          />
          <div className="mt-10">
            <motion.h2 className="text-3xl  font-extrabold shadow-slate-900 drop-shadow-2xl ">{`${name}`}</motion.h2>
            <motion.h2 className="text-lg  mt-2 font-semibold shadow-slate-900 drop-shadow-2xl ">{`${description}`}</motion.h2>
            <motion.h2 className="text-md  mt-2 font-medium shadow-slate-900 drop-shadow-2xl ">{`TECH: ${techStack}`}</motion.h2>

            <motion.h2 className="text-md   tracking-widest mt-5 font-medium shadow-slate-900 drop-shadow-2xl ">
              <a className="hover:opacity-80 dark:hover:text-blue-900 hover:text-blue-400 " href={page}>
                Visit
              </a>
            </motion.h2>
          </div>
        </div>
      </motion.div>
      {/* src="/Movie.png" alt="A London skyscraper" /> */}
    </section>
  );
}
