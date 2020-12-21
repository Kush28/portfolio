import React from 'react'
import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Kushal Mukherjee</title>
      <meta name="description" content="Welcome to my world!" />
      <link rel="shortcut icon" href="favicon/favicon.ico" type="image/x-icon" />
      <meta property="og:title" content="Kushal Mukherjee" />
      <meta property="og:url" content="https://kushalm.dev" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/doxldod5y/image/upload/w_400/v1597945295/portfolio/avatar-large.jpg"
      />
      <meta property="og:description" content="Welcome to my world!" />
    </Head>
  )
}
