"use client"
import React, { useRef } from "react";
import Head from "next/head";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import {FaLink,FaTwitter, FaDiscord,FaCss3Alt,FaHtml5,FaGoogleDrive,FaInstagram,FaJsSquare,FaNodeJs,FaReact,FaSlack,FaStackOverflow,FaTelegram} from "react-icons/fa";
import Image from "next/image";
import profilePic from "../../public/images/profilePic.jpg";
import BiteBud from "../../public/images/BiteBud.png";
import BurgerBuilder from "../../public/images/BurgerBuilder.png";
import FitnessIntoYourDay from "../../public/images/FitnessIntoYourDay.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";


export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_qnwvzgg", "template_i2r3e5a", form.current, "BcA3OzFEzoHu_wHlI")
      .then((result) => {
        alert("Message sent successfully!");
        window.location.reload(false);
          console.log(result.text);
      }, (error) => {
        alert("Message failed to send.");
          console.log(error.text);
      });
  };

  const [darkMode, setDarkMode] = useState(false);
  return (
      <div className={darkMode ? "dark" : ""}>
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtonsans dark:text-slate-400">Alan.Dev</h1>
        <ul className="flex items-center">
          <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:text-white transform scale-100 hover:scale-110 transition-transform duration-300"/></li>
          <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:from-black hover:to-black hover:text-white transition-colors duration-300" href="#skills">Skills</a></li>
          <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:from-black hover:to-black hover:text-white transition-colors duration-300" href="#projects">Projects</a></li>
          <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:from-black hover:to-black hover:text-white transition-colors duration-300" href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
        <Image src={profilePic} layout="fill" objectFit="cover" alt="profilePic"/>
      </div>
      <div id="about" className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Alan Pereyro</h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-slate-400">Full-Stack Web Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-slate-400">
        Hello, my name is Alan, I'm a
        hardworking and dedicated learner, always eager to expand my knowledge
        and tackle new challenges. With a strong work ethic and a thirst for
        knowledge, I'm confident in my ability to contribute to the
        ever-evolving field of web development. I'm now actively seeking
        opportunities to further develop my skills, grow as a professional, and
        make a positive impact in the tech industry.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-400">
  <a href="https://www.linkedin.com/in/alan-pereyro-1aa770199/" target="_blank" rel="noopener noreferrer">
    <AiFillLinkedin className="text-6xl cursor-pointer hover:text-teal-500"/>
  </a>
  <a href="https://github.com/APereyro" target="_blank" rel="noopener noreferrer">
    <AiFillGithub className="text-6xl cursor-pointer hover:text-teal-500"/>
  </a>
  <a href="https://docs.google.com/document/d/e/2PACX-1vR6wlBoxAoV6qa84nAff07EHzhSVLzC7kR4BH1Q5tBUh2ZHEGseSYUHFWk0gZ-t8vz0gGozGWYQroIe/pub" target="_blank" rel="noopener noreferrer">
    <FaGoogleDrive className="text-6xl cursor-pointer hover:text-teal-500"/>
  </a>
</div>

      </section>
      <section className="shadow-lg p-10 rounded-xl my-10  dark:bg-slate-800">
        <div id="skills">
          <h3 className="text-3xl py-1 dark:text-slate-400">Acquired Skills</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-400">
          I am a passionate web developer who has recently completed an intensive full-stack web development bootcamp. Throughout this transformative journey, I honed my skills in <span className="text-teal-600">HTML</span>,<span className="text-teal-600"> CSS</span>,<span className="text-teal-600"> JavaScript</span>,<span className="text-teal-600"> Node</span>, and<span className="text-teal-600"> React</span>, gaining hands-on experience through a diverse range of projects. The bootcamp not only provided me with a solid foundation in these technologies but also nurtured my problem-solving abilities and collaborative mindset. I'm excited to leverage these newfound skills to craft engaging and dynamic web experiences, continuously expanding my knowledge and taking on new challenges in the world of web development.
          </p>
        </div>
        <div className="text-center">
        <div className="text-6xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-400 ">
      <FaHtml5 className="text-6xl py-1 hover:text-orange-600 transform scale-100 hover:scale-125 transition-transform duration-300"/>
      <FaCss3Alt className="text-6xl py-1 hover:text-blue-500 transform scale-100 hover:scale-125 transition-transform duration-300"/> 
      <FaJsSquare className="text-6xl py-1 hover:text-yellow-500 transform scale-100 hover:scale-125 transition-transform duration-300"/>
      <FaNodeJs className="text-6xl py-1 hover:text-green-500 transform scale-100 hover:scale-125 transition-transform duration-300"/>
      <FaReact className="text-6xl py-1 hover:text-teal-500 transform scale-100 hover:scale-125 transition-transform duration-300"/>
      </div>
        </div>
      </section>
      <section className="shadow-lg p-10 rounded-xl my-10  dark:bg-slate-800">
        <div id="projects">
          <h3 className="text-3xl py-1 dark:text-slate-400">Projects</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-400">
          Throughout the bootcamp, I worked on a variety of projects, both individually and in teams. These projects allowed me to apply my skills in a practical setting, while also providing me with valuable experience working in a collaborative environment. Below are some of the projects I worked on during the bootcamp and after.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="shadow-lg rounded-xl dark:bg-slate-900">
            <Image src={BiteBud} layout="responsive" className="rounded-l" alt="BiteBudScreenShot"/>
            <div className="p-5">
              <h3 className="text-2xl py-1 dark:text-slate-400">BiteBud</h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-400">
              BiteBud is a web application that allows users to search for recipes based on ingredients they have on hand.
              </p>
              <div className="flex justify-center gap-5">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transform scale-100 hover:scale-110 transition-transform duration-300"         href="https://suzakijun1.github.io/BiteBud/"
        target="_blank"
        rel="noopener noreferrer">Live Demo<FaLink className="mr-2 text-xl"/></a>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transform scale-100 hover:scale-110 transition-transform duration-300"         href="https://github.com/Suzakijun1/BiteBud"
        target="_blank"
        rel="noopener noreferrer">GitHub Repo<AiFillGithub className="mr-2 text-xl"/></a>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-xl dark:bg-slate-900">
            <Image src={BurgerBuilder} layout="responsive" className="rounded-l" alt="BurgerBuilderScreenShot"/>
            <div className="p-5">
              <h3 className="text-2xl py-1 dark:text-slate-400">Burger Builder</h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-400">
              Burger Builder is a web application that allows users to create a burger and add it to a database.
              </p>
              <div className="flex justify-center gap-5">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transform scale-100 hover:scale-110 transition-transform duration-300"         href="https://afternoon-peak-41409.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer">Live Demo<FaLink className="mr-2 text-xl"/></a>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transform scale-100 hover:scale-110 transition-transform duration-300"         href="https://github.com/APereyro/BurgerBuilder"
        target="_blank"
        rel="noopener noreferrer">GitHub Repo<AiFillGithub className="mr-2 text-xl"/> </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-xl dark:bg-slate-900">
            <Image src={FitnessIntoYourDay} layout="responsive" className="rounded-l" alt="FitnessAppScreenShot"/>
            <div className="p-5">
              <h3 className="text-2xl py-1 dark:text-slate-400">Fitness Into Your Day</h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-400">
              Our goal is to provide a platform where you can find valuable information and inspiration to help you on your fitness journey.
              </p>
              <div className="flex justify-center gap-5">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transform scale-100 hover:scale-110 transition-transform duration-300"         href="https://evening-scrubland-38912.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer">Live Demo<FaLink className="mr-2 text-xl"/></a>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transform scale-100 hover:scale-110 transition-transform duration-300"         href="https://github.com/brandon6457/fitness"
        target="_blank"
        rel="noopener noreferrer">GitHub Repo<AiFillGithub className="mr-2 text-xl"/></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
  <div id="contact">
    <h3 className="text-3xl py-1 dark:text-slate-400">Contact</h3>
    <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-400">
      I'm always open to new opportunities and collaborations .If you're interested in connecting and discussing potential opportunities, please feel free to reach out to me by filling out the contact form below.
    </p>
  </div>
  <div className="mt-6">
    <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-6">
      <div>
        <label htmlFor="user_name" className="block text-md font-large text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="John Doe"
          className="mt-2 block w-full shadow-sm sm:text-sm dark:bg-gray-700 dark:text-gray-300"
        />
      </div>
      <div>
        <label htmlFor="user_email" className="block text-md font-large text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          placeholder="JohnDoe@mail.com"
          className="mt-2 block w-full shadow-sm sm:text-sm border-gray-300 dark:bg-gray-700 dark:text-gray-300"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-md font-large text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          placeholder="Enter your message here."
          className="mt-2 block w-full shadow-sm sm:text-sm border-gray-300 dark:bg-gray-700 dark:text-gray-300"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="py-2 px-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md transform scale-100 hover:scale-110 transition-transform duration-300"
        >
          Send
          <FaTelegram className="inline-block ml-2"/>
        </button>
      </div>
    </form>
  </div>
</section>
    </main>
    </div>
  );
};
