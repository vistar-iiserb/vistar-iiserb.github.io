import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiC,
  SiClerk,
  SiContentful,
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiJupyter,
  SiMongodb,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiPytorch,
  SiSanity,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { VscGithubInverted, VscPiano } from "react-icons/vsc";

export default function Skills() {
  return (
    <div className="md:w-[50%] border-gray-200  overflow-hidden relative text-gray-800  shadow-md border rounded-[24px]  p-6 md:p-12 bg-gray-100  ">
      <h1 className={`  text-3xl md:text-5xl `}>
        My <span className={` font-bold  `}> Skills.</span>{" "}
      </h1>
      <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-2xl transition duration-1000">
        <div className="">
          <h1 className="mb-3">Languages</h1>
          <div className="mt-4 flex gap-2 items-center">
            <ToolTipHover Icon={FaHtml5} color="#E34F26" tooltiptext="HTML5" />
            <ToolTipHover Icon={FaCss3} color="#1572B6" tooltiptext="CSS3" />
            <ToolTipHover
              Icon={SiJavascript}
              color="#F7DF1E"
              tooltiptext="JavaScript"
            />
            <ToolTipHover
              Icon={SiTypescript}
              color="#3178C6"
              tooltiptext="TypeScript"
            />
            <ToolTipHover Icon={SiC} color="#A8B9CC" tooltiptext="C" />
            <ToolTipHover
              Icon={SiPython}
              color="#3776AB"
              tooltiptext="Python"
            />
          </div>
        </div>

        <div>
          <h1>Frameworks</h1>
          <div className="mt-4 flex gap-2 items-center">
            <ToolTipHover Icon={FaReact} color="#61DAFB" tooltiptext="React" />
            <ToolTipHover
              Icon={RiNextjsFill}
              color="#ffffff"
              tooltiptext="Next.js"
            />
            <ToolTipHover
              Icon={SiNodedotjs}
              color="#339933"
              tooltiptext="Node.js"
            />
            <ToolTipHover
              Icon={SiExpress}
              color="#339933"
              tooltiptext="Express.js"
            />
            <ToolTipHover
              Icon={SiPytorch}
              color="#EE4C2C"
              tooltiptext="PyTorch"
            />
          </div>
        </div>

        <div>
          <h1 className="">Tools</h1>
          <div className="mt-4 flex gap-2 items-center">
            <ToolTipHover
              Icon={RiTailwindCssFill}
              color="#06B6D4"
              tooltiptext="Tailwind CSS"
            />
            <ToolTipHover
              Icon={SiShadcnui}
              color="gray"
              tooltiptext="Shadcn UI"
            />
            <ToolTipHover
              Icon={SiSanity}
              color="#F03E2F"
              tooltiptext="Sanity"
            />
            <ToolTipHover
              Icon={SiPrisma}
              color="#2D3748"
              tooltiptext="Prisma"
            />
            <ToolTipHover Icon={SiClerk} color="#6B46C1" tooltiptext="Clerk" />
            <ToolTipHover
              Icon={SiContentful}
              color="#2478CC"
              tooltiptext="Contentful"
            />
            <ToolTipHover
              Icon={SiFastapi}
              color="#009688"
              tooltiptext="FastAPI"
            />
            <ToolTipHover
              Icon={VscGithubInverted}
              color="white"
              tooltiptext="GitHub"
            />
            <ToolTipHover
              Icon={SiJupyter}
              color="#F37626"
              tooltiptext="Jupyter"
            />
          </div>
        </div>

        <div>
          <h1>Databases</h1>
          <div className="mt-4 flex gap-2 items-center">
            <ToolTipHover
              Icon={SiMongodb}
              color="#47A248"
              tooltiptext="MongoDB"
            />
            <ToolTipHover
              Icon={RiSupabaseFill}
              color="#3ECF8E"
              tooltiptext="Supabase"
            />
            <ToolTipHover
              Icon={IoLogoFirebase}
              color="#FFCA28"
              tooltiptext="Firebase"
            />
            <ToolTipHover Icon={GrMysql} color="#4479A1" tooltiptext="MySQL" />
          </div>
        </div>
      </ul>

      <h1 className={`silverregular text-3xl md:text-5xl text-gray-800  mt-24`}>
        My{" "}
        <span className={`silveritalic font-bold   `}> Music.</span>{" "}
      </h1>

      <iframe
        src="https://open.spotify.com/embed/playlist/3VPxGpXjeBe4tuHexX5qQS?utm_source=generator&theme=0"
        width="100%"
        height="152"
        className="mt-4 rounded-[24px] shadow-md"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">

      </iframe>
      <div className="absolute top-0 right-0 md:bottom-0 md:left-0 blur-[150px] bg-gray-800  w-[200px] h-[200px]" />

    </div>
  );
}

const ToolTipHover = ({ Icon, color, tooltiptext }: any) => {
  return (
    <div className="relative flex items-center">
      <Icon className=" transition-all  duration-200" style={{ color }} />
      <div className="tooltiptext absolute bottom-full mb-2 px-2 py-1 rounded bg-black text-white text-sm opacity-0 transition-opacity duration-200">
        {tooltiptext}
      </div>
      <style jsx>{`
        div:hover .tooltiptext {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
