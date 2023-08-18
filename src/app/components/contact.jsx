import React, {useState, useRef}  from 'react'
import emailjs from "@emailjs/browser";
import {FaLink,FaTwitter, FaDiscord,FaCss3Alt,FaHtml5,FaGoogleDrive,FaInstagram,FaJsSquare,FaNodeJs,FaReact,FaSlack,FaStackOverflow,FaTelegram} from "react-icons/fa";

const Contact = () => {
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
  return (
    <div>
       <section className="shadow-lg p-10 rounded-xl dark:bg-slate-800">
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
    </div>
  )
}

export default Contact
