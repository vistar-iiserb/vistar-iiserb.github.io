import Blog from "@/components/BlogList";
import {sanityFetch} from "@/sanity/lib/client";
import {PostQuery} from "@/sanity/lib/queries";
import {motion} from "framer-motion";
import classNames from "classnames";



const BlogsWrapper = async () => {
    const posts = await sanityFetch({query: PostQuery})

    return (

            <div id={'blogs'}>
                <Blog posts={posts}/>
            </div>

    )
};

export default BlogsWrapper;
