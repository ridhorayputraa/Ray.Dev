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

export default function Image({ id, name, description, link }: dataProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <>
      {/* <section> */}
      {/* <div ref={ref}> */}
      {/* <Image src={`${link}.png`} /> */}
      {/* <Image */}
      <Image
        src="/ray.svg"
        alt="Picture of the author"
        width={250}
        loading="lazy"
        height={250}
      />
      {/* src="/Movie.png" alt="A London skyscraper" /> */}
      {/* </div> */}
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
      {/* </section> */}
    </>
  );
}
