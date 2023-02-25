import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/sections/Header";
import { Router } from "next/router";
import NProgress from "nprogress";
import "@/styles/nprogress.css";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { variants } from "animations/variants";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


export default function App({ router, Component, pageProps }:any) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen   flex flex-col h-full">
          <div className="">
            <Header />
            <div className="px-0 xl:px-60 2xl:px-60 sm:px-10 md:px-10 ">
              <AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <m.div
                  key={router.asPath}
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  // className='flex flex-col h-full flex-grow'
                  className="px-6 flex flex-col h-full flex-grow"
                >
                  <Component {...pageProps} />
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </LazyMotion>
    </ThemeProvider>
  );
}
