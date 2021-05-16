import React from 'react'
import Card from '../components/Card/Card'
import Meta from '../components/Meta/Meta'
import { getAllPosts } from '../lib/api'

export default function Index({ allPosts }) {
  const featuredPost = allPosts[0]

  return (
    <div className="mt-2">
      <Meta />
      <div className="mb-8">
        <h1>
          <p className="text-xl mb-2">Hi there!</p>
          <p className="text-sm ">Welcome to my world. Here are some interesting things for you.</p>
        </h1>
      </div>
      <div className="mb-default">
        <Card
          variant="featured"
          title={featuredPost.title}
          desc={featuredPost.excerpt}
          url={`/posts/${featuredPost.slug}`}
          image={featuredPost.coverImage}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-14">
        {allPosts.map(
          (post, index) =>
            index !== 0 && (
              <Card
                key={post.slug}
                title={post.title}
                desc={post.excerpt}
                url={`/posts/${post.slug}`}
                image={post.coverImage}
              />
            ),
        )}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'excerpt', 'slug', 'date', 'coverImage'])

  return {
    props: { allPosts: allPosts || [] },
  }
}
