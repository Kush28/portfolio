import React from 'react'
import Badge from './Badge'

export default function SideNav() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-paragraph">
        <div className="rounded-full overflow-hidden w-4/12">
          <img src="assets/avatar.jpg" />
        </div>
      </div>
      <div className="mb-default">
        <h2 className="mb-paragraph text-2xl">About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor ligula in nisl
          pellentesque, eu blandit diam faucibus. Fusce rhoncus purus eget felis rhoncus faucibus.
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
