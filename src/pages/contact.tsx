import Layout from "@/sections/Layout";
import React from "react";
import { Text } from "./data/Text";

export default function contact() {
  return (
    <>
      <Layout>
        <div className="justify-start left-0 ">
          <h1 className="mt-8 mb-2 font-extrabold text-3xl">Contact</h1>
          <p className="font-medium mt-1 mb-1 md:mb-3 md:mt-1 text-md   md:text-md ">
            I'm excited to connect with everyone so please don’t hesitate to get
            in touch with me by following my social media bellow:
          </p>
          <div className="div">
            <ul>
              <p className="p-3 text-gray-400">
                Email -{" "}
                <a className=" text-gray-200 font-bold border-b-2 " href="mailto:ridhorayputra033@gmail.com">
                 ridhorayputra033@gmail.com
                </a>
              </p>

              <p className="p-3 text-gray-400">
                Github -{" "}
                <a className=" text-gray-200 font-bold border-b-2 " href="mailto:ridhorayputra033@gmail.com">
                 ridhorayputra033@gmail.com
                </a>
              </p>

              <li> Linkedin : - </li>
              <li> Instagram : - </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}
