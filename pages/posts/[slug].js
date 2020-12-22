import React from 'react'
import Meta from '../../components/Meta/Meta'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const { title, content, coverImage, excerpt } = post
  return (
    <div>
      <Meta title={title} description={excerpt} ogImage={coverImage} />
      <h1 className="text-2xl md:text-3xl mb-paragraph">{title}</h1>
      <p className="mb-paragraph italic">{excerpt}</p>
      <div className="mb-paragraph flex justify-center">
        <img src={coverImage} alt={title} className="h-400 w-full object-cover" />
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      <div className="w-full text-center">Coming soon</div>
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
