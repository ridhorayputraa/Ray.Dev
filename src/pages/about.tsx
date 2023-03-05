import Layout from "@/sections/Layout";
import React from "react";
import { HiPencilSquare } from "react-icons/hi2";

export default function about() {
  return (
    <>
      <Layout>
        <div className="justify-start left-0 ">
          <h1 className="mt-8 mb-2 font-extrabold text-3xl">About Me</h1>
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
