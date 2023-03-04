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
  laptop?: any;
};

export default function ImageParallax({
  id,
  name,
  description,
  link,
  techStack,
  page,
  laptop,
}: dataProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      {/* Cek kondisi Mobile || Dekstop */}
      <div ref={ref}>
        {/* <Image src={`${link}.png`} /> */}
        {/* <Image */}
        <motion.div whileHover={{ scale: 1.1 }}>
             <div className=" w-3/4 max-w-screen-lg mb-44 flex items-start p-4 rounded-lg dark:bg-zinc-800 bg-slate-200 shadow-2xl">
              <Image
              className="brightness-75"
                style={{
                  borderRadius: "8px",
                  textShadow: "2px 2px 4px #00000",
                  boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.3)",
                }}
                width={730}
                height={730}
                src={`${link}.png`}
                alt={name}
                loading="lazy"
              />
            </div>
          {/* {laptop == 1280 ? (
            <div className=" w-3/5 xl:w-3/4 max-w-screen-lg mb-44 flex items-start p-4 rounded-lg dark:bg-zinc-800 bg-slate-200 shadow-2xl">
              <Image
                style={{
                  borderRadius: "8px",
                  textShadow: "2px 2px 4px #00000",
                  boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.3)",
                }}
                width={730}
                height={730}
                src={`${link}.png`}
                alt={name}
                loading="lazy"
              />
            </div>
          ) : (
            <div className=" w-3/5 max-w-screen-lg mb-44 flex items-start p-4 rounded-lg dark:bg-zinc-800 bg-slate-200 shadow-2xl">
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
            </div>
          )} */}
        </motion.div>
        {/* src="/Movie.png" alt="A London skyscraper" /> */}
      </div>

      <div className="ml-96 flex flex-col text-left">
        <motion.h2
          className="text-3xl ml-44 font-bold stroke-slate-900 shadow-slate-900 drop-shadow-2xl "
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
          className="text-md ml-44   mt-5 font-medium shadow-slate-900 drop-shadow-2xl "
          style={{ y }}
        >
          <a className="hover:opacity-80" href={page}>
            Visit
          </a>
        </motion.h2>
      </div>
    </section>
  );
}
