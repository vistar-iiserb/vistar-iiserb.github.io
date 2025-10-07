import React from "react";
import Image from "next/image";

const TalkSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-12 px-8 mb-12 mt-12 gap-24">
      <div className="bg-white">
        <h1 className="text-5xl font-bold tracking-tight mr-8 text-black">
          VISTAR presents: Student Interaction Session with{" "}
          <span className="text-blue-500">Dr. Udayan Kanade</span>
        </h1>
        <p className="font-sfregular text-sm mt-6 mr-8 text-gray-500">
          Join us for an exclusive opportunity to interact with Dr. Udayan Kanade, a Stanford alumnus and pioneer in computational science, parallel computing, and predictive modeling. Founder of Oneirix Labs, with over 20 years of experience and 30+ patents.
        </p>
        <p className="font-sfregular text-sm mt-4 mr-8 text-gray-500">
          <strong>Select Publications:</strong> IEEE ICPADS 2004, GSPx 2005, GECCO 1999, COMSOL Conference 2014.
        </p>
        <p className="font-sfregular text-sm mt-4 mr-8 text-gray-500">
          <strong>Why Attend?</strong> Gain insights from a global innovator bridging mathematical theory with real-world engineering.
        </p>
        <p className="font-sfregular text-sm mt-4 mr-8 text-gray-500">
          <strong>Date:</strong> 07 October 2025 (Tuesday)<br />
          <strong>Venue & Time:</strong> 3:00 PM Lecture Hall Complex (L2), IISERB<br />
          <strong>More about him:</strong>{" "}
          <a href="https://www.udayankanade.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            udayankanade.org
          </a>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/oneirix.jpeg"
          alt="Dr. Udayan Kanade"
          width={400}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default TalkSection;