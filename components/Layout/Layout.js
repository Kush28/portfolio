import React from 'react'
import SideNav from '../SideNav/SideNav'

export default function Layout({ children }) {
  return (
    <div className="flex relative">
      <div className='w-full md:w-8/12 container my-default'>
        <header className="flex flex-row text-4xl font-bold">
          <h1>kushalm.</h1>
        </header>
        <main>{children}</main>
      </div>
      <div className='absolute top-0 bottom-0 right-1/3 hidden md:block px-3 bg-gradient-to-b from-primary to-alternate'/>
      <div className='w-4/12 hidden md:block container my-default'>
        <SideNav />
      </div>
    </div>
  )
}
