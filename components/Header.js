import Link from 'next/link'
import React from 'react'
import ThemeButton from './Theme'

export default function Header() {
  return (
    <header className="flex flex-row">
      <Link href="/" as="/">
        <a className="w-32">
          <div className="rounded-full flex items-center justify-center overflow-hidden p-1 bg-gray-900">
            <div className="rounded-full flex items-center justify-center overflow-hidden ">
              <img src="assets/avatar.jpg" />
            </div>
          </div>
        </a>
      </Link>
      <div className="flex flex-col pl-5 justify-center">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-600 mb-3">Kushal Mukherjee</h1>
        <div className="flex flex-row font-extrabold">
          <Link href="/">
            <a className="mr-5">ABOUT</a>
          </Link>
          <Link href="/posts">
            <a className="mr-5">BLOG</a>
          </Link>
          {/* <ThemeButton /> */}
        </div>
      </div>
    </header>
  )
}
