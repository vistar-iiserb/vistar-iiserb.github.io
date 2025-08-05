"use client"
import About from "@/components/About"
import Navbar from "@/components/Navbar"
import { PageWrapper } from "@/components/PageWrapper";
import Skills from "@/components/Skills"
import { useEffect } from "react";

export default function AboutPage(){
    useEffect(() => {
        (async () => {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;
          import("locomotive-scroll").then((module) => {
            const LocomotiveScroll = module.default as any;
            // Use LocomotiveScroll here
          });
          const locomotiveScroll = new LocomotiveScroll();
        })();
      }, []);
    

    return(
        <div className="bg-[#10100e]">
        <PageWrapper>
        <Navbar />
        <About />
        <Skills />
        </PageWrapper>
        </div>
    )
}