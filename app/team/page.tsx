import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Team() {

    const teams: { id: number; title: string; members: { id: number; name: string; image?: string, batch?: string, github?: string, linkedin?: string, bio?: string }[] }[] = [
        {
            id: 0,
            title: "Faculty Advisors",
            members: [
                {
                    id: 1,
                    name: "Dr. Akshay Agarwal",
                    image: "/akshayagarwal.jpeg"
                },
                {
                    id: 2,
                    name: "Dr. Akash Anil",
                    image: "/akashanil.jpg"

                },
                {
                    id: 3,
                    name: "Dr. Vinod Kurmi",
                    image: "/vinodkurmi.jpg"
                },
                

            ]
        },
        {
            id: 1,
            title: "Coordinators",
            members: [
                {
                    id: 1,
                    name: "Dev Raj",
                    image: "/dev.jpg",
                    github: "http://github.com/devraj2307",
                    linkedin: "https://www.linkedin.com/in/dev-raj-iiserb/",
                    bio: "You miss 100% of the shots you don’t take – Wayne Gretzky – Michael Scott – Dev Raj"
                },
                {
                    id: 2,
                    name: "Poorvai Chandrasen",
                    image: "/poorvai.jpeg",
                    github: "http://github.com/Poorvai",
                    linkedin: "https://www.linkedin.com/in/poorvai-chandrasen/",
                    bio: "If you weren’t ready, you wouldn’t have the opportunity; if you weren’t capable you wouldn’t have the desire"
                },
                
            ]
        },
        {
            id: 2,
            title: "Core Members",
            members: [
                {
                    id: 5,
                    name: "Rishitha Pamu",
                    batch: "2025",
                    image: "/rishitha.jpg",
                    github: "https://github.com/rishithapamu",
                    linkedin: "https://www.linkedin.com/in/rishitha-pamu/",
                    bio: "With great responsibility, come the great need to take a nap"
                },
                {
                    id: 6,
                    name: "Shubhang Choudhary",
                    batch: "2025",
                    image: "/shubhang (8).jpeg",
                    github: "https://github.com/shubhang25",
                    linkedin: "https://www.linkedin.com/in/shubhangc",
                    bio: "I pull all-nighters like it's my own training arc"
                },
                {
                    id: 7,  
                    name: "Samyak Rokade",
                    batch: "2025",
                    image: "/samyak.jpg",
                    github: "http://gitHub.com/samyakk21",
                    linkedin: "http://linkedin.com/in/samyak07",
                    bio: "Hope does not come without cost",

                },
                {
                    id: 8,
                    name: "Soham Bhugra",
                    batch: "2025",
                    image: "/soham.jpg",
                    github: "https://github.com/sohambhugra",
                    linkedin: "https://www.linkedin.com/in/sohambhugra",
                    bio: "O, Let the matrix dissolve and the stars yield their fire, our design shall outlast death's cold, final desire"
                },
                {
                    id: 9,
                    name: "Jasmine",
                    batch: "2024",
                    image: "/jasmine.jpg",
                    github: "https://github.com/jasmineghalyan",
                    linkedin: "https://www.linkedin.com/in/jasmine-ghalyan",
                    bio: "Lost in my head, figuring it out as I go, but still showing up every single day"
                },
                {
                    id: 10,
                    name: "Angel Yadav",
                    batch: "2025",
                    image: "/angel.jpg",
                    github: "https://github.com/oxymoron119",
                    linkedin: "http://linkedin.com/in/angel-yadav",
                    bio: "I wanna build all the cool stuff with data"
                },
                {
                    id: 11,
                    name: "Swapnil Bhattacharyya",
                    batch: "2025",
                    image: "/Swapnil.jpg",
                    github: "http://github.com/SwapnilBhatta",
                    linkedin: "http://linkedin.com/in/swapnil-bhattacharyya-736628409",
                    bio: "Embracing the mysterious in art, but never trusting it in a black box"
                },
                {
                    id: 12,
                    name: "Amritash Mishra",
                    batch: "2025",
                    image: "/Amritash.jpg",
                    github: "https://github.com/its-meAmrit",
                    linkedin: "https://www.linkedin.com/in/amritash-mishra/",
                    bio: "Quietly Loud"
                },
                {
                    id: 13,
                    name: "Amritup Vats",
                    batch: "2025",
                    image: "/Amritup.jpg",
                    github: "https://github.com/amvats",
                    linkedin: "https://www.linkedin.com/in/amritup-vats/",
                    bio: "Fueled by curiosity and an unreasonable amount of ambition"
                },
                {
                    id: 14,
                    name: "Nishtha Singh",
                    batch: "2025",
                    image: "/Nishtha.jpg",
                    github: "https://github.com/nishtha-singhh",
                    linkedin: "https://www.linkedin.com/in/nishtha-singhh",
                    bio: "Somewhere between curiosity and chaos, I keep going"
                },
                {
                    id: 15,
                    name: "Mayukh Khan",
                    batch: "2025",
                    image: "/Mayukh.jpg",
                    github: "https://github.com/mrmayukhkhan-wq",
                    linkedin: "https://www.linkedin.com/in/mayukh-khan",
                    bio: "I’m still figuring myself out, but I know I’ll never stop learning and exploring"
                },
                {
                    id: 16,
                    name: "Abhijeet Kumar",
                    batch: "2025",
                    image: "/Abhijeet.jpg",
                    github: "https://github.com/abhijeet2529",
                    linkedin: "https://www.linkedin.com/in/abhijeet2529/",
                    bio: "I Try, I Explore and I Exploit"
                },
                {
                    id: 17,
                    name: "Deepak Upadhyay",
                    batch: "2025",
                    image: "/Deepak.jpeg",
                    github: "http://github.com/DeepakUpadhyay99",
                    linkedin: "https://www.linkedin.com/in/deepak-upadhyay-",
                    bio: "Analyzes data of mind until every last sample(including the analyst) becomes null"
                },
            
            ]
        },
        {
            id: 3,
            title: "Past Coordinators",
            members: [
                {
                    id: 18,
                    name: "P S Rishi",
                    batch: "2022",
                    image: "/rishi.jpg",
                    github: "https://github.com/rishi-ps",
                    linkedin: "https://www.linkedin.com/in/rishi-sivakumar/"
                },
                {
                    id: 19,
                    name: "Pratyaksh Patel",
                    batch: "2022",
                    image: "/pratyaksh.jpg",
                    github: "https://github.com/pratyakshpatel",
                    linkedin: "https://www.linkedin.com/in/pratyaksh-patel-9360a7251/"
                },
                {
                    id: 20,
                    name: "Vivek Kumar",
                    batch: "2022",
                    image: "/vivek.jpeg",
                    github: "https://github.com/vickvey",
                    linkedin: "https://www.linkedin.com/in/vickvey/"
                }
            ]
        }
    ]

    return (
        <div className={'min-h-screen mb-24 flex flex-col text-black items-center justify-center text-center'}>
            {teams.filter(team => team.id !== 3).map(team => (
                <div key={team.id}>
                    <div className={'relative flex items-center justify-center'}>
                        <div className={'w-full h-[1px] bg-neutral-500 z-[0] absolute'}/>
                        <h1 className={'text-black font-bold text-4xl z-[10]  uppercase bg-white px-6 tracking-tight mt-12 mb-12'}>{team.title}</h1>
                    </div>
                    <div className={`grid grid-cols-1 justify-center place-items-center ${team.id === 1 ? 'md:grid-cols-2' : 'md:grid-cols-3'} ${team.id === 2 ? 'gap-x-12 gap-y-20' : 'gap-12'}`}>

                        {
                            team.members.map((member, index) => (
                                <div
                                    key={member.id}
                                    className={`flex h-full w-[220px] flex-col items-center ${team.id === 2 && index === team.members.length - 1 ? 'md:col-start-2' : ''}`}
                                >
                                    <Image 
                                    width={100}
                                    height={100}
                                    alt={member.name}
                                    className={'shadow-md rounded-xl w-[200px] h-[200px] object-cover object-top aspect-square max-w-[200px]'}
                                         src={member.image ? member.image : `https://cdn.jsdelivr.net/gh/alohe/memojis/png/notion_${member.id}.png`}/>
                                    <h2 className={'mt-6 font-bold'}>{member.name}</h2>
                                    {member.bio && (
                                        <p className="mt-2 flex min-h-20 max-w-[220px] items-center justify-center text-sm italic text-neutral-700">
                                            {member.bio}
                                        </p>
                                    )}
                                    {(member.github || member.linkedin) && (
                                        <div className="mt-auto flex items-center justify-center gap-3 pt-5 text-sm font-medium">
                                            {member.github && (
                                                <Link
                                                    href={member.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline decoration-transparent underline-offset-4 transition hover:text-neutral-500 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                                                    aria-label={`${member.name}'s GitHub profile`}
                                                >
                                                    <FaGithub aria-hidden="true" size={20} />
                                                </Link>
                                            )}
                                            {member.github && member.linkedin && <span className="text-neutral-300">/</span>}
                                            {member.linkedin && (
                                                <Link
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline decoration-transparent underline-offset-4 transition hover:text-neutral-500 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                                                    aria-label={`${member.name}'s LinkedIn profile`}
                                                >
                                                    <FaLinkedinIn aria-hidden="true" size={20} />
                                                </Link>
                                            )}
                                        </div>
                                    )}
                                </div>

                            ))
                        }
                    </div>
                </div>
            ))}
            <section className="mt-12 w-full max-w-5xl">
                <h1 className="mx-auto flex w-fit items-center justify-center border-y border-neutral-500 px-6 py-4 text-2xl font-bold uppercase tracking-tight">
                    Past Coordinators
                </h1>
                <div className="mt-12 grid grid-cols-1 justify-center gap-12 md:grid-cols-3">
                    {teams.find(team => team.id === 3)?.members.map(member => (
                        <div key={member.id} className="flex h-full w-[220px] flex-col items-center justify-self-center">
                            <Image
                                width={100}
                                height={100}
                                alt={member.name}
                                className="aspect-square h-[200px] w-[200px] max-w-[200px] rounded-xl object-cover object-top shadow-md"
                                src={member.image ? member.image : `https://cdn.jsdelivr.net/gh/alohe/memojis/png/notion_${member.id}.png`}
                            />
                            <h2 className="mt-6 font-bold">{member.name}</h2>
                            {member.batch && <p className="mt-2">Batch {member.batch}</p>}
                            {(member.github || member.linkedin) && (
                                <div className="mt-5 flex items-center justify-center gap-3 text-sm font-medium">
                                    {member.github && (
                                        <Link
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${member.name}'s GitHub profile`}
                                        >
                                            <FaGithub aria-hidden="true" size={20} />
                                        </Link>
                                    )}
                                    {member.github && member.linkedin && <span className="text-neutral-300">/</span>}
                                    {member.linkedin && (
                                        <Link
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${member.name}'s LinkedIn profile`}
                                        >
                                            <FaLinkedinIn aria-hidden="true" size={20} />
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}