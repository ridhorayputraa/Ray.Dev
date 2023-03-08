import Layout from "@/sections/Layout";
import React from "react";
import { Text } from "./data/Text";

export default function contact() {
  return (
    <>
      <Layout>
        <div className=" left-0 h-screen ">
          <h1 className="mt-8 mb-2 font-extrabold text-3xl">Contact</h1>
          <p className="font-medium mt-1 mb-1 md:mb-3 md:mt-1 text-md   md:text-md ">
            I'm excited to connect with everyone so please don’t hesitate to get
            in touch with me by following my social media bellow:
          </p>
          <div className="div">
            <p className="p-3 text-gray-300">
              Email -{" "}
              <a
                className=" text-gray-200 font-bold border-b-2 "
                href="mailto:ridhorayputra033@gmail.com"
              >
                ridhorayputra033@gmail.com
              </a>
            </p>

            <p className="p-3 text-gray-300">
              Github -{" "}
              <a
                target="_blank"
                className=" text-gray-200 font-bold border-b-2 "
                href="https://github.com/ridhorayputraa"
              >
                ridhorayputraa
              </a>
            </p>

            <p className="p-3 text-gray-300">
              LinkedIn -{" "}
              <a
                target="_blank"
                className=" text-gray-200 font-bold border-b-2 "
                href="https://www.linkedin.com/in/ridho-ray-25aa13236/"
              >
                Ridho Ray
              </a>
            </p>

            <p className="p-3 text-gray-300">
              Instagram -{" "}
              <a
                target="_blank"
                className=" text-gray-200 font-bold border-b-2 "
                href="https://www.instagram.com/dailyfrontend.js/"
              >
                dailyfrontend
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
