import React from 'react'
import Badge from '../Badge/Badge'

export default function SideNav() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-paragraph">
        <div className="rounded-full overflow-hidden w-4/12">
          <img src="/assets/avatar.jpg" />
        </div>
      </div>
      <div className="mb-default text-md">
        <h2 className="mb-paragraph text-2xl">About Me</h2>
        <p className="mb-item">I am a javascript enthusiast and Web is my playground.</p>
        <p className="mb-item">
          I am an experienced full stack developer working in the industry for 3 years. By this time
          I can confidently say I know the ins and outs of building commercial websites and web
          experiences.
        </p>
        <p className="mb-item">
          I am a problem solver. People don't always know what they want. It's the job of a
          developer to understand the problem and provide creative solutions.
        </p>
        <p className="mb-item">
          I don’t like to define myself by the work I’ve done. I define myself by the work I want to
          do. Skills can be taught, personality is inherent. I prefer to keep learning, continue
          challenging myself, and do interesting things that matter.
        </p>
      </div>
      <div>
        <Badge skill="react" />
        <Badge skill="angular" />
        <Badge skill="node" />
        <Badge skill="html" />
        <Badge skill="css" />
      </div>
    </div>
  )
}
