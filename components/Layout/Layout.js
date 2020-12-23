import React from 'react'
import Button from '../Button/Button'
import MobileNav from '../SideNav/MobileNav'
import SideNav from '../SideNav/SideNav'

export default function Layout({ children }) {
  return (
    <div className="flex relative h-full">
      <div className="w-full md:w-8/12 container my-default">
        <header className="flex flex-row justify-between mb-6">
          <Button to="/" className="text-2xl md:text-4xl font-bold text-gray">
            kushalm.
          </Button>
          <div className="block md:hidden bg-white">
            <MobileNav />
          </div>
        </header>
        <main>{children}</main>
      </div>
      <div className="absolute top-0 bottom-0 right-1/3 hidden md:block px-3 bg-gradient-to-b from-primary to-alternate" />
      <div className="w-4/12 hidden md:block container my-default">
        <SideNav />
      </div>
    </div>
  )
}
