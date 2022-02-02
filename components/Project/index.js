import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import Button from '../Button/Button'
import Image from '../Image/Image'

export default function Project({ image, title, githubUrl, hostedUrl }) {
  return (
    <div className="flex border border-lightgray shadow-sm rounded-md">
      <div className="w-100 overflow-hidden rounded-l-md">
        <Image src={image} alt={title} className="h-full max-w-none" />
      </div>
      <div className="flex flex-col justify-between px-paragraph pt-paragraph pb-item flex-grow">
        <h3 className="mb-item font-lato">{title}</h3>
        <div className="flex self-end">
          {githubUrl && (
            <Button
              to={githubUrl}
              target="_blank"
              className="bg-gray-300 hover:bg-lightgray hover:border p-2 rounded-md inline-flex items-center cursor-pointer text-sm"
            >
              Github
              <BsBoxArrowUpRight className="ml-2" />
            </Button>
          )}
          {hostedUrl && (
            <Button
              to={hostedUrl}
              target="_blank"
              className="bg-gray-300 hover:bg-lightgray hover:border p-2 rounded-md inline-flex items-center cursor-pointer text-sm"
            >
              Open
              <BsBoxArrowUpRight className="ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
