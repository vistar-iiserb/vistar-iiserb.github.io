import Blog from "@/components/BlogList";
import {sanityFetch} from "@/sanity/lib/client";
import {PostQuery} from "@/sanity/lib/queries";
import BlogsWrapper from "@/components/BlogsWrapper";

const Blogs = async () => {
    const posts = await sanityFetch({query: PostQuery})

    return (
        <div className={'md:w-[80%] p-4 text-black mx-auto '}>
            <div className={' bg-gradient-to-tr from-neutral-900 from-[50%] via-neutral-600 to-neutral-400 border shadow-md  rounded-xl  md:p-12 mt-4 text-white py-8 px-1 md:py-24'}>
                <div className={'w-[70%] mx-auto'}>

                    <h1 className={'text-2xl md:text-4xl font-bold text-center'}>Let&apos;s Learn Something Together!</h1>
                    <p className={'text-sm md:text-lg text-neutral-400 mt-4 text-center'}>Are you ready to dive into a world of
                        fascinating stories and insightful articles? Here are some of our latest blogs, carefully
                        curated to spark your curiosity and expand your horizons.</p>
                </div>
            </div>
            <BlogsWrapper />
        </div>
    )
};

export default Blogs;
