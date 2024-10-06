import React, { useState, useEffect } from "react";
import TextTransition, { presets } from 'react-text-transition';
import bannerImgJpg from "../../assets/CV.jpg";
import bannerImgWebp from "../../assets/CV.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileArrowDown, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";

interface LeftProps {
  handleContactClick: () => void; // Declare the type of handleContactClick
}

const Left: React.FunctionComponent<LeftProps> = ({ handleContactClick }) => {
  const roles = [
    "Front-end Developer",
    "Back-end Developer",
    "Full-stack Developer",
    "Web Developer",
    "IT Helpdesk",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((index) => (index + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [roles.length]);

  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl overflow-y-scroll scrollbar-none shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <picture>
          <source srcSet={bannerImgWebp} type="image/webp" />
          <source srcSet={bannerImgJpg} type="image/jpeg" />
          <img
            className="w-full h-full object-contain md:object-scale-down rounded-2xl"
            src={bannerImgJpg} // Fallback for browsers that don't support <picture>
            loading="eager"
            alt="bannerImage"
          />
        </picture>
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-3xl font-semibold">
            Nguyen Phuc Khang
          </h1>
          <p className="text-base font-medium text-designColor tracking-wide">
            {/* Display the current role with animation */}
            <TextTransition springConfig={presets.default}>
              {roles[currentRoleIndex]}
            </TextTransition>
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a
              href="https://github.com/JavaKhangNguyen"
              target="_blank"
              rel="noreferrer"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/ngpkhang"
              target="_blank"
              rel="noreferrer"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://facebook.com/JavaKhangNguyen"
              target="_blank"
              rel="noreferrer"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
        <div className="flex h-14 mt-[-20px]">
          <a
            href="/CV_NguyenPhucKhang.pdf"
            download="CV_NguyenPhucKhang.pdf"
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              <span className="text-lg">Download CV</span>
              <FontAwesomeIcon icon={faFileArrowDown} bounce />
            </button>
          </a>
          <button
            className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300"
            onClick={handleContactClick}
          >
            <span className="text-lg">Contact me</span>
            <FontAwesomeIcon icon={faPaperPlane} beatFade />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;