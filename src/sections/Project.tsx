// Photos from https://citizenofnowhe.re/lines-of-the-city
import { motion, useScroll, useSpring } from "framer-motion";

import { DataImg } from "@/pages/data/Text";

export default function Project() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  

  return (
    <>
      {/* {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))} */}
      {DataImg.map((image) => {
        <h1>{image.name}</h1>;
      })}
    </>
  );
}
