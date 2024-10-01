import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-[300px] sm:h-[250px] md:h-[350px] w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] transition duration-300 ease-in-out">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="Anas Zenagui - Software Engineering Student"
        layout="fill"
        objectFit="cover"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h3 className="text-lg sm:text-base md:text-2xl text-white tracking-wider">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-sm sm:text-xs md:text-base text-white">
          {tech}
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-2 sm:py-1 md:py-3 rounded-lg bg-white text-gray-700 font-bold text-sm sm:text-xs md:text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
