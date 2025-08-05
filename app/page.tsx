// "use client";
import "./globals.css";
// import {useEffect, useState} from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Blogs from "@/app/blogs/page";

export default function Home() {
    // useEffect(() => {
    //     (async () => {
    //         const LocomotiveScroll = (await import("locomotive-scroll")).default;
    //         const locomotiveScroll = new LocomotiveScroll();
    //     })();
    // }, []);


    return (
        <main className="flex md:w-[80%] mx-auto relative flex-col min-h-screen overflow-hidden ">
            <Hero/>
            <About/>
            <Blogs/>
        </main>
    )
        ;
}
