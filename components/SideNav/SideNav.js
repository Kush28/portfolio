import React from 'react'
import Badge from '../Badge/Badge'
import Footer from '../Footer/Footer'

export default function SideNav() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-paragraph">
        <div className="rounded-full overflow-hidden">
          <img src="/assets/avatar.jpg" className="h-avatar" alt="kushal avatar" />
        </div>
      </div>
      <div className="mb-default text-md">
        <h2 className="mb-paragraph text-2xl">About Me</h2>
        <p className="mb-item">I am a javascript enthusiast and Web is my playground.</p>
        <p className="mb-item">
          I am a problem solver. I provide creative solutions to complicated problems.
        </p>
        <p className="mb-item">
          I don’t like to define myself by the work I’ve done. I define myself by the work I want to
          do.
        </p>
      </div>
      <div>
        <Badge skill="react" />
        <Badge skill="nextjs" />
        <Badge skill="angular" />
        <Badge skill="node" />
        <Badge skill="html" />
        <Badge skill="css" />
      </div>
      <Footer />
    </div>
  )
}
