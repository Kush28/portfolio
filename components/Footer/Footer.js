import React from 'react'
import { FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="flex flex-row justify-center mt-10 text-xl">
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
    </footer>
  )
}
