import React from 'react'
import {FaLink,FaTwitter, FaDiscord,FaCss3Alt,FaHtml5,FaGoogleDrive,FaInstagram,FaJsSquare,FaNodeJs,FaReact,FaSlack,FaStackOverflow,FaTelegram} from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div>
<section className="shadow-lg p-4 md:p-10 rounded-xl my-4 md:my-10 dark:bg-slate-800">
          <div id="skills">
            <h3 className="text-2xl md:text-3xl py-1 dark:text-slate-400">Acquired Skills</h3>
            <p className="text-sm md:text-md py-3 md:py-5 leading-6 md:leading-8 text-gray-800 dark:text-slate-400">
              I am a passionate web developer who has recently honed thier skills in <span className="text-teal-600">HTML</span>,<span className="text-teal-600"> CSS</span>,<span className="text-teal-600"> JavaScript</span>,<span className="text-teal-600"> Node</span>, and<span className="text-teal-600"> React</span>, gaining hands-on experience through a diverse range of projects. With these projects, I have built a solid foundation in these technologies but also nurtured my problem-solving abilities and collaborative mindset. I'm excited to leverage these newfound skills to craft engaging and dynamic web experiences, continuously expanding my knowledge and taking on new challenges in the world of web development.
</p>
          </div>
          <div className="text-center">
            <Slide>
            <div className="text-4xl md:text-5xl flex flex-wrap justify-center gap-4 md:gap-16 py-3 text-gray-600 dark:text-slate-400 ">
              <FaHtml5 className="text-5xl md:text-6xl py-1 hover:text-orange-600 transform scale-100 hover:scale-125 transition-transform duration-300" />
              <FaCss3Alt className="text-5xl md:text-6xl py-1 hover:text-blue-500 transform scale-100 hover:scale-125 transition-transform duration-300" />
              <FaJsSquare className="text-5xl md:text-6xl py-1 hover:text-yellow-500 transform scale-100 hover:scale-125 transition-transform duration-300" />
              <FaNodeJs className="text-5xl md:text-6xl py-1 hover:text-green-500 transform scale-100 hover:scale-125 transition-transform duration-300" />
              <FaReact className="text-5xl md:text-6xl py-1 hover:text-teal-500 transform scale-100 hover:scale-125 transition-transform duration-300" />
            </div>
            </Slide>
          </div>
        </section>
    </div>
  )
}

export default Skills
