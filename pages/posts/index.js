import { getAllPosts } from '../../lib/api'
import Link from 'next/link'

export default function Posts({ allPosts }) {
  return (
    <div>
      {allPosts.map((post) => (
        <p>
          <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
            {post.title}
          </Link>
        </p>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts },
  }
}
