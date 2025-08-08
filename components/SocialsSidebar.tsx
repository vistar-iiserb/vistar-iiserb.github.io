import {Instagram, Linkedin, Twitter} from "lucide-react";
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {BiX} from "react-icons/bi";
import {FaX, FaXTwitter} from "react-icons/fa6";

export default function SocialsSidebar() {
    return (
        <div
            className={'fixed  border z-[999999]  bg-white text-black px-2  py-4 rounded-[10px] flex flex-col gap-4 items-center right-2  top-[50%] -translate-y-[50%] '}>
            <FaXTwitter />
            <FaInstagram size={20} />
            <FaLinkedinIn size={20} />
            <FaGithub size={20} />
        </div>
    )
}