import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";
import React from "react";

type chilrenProps = {
  children : React.ReactNode
}

const Layout = ({ children }:chilrenProps) => {
  return (
    <>
      <Head>
        <title>Rayssss</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="h-full  ">
        <main className="layout layout flex flex-col flex-1  flex flex-col-reverse items-center  justify-center leading-6 md:flex-row  body-font font-poppins flex flex-col flex-1  flex sm:flex-col-reverse text-center justify-center flex-col-reverse items-center  justify-between  sm:flex-col      leading-6 md:flex-row">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
