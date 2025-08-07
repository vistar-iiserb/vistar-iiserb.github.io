import React, { useEffect } from "react";
import {FlickeringGrid} from "@/components/magicui/flickering-grid";
import Navbar from "./Navbar";
import { PageWrapper } from "./PageWrapper";
import Component from "./infinite-carousel";
import About from "@/components/About";
import Blogs from "@/app/blogs/page";

export default function Hero() {
  return (
    // <PageWrapper>
      <div className="min-h-screen    relative">
        <div className="  text-center bg-white w-full z-[999] h-screen flex flex-col   ">
          <div className=" h-fit ">
            <Navbar />
          </div>
              <FlickeringGrid
                  className="inset-0 z-0 absolute min-h-screen w-full border [mask-image:radial-gradient(400px_circle_at_center,black,transparent)]"
                  squareSize={6}
                  gridGap={12}
                  color="black"
                  maxOpacity={0.1}
                  flickerChance={1}
              />
          <div className="w-full  items-center flex md:flex-row flex-col justify-between h-[80%]   text-gray-800  bg-white   text-left  ">
            <div className="flex flex-col  p-6 md:p-12 justify-between ">
              <div className={` flex flex-col z-[10] md:w-[65%] mt-12 `}>
                  <h1 className="font-bold ml-2  lg:text-6xl text-5xl flex flex-col md:mt-0 mt-24">
                      <span className={'bg-gradient-to-br from-blue-500 to-pink-300 text-white px-3 py-1 w-fit rounded-xl '}>VISTAR</span>
                      <span className={''}>IISER Bhopal</span>
                </h1>
                <p className="mt-4 ml-2  text-gray-500 text-md">
                    The Premier AI Club at IISER Bhopal. Explore, innovate, and collaborate at the forefront of Artificial Intelligence. Join us for hands-on workshops, expert talks, and cutting-edge projects with a community passionate about AI.
                </p>


              </div>

                  <div className={'mt-7 flex gap-2'}>
                      <button className={'text-sm bg-blue-500 text-white px-4 py-2 font-medium rounded-md'}>Join Us</button>
                      <button className={'text-sm border-pink-500 text-blue-500 px-4 py-2 font-medium rounded-md'}>About Us</button>
                  </div>
              </div>
            <img src={'brain.jpg'} className={'w-[30%] borderborder-black/20  z-[10] object-cover aspect-square rounded-xl'} />
            {/*<img src={'brain.jpg'} className={'w-[40%] z-[0] right-6 blur-[100px] absolute object-cover aspect-square rounded-xl'} />*/}
            </div>

            {/*<div className="absolute w-[200px] h-[200px] blur-[100px] animate-spin dark:bg-pink-500 bg-gray-300 rounded-full top-48 left-48"></div>*/}
            {/*<div className="absolute w-[300px] h-[200px] blur-[130px] animate-spin dark:bg-blue-500 bg-zinc-400 rounded-full top-48 left-80"></div>*/}
            {/*<div className="absolute w-[300px] h-[200px] blur-[130px] animate-spin dark:bg-white/50 bg-black/40 rounded-full top-52 left-80"></div>*/}
          </div>
        </div>
    // </PageWrapper>
  );
}
