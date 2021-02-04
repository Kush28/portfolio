/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import Button from '../Button/Button'
import SideNav from './SideNav'

export default function MobileNav() {
  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    if (isOpen) {
      const docHeight = document.body.scrollHeight
      const navHeight = document.getElementById('side-nav').clientHeight + 200
      if (docHeight < navHeight) document.getElementById('__next').style.height = `${navHeight}px`
    } else document.getElementById('__next').style.height = 'auto'
  }, [isOpen])
  return (
    <>
      <Button onClick={() => setOpen(!isOpen)} className="">
        <HiOutlineMenuAlt1 size="1.5em" />
      </Button>
      {isOpen && (
        <div className="h-full absolute left-0 top-0 bottom-0 right-0 bg-gray-100 flex justify-end shadow-lg">
          <Button className="w-1/4 md:w-2/4" onClick={() => setOpen(false)} />
          <div className="bg-white w-3/4 md:w-2/4 px-8 py-default">
            <SideNav />
          </div>
        </div>
      )}
    </>
  )
}
