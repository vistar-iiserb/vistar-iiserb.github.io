"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import classNames from "classnames";
import {urlFor} from "@/sanity/lib/image";
import {ArrowTopRightIcon} from "@sanity/icons";
import {ArrowRight, ChevronRight} from "lucide-react";


interface BlogListType {
    publishedAt: string;
    title: string;
    abstract: string;
    slug: string;
    mainImage: string;
    categories: Category[]
}

interface Category {
    title: string
}


const Blog = ({posts}: { posts: BlogListType[] }) => {
    return (
        <>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 20}}
                className={classNames(" bg-white min-h-screenHeightWithoutHeader")}
            >
                <h1 className={'ml-12 text-4xl font-bold mt-12 text-black  '}>Our Latest Blogs</h1>
                <div
                    className="w-full mt-12   bg-white flex   mx-auto p-2 md:p-8 min-h-screen justify-between  ">

                        <div className="  grid grid-cols-1 md:grid-cols-3 w-full gap-6 capitalize">
                            {posts &&
                                posts.map((post: BlogListType, index) => (
                                    <Link target="_blank" href={`blogs/${post.slug}`} key={index}>
                                        <div
                                            className={` relative   group cursor-pointer items-start min-h-[400px] border border-black/20  rounded-xl z-[0]   gap-4 `}>
                                            <div className="z-[100]   p-6  ">
                                                {/*<h2 className="bg-white/50 backdrop-blur-lg hover:bg-white  rounded-lg text-sm w-fit px-2 py-1 mb-4 text-black ">{post.categories[0].title}</h2>*/}

                                                {/* <Link href={`blogs/${post.title}`}> */}
                                                <div>

                                                <h2 className=" duration-[0.6s] text-black cursor-pointer  transition text-2xl">
                                                    {post.title}
                                                </h2>
                                                {/* </Link> */}

                                                <h2 className="mt-3 text-neutral-800 ">
                                                    <button className={'border border-black/20 rounded-[25px] px-3 py-1 text-sm flex gap-1 items-center'}>Learn More <ChevronRight size={15} /> </button>
                                                </h2>
                                                </div>



                                            <img
                                                src={urlFor(post.mainImage).url() as string} alt=""
                                                className=" duration-[0.6s] mt-6 object-cover w-full aspect-[16/12] rounded-xl "/>
                                            </div>

                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>

            </motion.div>

        </>
    );
};

export default Blog;
