import "./globals.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import JoinClub from "@/components/JoinClub";
import BlogsWrapper from "@/components/BlogsWrapper";
import VideoSection from "@/components/VideoSection";
import TalkSection from "@/components/TalkSection";

export default function Page() {

    return (
        <div>
            <Hero/>
            <main className="flex md:w-[80%] mx-auto relative mt-12 flex-col min-h-screen overflow-hidden ">
                <About/>
                <Activities/>
                <TalkSection/>
                <VideoSection/>
                {/* <BlogsWrapper/> */}
            </main>
            <JoinClub/>
        </div>
    )
}
