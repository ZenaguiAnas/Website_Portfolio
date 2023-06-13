import React from "react";
import Image from "next/image";
import Link from "next/link";
import myPhoto from "../public/anas.png";

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
            As a passionate software engineering student, I am driven by a deep
            fascination for problem-solving and an unwavering commitment to
            harnessing the potential of technology. With a particular affinity
            for the Java programming language, I strive to create innovative
            solutions that address real-world challenges. I constantly seek to
            integrate the latest advancements in information technology,
            leveraging its most cutting-edge features.
          </p>
          <p className="py-2 text-gray-600">
            My insatiable thirst for knowledge fuels my dedication to continuous
            learning and growth in this ever-evolving field. Embracing the
            endless possibilities that technology offers, I am excited to
            explore new horizons and contribute to the transformative power it
            brings to various industries. The thrill of overcoming obstacles
            through analytical thinking and logical reasoning has truly
            captivated me, making problem-solving an exhilarating journey that I
            wholeheartedly embrace.
          </p>
          <p className="py-2 text-gray-600">
            By combining my technical skills, passion for innovation, and a
            relentless pursuit of excellence, I am ready to embark on new
            ventures, collaborate with like-minded individuals, and make a
            meaningful impact in the world of software engineering.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={myPhoto} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
