import Layout from "@/sections/Layout";
import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { Text } from "./data/Text";

export default function about() {
  return (
    <>
      <Layout>
        <div className="justify-start left-0 ">
          <h1 className="mt-8 mb-2 font-extrabold text-3xl">About Me</h1>
          <p className="font-extrabold  text-transparent mt-1 mb-1 md:mb-3 md:mt-1 text-4xl   md:text-3xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {Text[0].heading}
          </p>
          <p className="mb-10 sm:mb-20">
            Introducing my latest project - a creation born from the knowledge
            and skills I've acquired. With passion and dedication, I've poured
            my heart into this endeavor, using everything I've learned to craft
            something truly remarkable
          </p>
        </div>
      </Layout>
    </>
  );
}
