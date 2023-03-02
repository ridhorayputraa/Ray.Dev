// Photos from https://citizenofnowhe.re/lines-of-the-city
import { motion, useScroll, useSpring } from "framer-motion";

import { DataImg } from "@/pages/data/Text";
import Image from "next/image";
import ImageParallax from "@/components/ImageParallax";

export default function Project() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      {/* {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))} */}
      {DataImg.map((image) => {
        return (
          <ImageParallax
            id={image.id}
            name={image.name}
            description={image.description}
            link={image.link}
          />
        );
      })}
    </div>
  );
}
