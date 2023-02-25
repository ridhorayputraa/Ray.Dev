import React, { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/router";

// type childrenProps = {
//   children: React.ReactNode
// }

export default function Navbar() {
  const [Mobile, setMobile] = useState(false);
  const router = useRouter();

  return (
    <div className="max-h-full">
      <nav
        className={
          Mobile
            ? " navbar"
            : "pl-6   navbar items-center -ml-3.5 hidden md:flex"
        }
      >
        <div
          className=" sm:px-10 2xl:px-60 md:px-10 xl:px-60"
        >
          <ul
            className={
              Mobile
                ? " nav-links-mobile   h-screen w-screen py-3"
                : " nav-links"
            }
            onClick={() => setMobile(false)}
          >
            <Link href="/" className={router.pathname == "/" ? "active" : ""}>
              <li className="font-semibold sm:text-md px-4 py-2 hoover">
                Home
              </li>
            </Link>
            <Link
              href="/portofolio"
              className={router.pathname == "/portofolio" ? "active" : ""}
            >
              <li className="font-semibold sm:text-md px-4 py-2 hoover">
                Portofolio
              </li>
            </Link>
            <Link
              href="/blog"
              className={router.pathname == "/blog" ? "active" : ""}
            >
              <li className="font-semibold px-4 py-2 hoover">Blog</li>
            </Link>
            <Link
              href="/about"
              className={router.pathname == "/about" ? "active" : ""}
            >
              <li className="font-semibold px-4 py-2 hoover">About</li>
            </Link>
            <Link
              href="/contact"
              className={router.pathname == "/contact" ? "active" : ""}
            >
              <li className="font-semibold px-4 py-2 hoover">Contact</li>
            </Link>
          </ul>
        </div>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <HiXMark /> : <HiBars3BottomLeft />}
        </button>
      </nav>
    </div>
  );
}
