import React from "react";
import Image from "next/image";
import Link from "next/link";
import myPhoto from "../public/Anas ZENAGUI V1.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a dedicated software engineer with experience in DevOps, cloud computing, and web development. I work with various technologies across the frontend and backend to build efficient and scalable solutions. My focus is on creating innovative applications and ensuring seamless integration of modern technologies.
          </p>
          <p className="py-2 text-gray-600">
            With a strong foundation in problem-solving and a passion for continuous learning, I am committed to leveraging my skills to deliver impactful results. From developing user-friendly interfaces to designing robust backend systems, I strive to contribute meaningfully to every project I undertake.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={myPhoto}
            className="rounded-xl"
            alt="Anas Zenagui - Software Engineer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
