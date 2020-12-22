import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Meta({ title, description, ogImage }) {
  const { asPath } = useRouter()
  const pageUrl = `https://kushalm.dev${asPath !== '/' ? asPath : ''}`
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:description" content={description} />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Kushal Mukherjee',
  description: 'Welcome to my world!',
  ogImage:
    'https://res.cloudinary.com/doxldod5y/image/upload/w_400/v1597945295/portfolio/avatar-large.jpg',
}
