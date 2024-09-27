import { getBlogs } from "./fetchers";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <main className="flex flex-col gap-4">
      {blogs.map((blog, i) => (
        <article
          key={i}
          className="grid grid-rows-[auto_auto_75px] text-3xl p-2 gap-2 border-2 border-[rgb(var(--secondary))] bg-[rgb(var(--secondary),0.3)] rounded-md"
        >
          <h1 className="uppercase text-2xl">{blog.frontmatter.title}</h1>
          <div className="grid grid-rows-2 grid-cols-[auto_1fr] flex-col text-lg gap-y-1 gap-x-2">
            <p className="col-start-2 col-span-1 row-span-1">
              {blog.frontmatter.author}
            </p>
            <p className="col-start-2 col-span-1 row-span-1">
              {blog.frontmatter.publishDate}
            </p>
            <div className="row-start-1 row-end-3 row-span-2 col-span-1 h-full aspect-square rounded-full bg-[rgb(var(--primary))]"></div>
          </div>
          {/* <Link href={`/blog/${blog.slug}`}>Read More</Link> */}
          <p className="text-lg">{blog.frontmatter.description}</p>
        </article>
      ))}
    </main>
  );
}
