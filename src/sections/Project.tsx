// Photos from https://citizenofnowhe.re/lines-of-the-city
import { motion, useScroll, useSpring } from "framer-motion";

import { DataImg } from "@/pages/data/text";
import Image from "next/image";
import ImageParallax from "@/components/ImageParallax";
import ImageMobile from "@/components/ImageMobile";

export default function Project({ laptop }: any) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Laptop => 1280

  return (
    <div>
      {/* {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))} */}
      {laptop <= 996 ? (
        <div className="flex  justify-center flex-wrap max-w-screen items-center ">
          {DataImg.map((image) => {
            return (
              <ImageMobile
                key={image.id}
                name={image.name}
                description={image.description}
                link={image.link}
                techStack={image.techStack}
                page={image.page}
              />
            );
          })}
        </div>
      ) : (
        <>
          {DataImg.map((image) => {
            return (
              <ImageParallax
                key={image.id}
                name={image.name}
                description={image.description}
                link={image.link}
                techStack={image.techStack}
                page={image.page}
                laptop={laptop}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
