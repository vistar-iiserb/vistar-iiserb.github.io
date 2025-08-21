"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
} from "@heroui/dropdown";
import {Button} from "@heroui/button";
import {ModeToggle} from "./DarkModeToggle";
import {BotMessageSquare} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const navLinks = [
        {
            id: 0,
            title: "Home",
            link: "/",
        },
        {
            id: 2,
            title: "About",
            link: "/#about",
        },
        {
            id: 3,
            title: "Activities",
            link: "/#activities",
        },
        {
            id: 4,
            title: "Blogs",
            link: "/blogs",
        }, {
            id: 5,
            title: "Teams",
            link: "/team",
        },
    ];

    return (
        <header
            className=" z-[99999]  mx-auto mt-0 md:mt-12 bg-white rounded-[20px] border shadow-sm  p-4 text-gray-800 tracking-tight  flex flex-row  items-center justify-between">
            <div
                className="cursor-pointer flex justify-between    w-full z-[99999]  group   items-center  text-md">
                <span className={'flex items-center gap-2 font-bold'}>
                 <Link href={'https://iiserb.ac.in'} target="_blank">
                    <Image width={2200} height={2200} className="w-12 h-12 object-contain" src="/file.svg" alt="IISERB Logo" />
                 </Link>   
                 <Link href={'https://dse.iiserb.ac.in'} target="_blank">
                    <Image width={2200} height={2200} className="w-12 h-12 object-contain" src="/dse.svg" alt="IISERB Logo" />
                </Link>
                </span>
                <div className={'gap-6 md:flex hidden items-center overflow-hidden'}>

                    {navLinks.map((navLink) => (
                        <Link
                            key={navLink.id}
                            href={navLink.link}
                            style={{"--text": `"${navLink.title}"`}}
                            className=" overflow-hidden hover:underline transition duration-500 underline-offset-4"
                        >
                            <h1 className=" transition">{navLink.title}</h1>
                        </Link>
                    ))}
                    <Link href={'/contact'}>
                    <button className={'bg-zinc-900 hover:bg-black transition duration-500 text-white py-2  rounded-xl px-4'}>Join Us</button>
                    </Link>
                </div>
            </div>

            <div className=" md:hidden ">
                <Dropdown className="bg-gray-800">
                    <DropdownTrigger>
                        <Button className="bg-transparent border-none text-gray-800">
                            Menu
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions"
                                  className="silverregular backdrop-blur-[20px] bg-[#10100e]/20">
                        <DropdownItem key="new">
                            <Link href={"/"}>Home</Link>
                        </DropdownItem>

                        <DropdownItem key="new2">
                            <Link href={"#about"}>About</Link>
                        </DropdownItem>

                        <DropdownItem key="new3">
                            <Link href={"#blogs"}>Blogs</Link>
                        </DropdownItem>

                        <DropdownItem key="new4">
                            <Link href={"#"}>Activities</Link>
                        </DropdownItem>
                        <DropdownItem key="new5">
                            <Link href={"#"}>Team</Link>
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>
            </div>
            {/*<div className="flex gap-8 items-center mr-4 z-[10] ">*/}
            {/*    <ModeToggle/>*/}
            {/*    <Link href="https://github.com/TanishqSharma2022" target="_blank">*/}
            {/*        <FaGithub*/}
            {/*            className="hover:scale-110 dark:hover:text-gray-200 transition duration-[500ms] cursor-pointer hover:rotate-[20deg] "*/}
            {/*            size={20}*/}
            {/*        />*/}
            {/*    </Link>*/}
            {/*    <Link*/}
            {/*        href="https://www.instagram.com/itsmetanishq____/"*/}
            {/*        target="_blank"*/}
            {/*    >*/}
            {/*        <FaInstagram*/}
            {/*            className="hover:scale-110 dark:hover:text-gray-200 transition duration-[500ms] cursor-pointer hover:rotate-[20deg] "*/}
            {/*            size={20}*/}
            {/*        />*/}
            {/*    </Link>*/}
            {/*    <Link*/}
            {/*        href="https://www.linkedin.com/in/tanishq-sharma-iiser/"*/}
            {/*        target="_blank"*/}
            {/*    >*/}
            {/*        <FaLinkedinIn*/}
            {/*            className="hover:scale-110 dark:hover:text-gray-200 transition duration-[500ms] cursor-pointer hover:rotate-[20deg] "*/}
            {/*            size={20}*/}
            {/*        />*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </header>
    );
}
