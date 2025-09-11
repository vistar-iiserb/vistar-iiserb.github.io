import classNames from "classnames";
import React from "react";

type VideoSectionProps = {
  /** YouTube video id (e.g. 'Q8CfBLirLyA') */
  videoId?: string;
  /** Extra query params after the id (no leading '?') */
  params?: string;
  /** iframe title */
  title?: string;
  className?: string;
};

const VideoSection = ({
  videoId = "Q8CfBLirLyA",
  params = "si=ynJGFN5FRxp6zjFt",
  title = "AI in MedTech - A conversation with Dr. Vinay Singh",
  className = "",
}: VideoSectionProps) => {
  const embedSrc = `https://www.youtube.com/embed/${videoId}${params ? `?${params}` : ""}`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}${params ? `&${params}` : ""}`;

  return (
    <>
      <div
        className={classNames(
          "grid grid-cols-1 md:grid-cols-2 py-12 px-8 mb-12 mt-12 gap-24 ",
          className
        )}
      >
        <div className={classNames("bg-white")}>
          <h1 className=" text-5xl font-bold font-bold tracking-tight mr-8 text-black ">
            Watch our latest Podcast on{" "}
            <span className="text-blue-500">AI in MedTech.</span>
          </h1>
          <p className="font-sfregular text-sm mt-6  mr-8 text-gray-500">
            Join VISTAR&apos;s AI Cell for a conversation with Dr. Vinay Singh —
            a medtech entrepreneur and educator with 25+ years in biotechnology
            and bioinformatics. As CEO of Orange Neurosciences he’s building
            digital platforms for cognitive assessment and therapy, and has
            founded multiple ventures across pharma, telemedicine, and
            healthcare innovation.
          </p>

          <a target="_blank" rel="noopener noreferrer" href={watchUrl}>
            <button className="fadeUp mt-8 group shadow-lg hover:bg-blue-700 transition-all rounded-xl text-white bg-black px-4 py-2 font-sfregular">
              <span className="tracking-tight flex gap-2 items-center">
                Watch here
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16"></path>
                  <path d="M2 12H22"></path>
                </svg>
              </span>
            </button>
          </a>
        </div>

        <a href={watchUrl}>
          <div
            className="rounded-xl w-full shadow-lg  aspect-[16/9]"
            style={{ width: "100%", height: "100%" }}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <iframe
                allowFullScreen
                className="rounded-xl autoplay border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title={title}
                width="100%"
                height="100%"
                src={embedSrc}
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default VideoSection;
