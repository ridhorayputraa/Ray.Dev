import Head from "next/head";
import Image from "next/image";

import { ReactSketchCanvas } from "react-sketch-canvas";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import CanvasControl from "@/components/CanvasControl";

// Text

import { Text } from "@/data/data";
import Layout from "@/sections/Layout";
import Footer from "@/sections/Footer";
import Tech from "../sections/Tech";
import Project from "@/sections/Project";

const Canvas = forwardRef((props, ref) => (
  // @ts-ignorepm
  <ReactSketchCanvas {...props} ref={ref} />
));
Canvas.displayName = "Canvas";

export default function Home() {
  const [color, setColor] = useState("rgba(99, 102, 241, 0.6)");
  const canvasRef = useRef(null);
  const [height, setHeight] = useState(0);

  const isBrowser = () => typeof window !== "undefined";

  useEffect(() => {
    setHeight(window.innerWidth);
  }, [height]);
  // const height = window.innerHeight

  const clearHandler = () => {
    // @ts-ignore
    const clearCanvas = canvasRef.current?.clearCanvas;

    if (clearCanvas) {
      clearCanvas();
    }
  };

  return (
    <>
      <Layout className="text-center">
        <Canvas
          ref={canvasRef}
          // @ts-ignore
          canvasColor="transparent"
          style={{
            zIndex: 5,
          }}
          className="bg-transparent  absolute top-0 left-0 h-1  w-1/3"
          strokeWidth={5}
          strokeColor={color}
        />
        <div id="luxy" className="flex h-full flex-col">
          <div className="layout h-full py-16 sm:py-32 mb-10  layout   flex-1    leading-6 md:flex-row  body-font font-poppins  sm:flex-col  flex flex-col-reverse  justify-center  items-center  ">
            <div className="w-4/5 text-center  content-center align-middle justify-center md:text-left ">
              <div className="div font-bold text-3xl mt-6 md:mt-0 md:text-5xl">
                <h1>{Text[0].heading}</h1>
              </div>

              <div>
                <p className="font-extrabold text-transparent mt-1 mb-1 md:mb-3 md:mt-1 text-lg   md:text-3xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  {Text[0].subHeading}
                </p>
              </div>
              <div className="div ">
                <h1 className="font-semibold">{Text[0].paragraph}</h1>
              </div>
            </div>

            <div className="w-4/6 ml-0 sm:ml-14  text-center flex justify-center sm:left-16  ">
              <Image
                src="/ray.svg"
                alt="Picture of the author"
                width={250}
                loading="lazy"
                height={250}
              />
            </div>

            <CanvasControl
              clearCanvas={clearHandler}
              color={color}
              setColor={setColor}
            />
          </div>

          {/* <Section customClass="bg-radial-dark " direction="column">
            <HeaderMarquee>RIdho ganetng-ganteng-ganteng</HeaderMarquee>
        </Section> */}

          <section id="tech" className="Tech Stack mb-5 sm:py-32">
            <p className="mb-32 div font-bold text-3xl mt-6 md:mt-0 md:text-5xl">
              Tech Stack
            </p>
            <Tech mobile={height} />
          </section>

          <div className="project  sm:py-32">
            <p className="mb-32 div font-bold text-3xl mt-6 md:mt-0 md:text-5xl">
              Project
            </p>
            <Project laptop={height} />
          </div>
        </div>
      </Layout>
    </>
  );
}
