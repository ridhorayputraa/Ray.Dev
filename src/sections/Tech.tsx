import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";

type cardProps = {
  customClass?: string;
  // 'small': 'px-16 py-12';
  mobile: number;
};

export default function Tech({ mobile }: cardProps) {
  return (
    <div
      className={
        mobile <= 996
          ? "flex container mx-auto flex-col justify-center  h-full sm:flex-row"
          : " flex container mx-auto flex-col justify-between sm:justify-between md:justify-between  h-full sm:flex-row "
      }
    >
      {mobile <= 966 ? (
        <div className="flex flex-col sm:mb-0 mb-5  justify-center">
          <h1>Mobile</h1>
        </div>
      ) : (
        <>
          {/* cek window if width == mobile maka berikan 5 card */}

          <div className="flex flex-col sm:mb-0 mb-5  justify-center">
            <Card>
              <a target="_blank" href="https://getbootstrap.com/">
                <img
                  alt="Bootsrap"
                  style={{ opacity: 0.8 }}
                  width="50px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                />
              </a>
            </Card>
            {/* <Card customClass='small'  mobile={true} >1</Card> */}
            {/* contoh untuk yang mobile */}
          </div>
          <div className="flex flex-col justify-center">
            <Card>
              <a target="_blank" href="https://laravel.com/">
                <img
                  alt="Laravel"
                  style={{ opacity: 0.8 }}
                  width="50px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
                />
              </a>
            </Card>
            <Card>
              <a target="_blank" href="https://www.figma.com/">
                <img
                  alt="Figma"
                  style={{ opacity: 0.8 }}
                  width="50px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                />
              </a>
            </Card>
          </div>
          <div className="flex flex-col justify-center">
            <Card>
              <a target="_blank" href="https://nextjs.org/">
                <img
                  alt="NextJs"
                  style={{ opacity: 0.8 }}
                  width="50px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                />
              </a>
            </Card>
            <Card>
              <a target="_blank" href="https://www.mysql.com/">
                <img
                  alt="Mysql"
                  style={{ opacity: 0.8 }}
                  width="50px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                />
              </a>
            </Card>
            <Card>
              <a target="_blank" href="https://firebase.google.com/?hl=id">
                <img
                  alt="Firebase"
                  style={{ opacity: 0.8 }}
                  width="50px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                />
              </a>
            </Card>
          </div>
          <div className="flex flex-col justify-center">
            <Card>
              <a href="https://reactjs.org/" target="_blank">
                <img
                  alt="ReactJs"
                  style={{ opacity: 0.8 }}
                  width="50px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                />
              </a>
            </Card>
            <Card>
              <a target="_blank" href="https://redux.js.org/">
                <img
                  alt="Redux"
                  style={{ opacity: 0.8 }}
                  width="50px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                />
              </a>
            </Card>
          </div>
          <div className="flex flex-col justify-center">
            <a target="_blank" href="https://tailwindcss.com/">
              <Card>
                <img
                  alt="Tailwindcss"
                  style={{ opacity: 0.8 }}
                  width="50px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                />
              </Card>
            </a>
          </div>
        </>
      )}
    </div>
  );
}
