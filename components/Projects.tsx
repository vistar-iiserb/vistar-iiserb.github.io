import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { PageWrapper } from "./PageWrapper";
import { link } from "fs";
import Link from "next/link";

export default function Projects() {

  const projects = [
    {
      title: "Chrysalis",
      description:
        "A modern looking blog website with a Sanity backend for team members to add blogs and magazine editions for Sci-Comm Club. ",
      image1: "/projects/chrysalis/1.png",
      link: "https://chrysalis-iiserb.vercel.app/",
    },
    {
      title: "IISERB SAC",
      description:
        "A professional student council website for the college to showcase their events, achievements and to provide a platform for students to connect with the council.",
      image1: "/projects/sac/1.png",
      link: "https://students.iiserb.ac.in/",
    },
    {
      title: "Enthuzia",
      description:
        "An appealing website to showcase the college fest events, schedule and to provide a platform for students to register for events.",
      image1: "/projects/fest/1.png",
      link: "#",
    },
    {
      title: "Animal Quiz",
      description:
        "A backend dashboard to add/edit/delete questions for a quiz app. It also provides a platform to view the quiz results and to manage the users.",
      image1: "/projects/dash/1.png",
      link: "#",
    },
    {
      title: "QuCIS",
      description:
        "An innovative Quantum Lab website dedicated to advancing quantum computing research and education and showcasing their research and people.",
      image1: "/projects/qucis/1.png",
      link: "https://qucis.in/",
    },
    {
      title: "DreSense",
      description:
        "An E-Commerce platform specializing in trendy hoodies and t-shirts for a stylish and comfortable wardrobe.",
      image1: "/projects/dresense/1.png",
      link: "https://dresense.vercel.app/",
    },
  ]
  return (
    <div className="min-h-screen w-full relative  project dark:bg-black bg-white  p-4 md:p-12">
      <h1 className={` text-5xl mb-6`}>
        <span
          className={` silverregular  font-bold text-4xl md:text-5xl text-gray-600 dark:text-gray-400 `}
        >
          {" "}
          My Projects
        </span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto   md:w-[80%] gap-12 md:p-24">

        {projects.map((ob) => (
          <div key={ob.title} className="border border-zinc-200 dark:border-zinc-600 bg-gray-100 dark:bg-zinc-900 p-6 rounded-[24px] mx-auto ">
            <img src={ob.image1} className="rounded-[24px]  object-cover" alt="osmething"/>
            <div className="mt-4">
              <Link href={ob.link} target="_blank" className="hover:underline">
              <h1 className="text-2xl md:text-4xl mt-6 mb-3 font-bold">{ob.title}</h1>
              </Link>
              <span className="text-gray-600 dark:text-gray-400 text-sm md:text-md">{ob.description}</span>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
