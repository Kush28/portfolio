import React from 'react'
import Card from '../components/Card/Card'
import Meta from '../components/Meta/Meta'

export default function Index() {
  return (
    <div className="mt-8">
      <Meta />
      <div className="mb-8">
        <p className="text-xl mb-2">Hi there!</p>
        <p className="text-sm ">Welcome to my world. Here are some interesting things for you.</p>
      </div>
      <div className="mb-default">
        <Card variant="featured" />
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-14">
        <Card />
        <Card />
      </div>
    </div>
  )
}
