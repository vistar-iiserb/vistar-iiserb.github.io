// "use client";
import "./globals.css";
// import {useEffect, useState} from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Blogs from "@/app/blogs/page";
import Footer from "@/components/Footer";
import Activities from "@/components/Activities";
import JoinClub from "@/components/JoinClub";

export default function Home() {
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
                <Blogs/>
            </main>
            {/*<JoinClub/>*/}
            <Footer/>
        </div>
    )
        ;
}
