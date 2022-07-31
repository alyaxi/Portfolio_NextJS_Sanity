import React, { useEffect, useState } from "react";
import Script from "next/script";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
      <Script src="/assets/js/main.js"></Script>

      <div
        className={`w-full z-50  py-3 sm:py-5  fixed bg-[#0078AA] opacity-70 ${
          styles.active
        } ${show && styles.hidden}`}
      >
        <div className="container flex items-center justify-between">
          <div className="w-24 lg:w-48">
            <a href="/">
              <img src="/assets/img/logo-web.png" alt="logo image" />
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                <a href="#about">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    About
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#services">
                  {" "}
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Services
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#portfolio">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Portfolio
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#work">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Work
                  </span>
                </a>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#statistics">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Statistics
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href={`#blogs` && `/blog`}>
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Blog
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#contact">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Contact
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
        // className='opacity-100 pointer-events-auto'
      >
        <div className="absolute right-0 min-h-screen w-2/3 bg-[#0078AA] py-4 px-8 shadow md:w-1/3">
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <img
              src="/assets/img/icon-close.svg"
              className="h-10 w-auto"
              alt=""
            />
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                About
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Services
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Portfolio
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Clients
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Work
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Statistics
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Blog
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
