import React from 'react'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row justify-center mt-10 text-xl">
        <a className="mx-5" href="mailto:kushal.m@yahoo.com">
          <FiMail />
        </a>
        <a className="mx-5" href="https://twitter.com/Kush_all7" target="_blank" rel="noreferrer">
          <FiTwitter />
        </a>
        <a
          className="mx-5"
          href="https://www.linkedin.com/in/kushal-mukherjee/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
      </div>
      <div className="mt-10 text-center font-lato">
        <a
          href="https://github.com/Kush28/portfolio"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-300 hover:bg-black hover:text-lightgray border-2 font-bold py-2 px-4 rounded-full inline-flex items-center cursor-pointer"
        >
          <FiGithub className="fill-current w-4 h-4 mr-2" />
          <span>View source code</span>
        </a>
      </div>
    </footer>
  )
}
