"use client"

import React, {useEffect} from "react";
import {FlickeringGrid} from "@/components/magicui/flickering-grid";
import Navbar from "./Navbar";
import {PageWrapper} from "./PageWrapper";
import Component from "./infinite-carousel";
import About from "@/components/About";
import Blogs from "@/app/blogs/page";
import {ArrowRight, Handshake, Landmark} from "lucide-react";
import SocialsSidebar from "@/components/SocialsSidebar";
import {motion} from 'framer-motion'

export default function Hero() {
    return (
        // <PageWrapper>
        <div className=" p-2  md:p-4   relative">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 20}}
                className="  text-center px-4 md:px-12  min-h-[80%] relative  bg-[#0e1014] rounded-[30px] overflow-hidden  mx-auto  flex flex-col   ">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 20}}
                    transition={{delay: 0.4}}
                    className="w-full md:w-[85%] z-[10] mx-auto h-fit ">
                    <Navbar/>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 0}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 0}}
                    transition={{delay: 0.6}}
                >

                <FlickeringGrid
                    className="inset-0 z-0 absolute min-h-screen w-full "
                    squareSize={5}
                    gridGap={8}
                    color="white"
                    maxOpacity={0.3}
                    flickerChance={0.1}
                />
                </motion.div>
                <div
                    className={'inset-0 z-0 bg-[radial-gradient(circle_1200px_at_center,#0e1014,transparent)]  absolute top-0 left-0 '}/>
                <div
                    className="w-full z-[10] items-center mb-24 flex  flex-col   justify-between h-[80%]   text-gray-200      ">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        transition={{delay: 0.4}}
                        className="flex flex-col  p-6 md:p-12 mx-auto items-center justify-between ">
                        <div className={` flex flex-col z-[10] md:w-[50%] mx-auto mt-12 `}>
                            <h1 className="font-bold ml-2 text-center items-center  flex flex-col md:mt-0 mt-24">
                                <span
                                    className={'text-xs mb-4 flex items-center gap-2  rounded-[30px]  uppercase mx-auto text-neutral-900 bg-white border border-white/20 w-fit py-2 px-3'}>
                                <Landmark size={17}/>
                                    IISER Bhopal
                                </span>
                                <span
                                    className={'shadow-md bg-gradient-to-br from-white via-neutral-500 to-neutral-200  bg-clip-text text-transparent lg:text-8xl text-7xl text-center   px-3 py-1 w-fit rounded-xl '}>
                                    VISTAR
                                </span>
                                <span
                                    className={'shadow-md text-xl uppercase mt-4  text-white px-3 py-1 w-fit rounded-xl '}>
                                    Vision for Technology and Artificial Intelligence Research
                                </span>
                                {/*<span className={''}>IISER Bhopal</span>*/}
                            </h1>
                            <p className="mt-12 ml-2  text-neutral-300 text-md">
                                The Premier AI Cell at IISER Bhopal. Explore, innovate, and collaborate at the forefront
                                of Artificial Intelligence. Join us for hands-on workshops, expert talks, and
                                cutting-edge projects with a community passionate about AI.
                            </p>


                        </div>

                        <div className={'mt-10 flex gap-4'}>
                            <button
                                className={'text-md flex items-center gap-2  bg-black border-white/50 border text-white px-4 py-2 font-medium rounded-md'}>
                                <Handshake size={20}/>
                                Join Us
                            </button>
                            <button
                                className={'text-md border group overflow-hidden  group transition duration-500  border-white/20 bg-white text-gray-800 flex items-center gap-2   px-4 py-2 font-medium rounded-md'}>
                                About
                                Us
                                <ArrowRight size={20} className={' '}/>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/*<div className="absolute w-[400px] h-[400px] blur-[370px] animate-spin  bg-gray-500 rounded-full top-48 left-48"></div>*/}
                {/*<div className="absolute w-[400px] h-[400px] blur-[370px] animate-spin  bg-zinc-800 rounded-full top-48 left-80"></div>*/}
                {/*<div className="absolute w-[400px] h-[400px] blur-[330px] animate-spin  bg-black/40 rounded-full top-52 left-80"></div>*/}


            </motion.div>

            <SocialsSidebar/>


        </div>
        // </PageWrapper>
    );
}
