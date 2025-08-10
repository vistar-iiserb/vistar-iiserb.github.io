/* eslint-disable @next/next/no-img-element */

import React from "react";
import {PostQueryBySlug} from "@/sanity/lib/queries";
import {sanityFetch} from "@/sanity/lib/client";
import {PortableText} from "next-sanity";
import {urlFor} from "@/sanity/lib/image";
import {portableTextComponents} from "@/components/PortableTextComponent";
import {Share2} from "lucide-react";
import ShareButton from "@/components/ShareButton";
import {ToastProvider} from "@heroui/react";

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const {slug} = params;
    // const currentUrl = `https://tanishqsharma.vercel.app/blogs/${slug}`; // Adjust this to match your domain


    const blogData = await sanityFetch({
        query: PostQueryBySlug,
        params: {slug},
    });


    return (

        <div>
            <div className="w-[50%] mx-auto bg-white p-6 md:p-12">
                <div className="flex items-center justify-between">

                    <div className="">
                        {/*<button className="bg-gray-500/40  text-xs md:text-sm rounded-xl mb-2 text-gray-800 dark:text-gray-200 px-4  backdrop-blur-sm py-2">{blogData[0]?.categories[0]?.title}</button>*/}
                        <h1 className="text-6xl md:text-5xl font-bold tracking-tighter text-gray-800 ">{blogData[0]?.title}</h1>
                        <h1 className="mt-3 mb-12 text-gray-600">{blogData[0]?.abstract}</h1>
                    </div>
                    <div className="">
                        {/*<ShareButton url={currentUrl} />*/}
                    </div>
                </div>
                <div className="relative">

                    {/* <div className="w-full h-full bg-[#f8f8dd]/50 rounded-xl absolute "></div> */}
                    <img
                        className=" w-full h-[400px] md:min-h-[600px] aspect-[16/9]  rounded-xl  object-cover"
                        src={urlFor(blogData[0].mainImage).url() as string}
                        alt=""/>

                </div>

                <div className="mx-auto text-gray-900  max-w-2xl mt-12">
                    <PortableText value={blogData[0].body} components={portableTextComponents}/>
                </div>
            </div>
        </div>
    );
};
