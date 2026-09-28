import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {


    const contactMembers = [

        {
            id: 1,
            image: "/dev.jpg",
            name: "Dev Raj",
            email: "devraj23@iiserb.ac.in",
            mobile: "",
            github: "http://github.com/devraj2307",
            linkedin: "https://www.linkedin.com/in/dev-raj-iiserb/"

        },
        {
            id: 2,
            image: "/poorvai.jpeg",
            name: "Poorvai Chandrasen",
            email: "poorvai23@iiserb.ac.in",
            mobile: "",
            github: "http://github.com/Poorvai",
            linkedin: "https://www.linkedin.com/in/poorvai-chandrasen/"

        },

    ]

    return (
        <>
            <div className="md:w-[80%] text-center mx-auto py-12  min-h-screen">
                <div className="w-[80%] md:w-[50%] mx-auto">
                    <h1 className="text-6xl font-black text-black uppercase">Contact our team.</h1>
                    <h1 className=" text-md mt-6 text-neutral-700"> We&apos;re here to help. Do you want to join our cell? Interested in collabarating and sponsoring the events? Contact our team coordinators.</h1>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 text-black mt-12 items-stretch justify-center mx-auto">
                  
                     {
                            contactMembers.map(member => (
                                <div key={member.id} className="flex h-full w-full max-w-xs flex-col rounded-xl border border-neutral-200 p-6 shadow-sm">
                                    <Image
                                        className="aspect-square w-full rounded-xl object-cover shadow-md"
                                        src={member.image}
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                    />
                                    <h2 className={'mt-6 font-bold text-lg'}>{member.name}</h2>
                                    <Link href={`mailto:${member.email}`}><h2 className={'mt-1 text-sm'}>{member.email}</h2></Link>
                                    <Link href=""><h2 className={'mt-1 text-sm'}>{member.mobile}</h2></Link>
                                    <div className="mt-auto flex items-center justify-center gap-3 pt-5 text-sm font-medium">
                                        <Link
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline decoration-transparent underline-offset-4 transition hover:text-neutral-500 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                                            aria-label={`${member.name}'s GitHub profile`}
                                        >
                                            <FaGithub aria-hidden="true" size={20} />
                                        </Link>
                                        <span className="text-neutral-300">/</span>
                                        <Link
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline decoration-transparent underline-offset-4 transition hover:text-neutral-500 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                                            aria-label={`${member.name}'s LinkedIn profile`}
                                        >
                                            <FaLinkedinIn aria-hidden="true" size={20} />
                                        </Link>
                                    </div>
                                </div>

                            ))
                        }
                     
                    </div>
                </div>


            </div>
        </>
    )
}