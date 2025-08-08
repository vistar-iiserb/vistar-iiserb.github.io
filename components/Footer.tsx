import {FaXTwitter} from "react-icons/fa6";
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={"w-full h-[300px] p-12 relative bg-black"}>
            <div className={'w-[80%] mx-auto '}>

                <div className={'text-center'}>
                    Follow us on
                    <div className={'text-xl mt-4  flex items-center justify-center gap-4'}>
                        <FaXTwitter />
                        <FaInstagram  />
                        <FaLinkedinIn  />
                        <FaGithub  />
                    </div>
                </div>
                <hr className={'mt-12 bg-neutral-700 w-full'}/>
            </div>
            <h1 className={'absolute bottom-2 right-2 text-xs text-neutral-400'}>
                {'<'}Developed By {'/>'} : <Link href={'https://www.github.com/TanishqSharma2022'}>Tanishq</Link> & <Link href={'https://github.com/JayB71'}>Jay </Link>
            </h1>
        </div>
    )
}