import {Instagram, Linkedin, Twitter} from "lucide-react";
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {BiX} from "react-icons/bi";
import {FaX, FaXTwitter} from "react-icons/fa6";
import Link from 'next/link'

export default function SocialsSidebar() {
    return (
        <div
            className={'fixed  border z-[999999]  bg-white text-black px-2  py-4 rounded-[10px] flex flex-col gap-4 items-center right-2  top-[50%] -translate-y-[50%] '}>
            <Link target={'_blank'} href={''}> <FaXTwitter className={'hover:scale-[1.2] transition duration-100'}/></Link>
            <Link target={'_blank'} href={'https://www.instagram.com/vistar.iiserb/'}> <FaInstagram
                className={'hover:scale-[1.2] transition duration-100'} size={20}/></Link>
            <Link target={'_blank'} href={''}> <FaLinkedinIn className={'hover:scale-[1.2] transition duration-100'} size={20}/></Link>
            <Link target={'_blank'} href={''}> <FaGithub className={'hover:scale-[1.2] transition duration-100'} size={20}/></Link>
        </div>
    )
}