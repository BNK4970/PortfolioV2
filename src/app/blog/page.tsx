import Link from "next/link"
import { getBlogs } from "./fetchers"

export default async function BlogsPage() {
  const blogs = await getBlogs()
  return (
    <main className="flex flex-col gap-4">
      {blogs.map((blog, i) => (
        <article key={i} className="grid grid-rows-4 text-3xl p-2 border-2 border-[rgb(var(--secondary))] rounded-md">
          <h1>{blog.frontmatter.title}</h1>
          <p>{blog.frontmatter.author}</p>
          <p>{blog.frontmatter.publishDate}</p>
          <p className="text-red-600">{blog.slug}</p>
          <Link href={`/${blog.slug}`}>Read More</Link>
        </article>
      ))}
    </main>
  )
}