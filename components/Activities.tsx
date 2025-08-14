"use client"

import classNames from "classnames";

import {motion} from 'framer-motion'
import React from "react";
import {Brain, Briefcase, Globe, Lightbulb, Users, Wrench} from "lucide-react";

export default function Activities() {

    const activityContent = [
        {
            id: 1,
            icon: <Lightbulb size={23}/>,
            heading: "Innovation & Research",
            description: "Students explore AI ideas through guided research and course projects. Selected works are showcased in our semester-end poster presentation.\n" +
                "\n",
        }, {
            id: 2,
            icon: <Wrench size={23}/>,
            heading: "Skill Development",
            description: "Workshops and sessions to develop core AI and ML skills—from basics to advanced topics. Learn by doing through hands-on, project-focused learning.",
        }, {
            id: 3,
            icon: <Globe size={23}/>,
            heading: "Social Impact",
            description: "Collaborate with non-profits to build AI solutions for real-world challenges. Aimed at using tech for good and fostering community engagement.\n",
        }, {
            id: 4,
            icon: <Users size={23}/>,
            heading: "Cross-Disciplinary Work\n",
            description: "Encouraging teamwork across fields like biology, economics, and design. Tackle complex problems through interdisciplinary collaboration.",
        }, {
            id: 5,
            icon: <Brain size={23}/>,
            heading: "Knowledge Sharing",
            description: "Join weekly reading groups and contribute to our AI E-Magazine with article reviews, summaries, and student perspectives on new research.",
        }, {
            id: 6,
            icon: <Briefcase size={23}/>,
            heading: "Industry Connect\n",
            description: "Learn from expert talks by leading voices in academia and industry. Get inspired, ask questions, and explore careers in AI and ML.",
        },
    ]


    return (
        <div id={'activities'}>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 20}}
                className={classNames(" bg-white  p-12")}
            >
                <h1 className={' text-4xl font-bold  mb-12 text-black  '}>Our Activities</h1>

                <div className={'w-full grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'}>
                    {
                        activityContent.map(activity => (
                            <div key={activity.id} className={'group hover:-translate-y-2 transition duration-500 border border-neutral-300 p-6 rounded-xl shadow-lg  '}>
                                <div className={' bg-black rounded-full p-2 w-fit text-white'}>

                                    {activity.icon}
                                </div>
                                <div>
                                    <h1 className={'font-bold text-md text-black  mt-4 mb-2'}>{activity.heading}</h1>
                                    <p className={'text-sm text-neutral-500'}>{activity.description}</p>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </motion.div>
                <hr className={'mb-12'} />

        </div>
    )
}