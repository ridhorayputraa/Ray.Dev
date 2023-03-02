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
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        {/* <Image src={`${link}.png`} /> */}
        {/* <Image */}
        <div className="border w-2/4 bg-white p-2">
        <Image
          src={`${link}.png`}
          alt={name}
          width={500}
          loading="lazy"
          height={500}
        />
          </div>
        {/* src="/Movie.png" alt="A London skyscraper" /> */}
      </div>
      <motion.h2 style={{ y }}>{`${id}`}</motion.h2>
      <motion.h2 style={{ y }}>{`${name}`}</motion.h2>
      <motion.h2 style={{ y }}>{`${description}`}</motion.h2>
    </section>
  );
}
