import React from 'react'
import Card from '../components/Card/Card'
import Meta from '../components/Meta/Meta'

export default function Index() {
  return (
    <div>
      <Meta />
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
