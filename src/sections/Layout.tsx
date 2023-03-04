import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";
import React from "react";

type chilrenProps = {
  children: React.ReactNode;
  className?: any;
};

const Layout = ({ children, className }: chilrenProps) => {
  return (
    <>
      <Head>
        <title>Rayssss</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="h-full  ">
        <main
          className={`layout ${className}    items-center  justify-center leading-6  body-font font-poppins   sm:flex-col-reverse       md:flex-row`}
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
