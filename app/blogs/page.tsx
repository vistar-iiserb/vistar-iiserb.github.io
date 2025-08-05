
import Blog from "@/components/BlogList";
import { sanityFetch } from "@/sanity/lib/client";
import { PostQuery } from "@/sanity/lib/queries";

const Blogs = async () => {
  const posts = await sanityFetch({ query: PostQuery })

  return (

    <div id={'blogs'}>
      <Blog posts={posts} />
    </div>
  )
};

export default  Blogs;
