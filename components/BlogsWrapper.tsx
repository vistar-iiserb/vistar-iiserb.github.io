import Blog from "@/components/BlogList";
// Temporarily commented out for static export testing
// import {sanityFetch} from "@/sanity/lib/client";
// import {PostQuery} from "@/sanity/lib/queries";
import {motion} from "framer-motion";
import classNames from "classnames";

// Modified for static export compatibility - removed async
const BlogsWrapper = () => {
    // Temporarily pass empty array for static build testing
    const posts: any[] = [];

    return (
        <div id={'blogs'}>
            <Blog posts={posts}/>
        </div>
    );
};

export default BlogsWrapper;
