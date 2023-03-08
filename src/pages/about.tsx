import Layout from "@/sections/Layout";
import React from "react";
import { Text } from "../data/data";

export default function about() {
  return (
    <>
      <Layout>
        <div className="justify-start left-0 ">
          <h1 className="mt-8 mb-2 font-extrabold text-3xl">About Me</h1>
          <p className="font-extrabold  text-transparent mt-1 mb-1 md:mb-3 md:mt-1 text-2xl   md:text-3xl bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-pink-500">
            {Text[0].heading}
          </p>
          <div className="mb-10 mt-3 sm:mb-20 w-4/5">
            <p>{Text[0].paragraphAbout1}</p>
            <br />
            <p>{Text[0].paragraphAbout2}</p>
            <br />
            <p>{Text[0].paragraphAbout3}</p>
            <br />
            <p>{Text[0].paragraphAbout4}</p>
            <br />
            <p>{Text[0].paragraphAbout5}</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
