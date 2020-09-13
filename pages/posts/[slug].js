import Link from 'next/link'
import React from 'react'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const { title, content } = post
  return (
    <div>
      <Link href="/">Go to home</Link>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
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
