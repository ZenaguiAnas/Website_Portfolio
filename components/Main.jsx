/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../public/Anas ZENAGUI - Website.png"; // Import the image
import styles from "./Main.module.css"; // Import the new CSS module
import { useEffect, useState } from "react"; // Import useEffect and useState

const Main = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showFadeIn, setShowFadeIn] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    // Add typewriter effect after a short delay
    const timer1 = setTimeout(() => {
      setShowTypewriter(true);
    }, 1000); // Delay in milliseconds (1 second)

    // Add fade-in effect after the typewriter effect is done
    const timer2 = setTimeout(() => {
      setShowFadeIn(true);
    }, 4000); // Total delay in milliseconds (4 seconds)

    // Hide the cursor after typing animation
    const timer3 = setTimeout(() => {
      setHideCursor(true);
    }, 3000); // Delay in milliseconds (3 seconds to match typewriter animation duration)

    return () => {
      clearTimeout(timer1); // Cleanup the first timer
      clearTimeout(timer2); // Cleanup the second timer
      clearTimeout(timer3); // Cleanup the third timer
    };
  }, []);

  return (
    <div id="home" className="w-full min-h-screen text-center">
      <div className="max-w-screen-2xl mx-auto  p-4 md:p-32 flex flex-col md:flex-row items-center">
        <div className={`${styles.imageContainer} md:flex-2 mt-20`}>
          <Image
            src={logo}
            className={styles.heroImg}
            alt="Anas Zenagui - Software Engineering Student"
            width={500}
            height={500}
          />
        </div>
        <div
          className={`${styles.contentContainer} md:flex-1 md:ml-8 mt-8 md:mt-0`}
        >
          <p className="uppercase text-2xl sm:text-sm md:text-2xl text-gray-600">
            LET'S Go
          </p>
          <h1
            className={`py-2 sm:py-4 text-gray-700 text-xl sm:text-2xl md:text-5xl ${
              showTypewriter ? styles.typewriter : ""
            } ${hideCursor ? styles.typewriterDone : ""}`}
          >
            Hi, I'm <span className="text-[#5651e5]">Anas ZENAGUI</span>
          </h1>
          <h1
            className={`py-2 text-gray-700 text-lg sm:text-xl md:text-4xl ${
              showFadeIn ? styles.fadeIn : ""
            }`}
          >
            A Software Engineering Student
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] mx-auto text-sm sm:text-base md:text-3xl">
            Unleashing the Power of Code with Creativity and Precision.
          </p>
          <div className="flex items-center justify-center md:justify-start max-w-[400px] md:pl-16 mx-auto py-4">
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
            <Link href='/cv.pdf' download='Anas_Zenagui_CV.pdf'>
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
