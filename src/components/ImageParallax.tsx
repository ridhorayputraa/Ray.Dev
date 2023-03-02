import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

type dataProps = {
  id: number;
  name: string;
  description: string;
  link: any;
};

export default function ImageParallax({
  id,
  name,
  description,
  link,
}: dataProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 400);

  return (
    <section>
      <div ref={ref}>
        {/* <Image src={`${link}.png`} /> */}
        {/* <Image */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className="w-2/4 mr- mb-44 flex items-start p-6 rounded-lg dark:bg-zinc-800 bg-slate-200 shadow-2xl">
            <Image
              style={{
                textShadow: "2px 2px 4px #00000",
                boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.3)",
              }}
              src={`${link}.png`}
              alt={name}
              width={500}
              loading="lazy"
              height={500}
            />
          </div>
        </motion.div>
        {/* src="/Movie.png" alt="A London skyscraper" /> */}
      </div>
      <motion.h2 style={{ y }}>{`${id}`}</motion.h2>
      <motion.h2 className="text-lg font-semibold shadow-slate-900 drop-shadow-2xl shadow-current" style={{ y }}>{`${name}`}</motion.h2>
      <motion.h2 style={{ y }}>{`${description}`}</motion.h2>
    </section>
  );
}
