import {useLayoutEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import gsap from "gsap";
import Skills from "./Skills";

export default function About() {

    return (
        <div
        id={'about'}
            className=" bg-white   w-full pb-24 flex flex-col px-6  md:flex-row justify-between gap-12 relative group shadow-sm "
        >
            <div className="md:ml-8 overflow-hidden rounded-[24px]  relative      md:w-[50%] ">
                <h1
                    className={` font-bold text-3xl md:text-5xl text-gray-800  `}
                >
                    About VISTAR
                </h1>
                <p className=" text-gray-800  mt-4 md:mt-12  text-sm md:text-lg   ">

                    Vision for Technology and Artificial Intelligence Reserach (VISTAR) is the premier hub for students passionate about Artificial Intelligence on campus. We are committed to building an inclusive and dynamic community where students—from complete beginners to experienced researchers—can explore and contribute to the field of AI.

                    Our mission is to empower students with the knowledge, tools, and collaborative environment needed to engage meaningfully with AI research and development. We aim to serve as a central platform for AI-related learning and innovation at IISER Bhopal, bridging the gap between theory, application, and interdisciplinary exploration.

                    <br /> <br />
                    We organize a diverse range of activities including hands-on workshops, student-led research projects, reading groups, and foundational classes—designed to develop both theoretical understanding and practical AI skills.

                    <br /> <br />
                    In addition to on-campus activities, we collaborate with academic institutions and non-profit organizations that share our goal of making AI more accessible and equitable. Through expert lectures, panel discussions, and small-group sessions with leaders in the AI space, the club provides students with valuable learning and networking opportunities that extend beyond the classroom.
                </p>
                {/*<div className="absolute bottom-0 right-0 blur-[150px] bg-blue-400  w-[200px] h-[200px]" />*/}
            </div>
            {/*<Skills />*/}
        </div>
    );
}
