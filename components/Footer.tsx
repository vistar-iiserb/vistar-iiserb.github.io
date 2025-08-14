import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={"w-full h-[300px] p-12 relative bg-black"}>
            <div className={'w-[80%] mx-auto '}>

                <div className={'text-center'}>
                    Follow us on
                    <div className={'text-xl mt-4  flex items-center justify-center gap-4'}>
                        <Link target={'_blank'} href={''}>
                            <FaYoutube className={'hover:scale-[1.2] transition duration-100'} size={20} />
                        </Link>
                        <Link target={'_blank'} href={''}>
                            <FaLinkedinIn className={'hover:scale-[1.2] transition duration-100'} size={20} />
                        </Link>
                        <Link target={'_blank'} href={''}>
                            <FaGithub className={'hover:scale-[1.2] transition duration-100'} size={20} />
                        </Link>
                    </div>
                </div>
                <hr className={'mt-12 bg-neutral-700 w-full'} />
                <h1 className={' text-xs text-neutral-400 mt-3'}>
                    The design of this website is inspired by the <Link href={'https://aiclub.stanford.edu/'} target="_blank">Stanford AI Club</Link>.
                </h1>
            </div>


            <h1 className={'absolute bottom-2 left-2 text-xs text-neutral-400'}>
                © 2025 Vision for Technology and Artificial Intelligence Research Cell, IISER Bhopal. All rights reserved.
            </h1>
            <h1 className={'absolute bottom-2 right-2 text-xs text-neutral-400'}>
                {'<'}Developed By {'/>'} : <Link
                    href={'https://www.github.com/TanishqSharma2022'}>Tanishq</Link> & <Link
                        href={'https://github.com/JayB71'}>Jay </Link>
            </h1>
        </div>
    )
}