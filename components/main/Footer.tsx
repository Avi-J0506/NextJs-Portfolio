import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 justify-center items-center">
        <div className="md:flex justify-center items-center">
          <div className="mb-6 md:mb-0 justify-center items-center">
            <Link
              href={'https://www.linkedin.com/in/abhinandan-jha-4477a9231'}
              className="flex items-center justify-center"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Abhinandan Jha
              </span>
            </Link>
            <p className="text-gray-300 mt-2">
              Hello! I'm Abhinandan Jha, a passionate third-year computer
              science student at SRM University Chennai. With a strong
              foundation in full-stack web development, I am deeply intrigued by
              the realms of Artificial Intelligence and Machine Learning. My
              goal is to be a problem solver in the ever-evolving world of
              technology, leveraging my skills to create innovative solutions.
              Excited about the endless possibilities at the intersection of
              code and creativity, I am committed to continuous learning and
              contributing meaningfully to the tech community.
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Abhinandan™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
