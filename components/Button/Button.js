import Link from 'next/link'
import React from 'react'

export default function Button({ to, children, className }) {
  return (
    <Link href={to}>
      <a className={className}>{children}</a>
    </Link>
  )
}
