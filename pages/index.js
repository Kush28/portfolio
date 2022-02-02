import Project from '@/components/Project'
import React from 'react'
import Card from '../components/Card/Card'
import Meta from '../components/Meta/Meta'
import { getAllPosts } from '../lib/api'
import projects from '../lib/projects'

export default function Index({ allPosts }) {
  const featuredPost = allPosts[0]

  return (
    <div className="mt-2">
      <Meta />
      <div className="mb-default">
        <h1>
          <p className="text-xl mb-2">Hi there!</p>
          <p className="text-sm ">Welcome to my world. Here are some interesting things for you.</p>
        </h1>
      </div>
      <div className="mb-default">
        <h2 className="mb-default text-2xl">Blog</h2>
        <Card
          variant="featured"
          title={featuredPost.title}
          desc={featuredPost.excerpt}
          url={`/posts/${featuredPost.slug}`}
          image={featuredPost.coverImage}
        />
      </div>
      <div className="mb-default grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-14">
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
      <div className="mb-default">
        <h2 className="mb-default text-2xl">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects &&
            projects.map(({ image, title, githubUrl, hostedUrl }) => (
              <Project
                key={title}
                image={image}
                title={title}
                githubUrl={githubUrl}
                hostedUrl={hostedUrl}
              />
            ))}
        </div>
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
