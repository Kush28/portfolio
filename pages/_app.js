import { Router } from 'next/router'
import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      if (window.dataLayer) window.dataLayer.push({ event: 'pageview' })
    })
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
