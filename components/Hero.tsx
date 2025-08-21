"use client"

import React, { useEffect } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Navbar from "./Navbar";
import { PageWrapper } from "./PageWrapper";
import Component from "./infinite-carousel";
import About from "@/components/About";
import Blogs from "@/app/blogs/page";
import { ArrowRight, Handshake, Landmark } from "lucide-react";
import SocialsSidebar from "@/components/SocialsSidebar";
import { motion } from 'framer-motion'
import Link from "next/link";

export default function Hero() {
    return (
        // <PageWrapper>
        <div className=" p-2  md:p-4   relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="  text-center px-4 md:px-12  min-h-[80%] relative  bg-[#0e1014] rounded-[30px] overflow-hidden  mx-auto  flex flex-col   ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 }}
                    className="w-full md:w-[85%] z-[10] mx-auto h-fit ">
                    <Navbar />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ delay: 0.6 }}
                >

                    <FlickeringGrid
                        className="inset-0 z-0  absolute min-h-screen w-full "
                        squareSize={20}
                        gridGap={1}
                        color="gray"
                        maxOpacity={0.1}
                        flickerChance={0.05}
                        
                    />
                </motion.div>
                <div
                    className={'inset-0 z-0 bg-[radial-gradient(circle_1200px_at_center,#0e1014,transparent)]  absolute top-0 left-0 '} />
                <div
                    className="w-full z-[10] items-center  flex  flex-col   justify-between    text-gray-200      ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col  mx-auto mb-12 py-12 items-center justify-between ">
                        <div className={` flex flex-col  z-[10] md:w-[50%] mx-auto mt-12 `}>

                            <h1 className="font-bold  text-center items-center  flex flex-col md:mt-0 mt-24">
                                {/* <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "></div> */}
                                <span
                                    className={'shadow-md bg-gradient-to-br from-white via-neutral-500 to-neutral-200  bg-clip-text text-transparent lg:text-9xl text-7xl text-center   px-3 py-1 w-fit rounded-xl  '}>
                                    VISTAR
                                </span>
                                <span
                                    className={'shadow-md text-xl mt-6  text-white px-3 py-1 w-fit font-black rounded-xl '}>
                                    VISion for Technology and Artificial intelligence Research
                                </span>
                            </h1>
                            <p className=" mt-4 ml-2  text-neutral-300 text-md">
                                The Artificial Intelligence Student Cell at IISER Bhopal. Explore, innovate, and collaborate at the forefront
                                of Artificial Intelligence. Join us for hands-on workshops, expert talks, and cutting-edge projects with a community passionate about Artificial Intelligence.
                            </p>
                        </div>

                        <div className={'mt-10 flex gap-4'}>
                            <Link href={'/contact'}>
                                <button
                                    className={'text-md group hover:bg-neutral-800 hover:underline underline-offset-4 transition duration-600 flex items-center gap-2  bg-black border-white/50 border text-white px-4 py-2 font-medium rounded-md'}>
                                    <Handshake className="group-hover:scale-110 transition duration-500" size={20} />
                                    Join Us
                                </button>
                            </Link>
                            <Link href={'/#about'}>
                                <button
                                    className={'text-md border group text-md hover:bg-neutral-200 hover:underline underline-offset-4  group transition duration-500  border-white/20 bg-white text-gray-800 flex items-center gap-2   px-4 py-2 font-medium rounded-md'}>
                                    About
                                    Us
                                    <ArrowRight size={20} className="group-hover:scale-110 transition duration-500" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/*<div className="absolute w-[400px] h-[400px] blur-[370px] animate-spin  bg-gray-500 rounded-full top-48 left-48"></div>*/}
                {/*<div className="absolute w-[400px] h-[400px] blur-[370px] animate-spin  bg-zinc-800 rounded-full top-48 left-80"></div>*/}
                {/*<div className="absolute w-[400px] h-[400px] blur-[330px] animate-spin  bg-black/40 rounded-full top-52 left-80"></div>*/}


            </motion.div>

            <SocialsSidebar />


        </div>
        // </PageWrapper>
    );
}



/* t

        // Button code
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button>
  
        // tailwind.config.js code
        {
          "animation": {
            shimmer: "shimmer 2s linear infinite"
          },
          "keyframes": {
            shimmer: {
              from: {
                "backgroundPosition": "0 0"
              },
              to: {
                "backgroundPosition": "-200% 0"
              }
            }
          }
        }
      
*/