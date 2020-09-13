import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="container mx-auto pt-20">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
