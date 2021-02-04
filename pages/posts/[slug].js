import React, { useEffect } from 'react'
import Button from '@/components/Button/Button'
import Meta from '@/components/Meta/Meta'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import Head from 'next/head'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const { title, content, coverImage, excerpt, published } = post

  function injectRunkit() {
    const codeBlocks = [...document.getElementsByClassName('code-block')]
    codeBlocks.forEach((element) => {
      const innerText = element.firstChild
      // eslint-disable-next-line no-param-reassign
      // element.innerText = ''
      window.RunKit.createNotebook({
        element,
        source: innerText.textContent,
        onLoad: () => innerText.remove()
      })
    }, [])
  }

  function loadCodeblocks() {
    console.log('here')
    if (typeof window.RunKit === 'undefined') {
      setTimeout(() => {
        loadCodeblocks()
      }, 200)
    } else injectRunkit(0)
  }

  useEffect(() => {
    loadCodeblocks()
  }, [])

  return (
    <div>
      <Meta title={title} description={excerpt} ogImage={coverImage} />
      <Head>
        <script src="https://embed.runkit.com" defer />
      </Head>
      <Button className="flex items-center mb-4" to="/">
        <HiOutlineArrowNarrowLeft />
        <p className="ml-2">Back</p>
      </Button>
      <h1 className="text-2xl md:text-3xl mb-paragraph">{title}</h1>
      <p className="mb-paragraph italic">{excerpt}</p>
      <div className="mb-paragraph flex justify-center">
        <img src={coverImage} alt={title} className="h-400 w-full object-cover" />
      </div>
      {published ? (
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <div className="w-full text-center">Coming soon</div>
      )}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'content',
    'ogImage',
    'coverImage',
    'published',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
