import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaLink, FaGoogleDrive } from "react-icons/fa";
import Image from "next/image";
import {data} from "../../assets/projectData"

const projects = () => {
  return (
      <div className="shadow-lg p-10 rounded-xl my-10  dark:bg-slate-800">
          <div id="projects">
            <h3 className="text-3xl py-1 dark:text-slate-400">Projects</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-400">
             I've worked on a variety of projects, both
              individually and in teams. These projects allowed me to apply my
              skills in a practical setting, while also providing me with
              valuable experience working in a collaborative environment. Below
              are some of the projects I've worked on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
    {data.map(item => (
        <div key={item.id} className="shadow-lg rounded-xl dark:bg-slate-900">
            <a 
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            >
             <Image
                src={item.image}
                layout="responsive"
                className="rounded-l"
                alt="BiteBudScreenShot"
              />
              </a>
              <div className="p-5">
                <h3 className="text-2xl py-1 dark:text-slate-400">{item.title}</h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-400">
                  {item.text}
                </p>
                <div className="flex justify-center gap-5">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transform scale-100 hover:scale-110 transition-transform duration-300"
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <FaLink className="mr-2 text-xl" />
                  </a>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transform scale-100 hover:scale-110 transition-transform duration-300"
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                    <AiFillGithub className="mr-2 text-xl" />
                  </a>
                </div>
              </div>
        </div>
    ))}

          </div>
        </div>
  )
}

export default projects
