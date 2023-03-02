import { useRef } from "react";
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

export default function ImageParallax({
  id,
  name,
  description,
  link,
  techStack,
  page,
}: dataProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 550);

  return (
    <section>
      <div ref={ref}>
        {/* <Image src={`${link}.png`} /> */}
        {/* <Image */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className=" w-3/4  mb-44 flex items-start p-6 rounded-lg dark:bg-zinc-800 bg-slate-200 shadow-2xl">
            <Image
              style={{
                borderRadius:'8px',
                textShadow: "2px 2px 4px #00000",
                boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.3)",
              }}
              src={`${link}.png`}
              alt={name}
              width={700}
              loading="lazy"
              height={700}
            />
          </div>
        </motion.div>
        {/* src="/Movie.png" alt="A London skyscraper" /> */}
      </div>

      <div className="ml-96 flex flex-col left-0 text-left">
        <motion.h2
          className="text-3xl ml-44 font-bold shadow-slate-900 drop-shadow-2xl "
          style={{ y }}
        >{`${name}`}</motion.h2>
        <motion.h2
          className="text-lg ml-44 mt-2 font-normal shadow-slate-900 drop-shadow-2xl "
          style={{ y }}
        >{`${description}`}</motion.h2>
        <motion.h2
          className="text-md ml-44 mt-2 font-medium shadow-slate-900 drop-shadow-2xl "
          style={{ y }}
        >{`TECH: ${techStack}`}</motion.h2>

        <motion.h2
          className="text-md ml-44 tracking-widest mt-5 font-medium shadow-slate-900 drop-shadow-2xl "
          style={{ y }}
        >
          <a href={page}>See Project!</a>
        </motion.h2>
      </div>
    </section>
  );
}
