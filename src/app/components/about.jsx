import React from 'react'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import {FaLink,FaGoogleDrive} from "react-icons/fa";
import { Slide,Roll,Bounce } from "react-awesome-reveal";

const about = () => {
  return (
    <div>
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
    <Roll>
  <a href="https://www.linkedin.com/in/alan-pereyro-1aa770199/" target="_blank" rel="noopener noreferrer">
    <AiFillLinkedin className="text-5xl cursor-pointer hover:text-blue-500"/>
  </a>
  <a href="https://github.com/APereyro" target="_blank" rel="noopener noreferrer">
    <AiFillGithub className="text-5xl cursor-pointer hover:text-purple-500"/>
  </a>
  <a href="https://docs.google.com/document/d/e/2PACX-1vR6wlBoxAoV6qa84nAff07EHzhSVLzC7kR4BH1Q5tBUh2ZHEGseSYUHFWk0gZ-t8vz0gGozGWYQroIe/pub" target="_blank" rel="noopener noreferrer">
    <FaGoogleDrive className="text-5xl cursor-pointer hover:text-green-500"/>
  </a>
    </Roll>
</div>
    </div>
  )
}

export default about
