/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import React from 'react'

export default function Button({ to, children, className, onClick }) {
  if (to)
    return (
      <Link href={to}>
        <a className={className}>{children}</a>
      </Link>
    )

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  )
}
