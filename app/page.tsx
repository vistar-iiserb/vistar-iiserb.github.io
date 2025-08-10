// "use client";
import "./globals.css";
// import {useEffect, useState} from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Activities from "@/components/Activities";
import JoinClub from "@/components/JoinClub";
import BlogsWrapper from "@/components/BlogsWrapper";

export default function Page() {
    // useEffect(() => {
    //     (async () => {
    //         const LocomotiveScroll = (await import("locomotive-scroll")).default;
    //         const locomotiveScroll = new LocomotiveScroll();
    //     })();
    // }, []);


    return (
        <div>

            <Hero/>
            <main className="flex md:w-[80%] mx-auto relative mt-12 flex-col min-h-screen overflow-hidden ">
                <About/>
                <Activities/>
                <BlogsWrapper/>
            </main>
            <JoinClub/>
        </div>
    )
        ;
}
