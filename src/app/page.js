"use client";
import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";
import Image from "next/image";
import profilePic from "../../public/images/profilePic.jpg";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";

// function withDelay(Component, delay = 1000) {
//   return function DelayedComponent(props) {
//     const [show, setShow] = useState(false);

//     useEffect(() => {
//       const timer = setTimeout(() => {
//         setShow(true);
//       }, delay);

//       return () => {
//         clearTimeout(timer);
//       };
//     }, [delay]);

//     if (!show) return null;
//     return <Component {...props} />;
//   }
// }

// const DelayedFade = withDelay(Fade, 1000); // 1 second delay

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <ScrollIntoViewIfNeeded>
          <Fade triggerOnce>
            <section className="min-h-screen">
              <nav className="py-4 md:py-6 lg:py-8 mb-12 flex flex-col md:flex-row md:justify-between items-center">
                <h1 className="text-xl font-burtonsans dark:text-slate-400">
                  alanpereyro.dev
                </h1>
                <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 md:ml-4">
                  <li>
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-xl dark:text-white transform scale-100 hover:scale-110 transition-transform duration-300"
                    />
                  </li>
                  <li>
                    <a
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-md hover:from-black hover:to-black hover:text-white transition-colors duration-300"
                      href="#skills"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-md hover:from-black hover:to-black hover:text-white transition-colors duration-300"
                      href="#projects"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-md hover:from-black hover:to-black hover:text-white transition-colors duration-300"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-md hover:from-black hover:to-black hover:text-white transition-colors duration-300"
                      href="https://drive.google.com/file/d/14LoguFnbbiAeYEJje93zt3-xfwCGKzyy/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 border-4 border-teal-500">
                <Image
                  src={profilePic}
                  layout="fill"
                  objectFit="cover"
                  alt="profilePic"
                />
              </div>
              <About />
            </section>
          </Fade>
        </ScrollIntoViewIfNeeded>
        <ScrollIntoViewIfNeeded>
          <Fade triggerOnce>
            <Skills />
          </Fade>
        </ScrollIntoViewIfNeeded>
        <ScrollIntoViewIfNeeded>
          <Fade triggerOnce>
            <Projects />
          </Fade>
        </ScrollIntoViewIfNeeded>
        <ScrollIntoViewIfNeeded>
          <Fade triggerOnce>
            <Contact />
          </Fade>
        </ScrollIntoViewIfNeeded>
        <div className="bg-white pb-10 dark:bg-gray-900"></div>
      </main>
    </div>
  );
}
