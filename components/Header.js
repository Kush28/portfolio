import Link from 'next/link'
import React from 'react'

export default function Header({ children }) {
  return (
    <header className="flex flex-row">
      <Link href="/" as="/">
        <a className="rounded-full h-32 w-32 flex items-center justify-center overflow-hidden p-1 bg-gray-800">
          <div className="rounded-full flex items-center justify-center overflow-hidden ">
            <img src="assets/avatar.jpg" />
          </div>
        </a>
      </Link>
      <div className="flex flex-col">
        <h1>Kushal Mukherjee</h1>
        <div className="flex flex-row">
          <Link href="/about">About</Link>
          <Link href="/posts">Blog</Link>
        </div>
      </div>
    </header>
  )
}
