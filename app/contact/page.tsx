import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {


    const contactMembers = [

        {
            id: 1,
            name: "P S Rishi",
            email: "rishi22@iiserb.ac.in",
            mobile: "+91 xxxxx xxxxx"

        },
        {
            id: 2,
            name: "Pratyaksh Patel",
            email: "pratyaksh22@iiserb.ac.in",
            mobile: "+91 xxxxx xxxxx"


        },
        {
            id: 3,
            name: "Vivek Kumar",
            email: "vivekk22@iiserb.ac.in",
            mobile: "+91 xxxxx xxxxx"

        },

    ]

    return (
        <>
            <div className="md:w-[80%] text-center mx-auto py-12  min-h-screen">
                <div className="w-[80%] md:w-[50%] mx-auto">
                    <h1 className="text-6xl font-black text-black uppercase">Contact our team.</h1>
                    <h1 className=" text-md mt-6 text-neutral-700"> We&apos;re here to help. Do you want to join our cell? Interested in collabarating and sponsoring the events? Contact our team members.</h1>

                    <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 text-black mt-12 place-items-center justify-center  mx-auto">
                  
                     {
                            contactMembers.map(member => (
                                <div key={member.id} className={''}>
                                    <img className={'shadow-md rounded-xl'}
                                         src={`https://cdn.jsdelivr.net/gh/alohe/memojis/png/notion_${member.id}.png`}/>
                                    <h2 className={'mt-6 font-bold text-lg'}>{member.name}</h2>
                                    <Link href={`mailto:${member.email}`}><h2 className={'mt-1 text-sm'}>{member.email}</h2></Link>
                                    <Link href=""><h2 className={'mt-1 text-sm'}>{member.mobile}</h2></Link>
                                </div>

                            ))
                        }
                     
                    </div>
                </div>


            </div>
        </>
    )
}