/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../public/imgHero.png";
import styles from "./Main.module.css"; // Import the new CSS module

const Main = () => {
  return (
    <div id="home" className="w-full min-h-screen text-center">
      <div className="max-w-screen-2xl mx-auto p-4 md:p-32 flex flex-col md:flex-row items-center">
        <div className={`${styles.imageContainer} md:flex-1`}>
          <Image src={logo} className={styles.heroImg} alt="Hero Image" width={500} height={500} />
        </div>
        <div className={`${styles.contentContainer} md:flex-1 md:ml-8 mt-8 md:mt-0`}>
          <p className="uppercase text-2xl sm:text-sm md:text-2xl text-gray-600">
            LET'S Go
          </p>
          <h1 className="py-2 sm:py-4 text-gray-700 text-xl sm:text-2xl md:text-5xl">
            Hi, I'm <span className="text-[#5651e5]">Anas ZENAGUI</span>
          </h1>
          <h1 className="py-2 text-gray-700 text-lg sm:text-xl md:text-4xl">A Software Engineering Student</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] mx-auto text-sm sm:text-base md:text-3xl">
            Unleashing the Power of Code with Creativity and Precision.
          </p>
          <div className="flex items-center justify-center md:justify-start max-w-[400px] md:pl-16 mx-auto  py-4">
            <a
              href="https://www.linkedin.com/in/anas-zenagui/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/ZenaguiAnas"
              target="_blank"
              rel="noreferrer"
              className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300 ml-4"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/znagui_anass"
              target="_blank"
              rel="noreferrer"
              className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300 ml-4"
            >
              <FaTwitter />
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300 ml-4">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://github.com/ZenaguiAnas">
              <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300 ml-4">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
