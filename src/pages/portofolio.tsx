import Layout from "@/sections/Layout";
import Project from "@/sections/Project";
import React, { useEffect, useState } from "react";

function portofolio() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerWidth);
  }, [height]);

  return (
    <div>
      <Layout className="text-center">
        <h1 className="mt-8 mb-2 font-extrabold text-3xl">Portofolio</h1>
        <p className="mb-10 sm:mb-20">
          Introducing my latest project - a creation born from the knowledge and
          skills I've acquired. With passion and dedication, I've poured my
          heart into this endeavor, using everything I've learned to craft
          something truly remarkable
        </p>
        <Project laptop={900} />
      </Layout>
    </div>
  );
}

export default portofolio;
