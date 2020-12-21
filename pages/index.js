import React from 'react'
import Meta from '../components/Meta'

export default function Index() {
  return (
    <>
      <Meta />
      <div className="mt-5 md:text-xl">
        <h2 className="text-xl md:text-4xl mb-4 italic">
          I am a javascript enthusiast and Web is my playground.
        </h2>
        <p className="mb-4">
          I am an experienced full stack developer working in the service industry for 3
          years. By this time I can confidently say I know the ins and outs of building commercial
          websites and web experiences.
        </p>
        <p className="mb-4">
          I am a problem solver. Clients don't always know what they want. It's a job of the
          developer to understand the problem the clients are facing and provide them with creative
          solutions.
        </p>
        <p className="mb-4">
          I don’t like to define myself by the work I’ve done. I define myself by the work I want to
          do. Skills can be taught, personality is inherent. I prefer to keep learning, continue
          challenging myself, and do interesting things that matter.
        </p>
        <p className="mb-4">
          <a href="/assets/Kushal_Mukherjee_Resume.pdf" target="_blank">
            Download my CV
          </a>
        </p>
        <p className="mb-4 mt-10 italic text-center px-5 md:px-20">
          “Have the courage to follow your heart and intuition. They somehow already know what you
          truly want to become. Everything else is secondary.” ― Steve Jobs
        </p>
      </div>
    </>
  )
}
