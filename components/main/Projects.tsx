import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

const projectData = [
  {
    src: "/crypto-currency.png",
    title: "Crypto Currency converter",
    description: "Experience real-time cryptocurrency conversions effortlessly with our converter. Utilizing the CoinGecko API, we provide instant calculations for the top 100 digital currencies in leading fiat currencies. Stay informed and navigate crypto markets seamlessly with our user-friendly platform.",
  },
  {
    src: "/resume-builder.png",
    title: "Resume Builder website",
    description: "Build your resume swiftly with our React and Redux-powered website. Choose from diverse themes, input your details effortlessly, and download your professional resume within minutes. Elevate your job applications effortlessly!",
  },
  {
    src: "/virtual-mouse.png",
    title: "Virtual Mouse",
    description: "Experience a hands-free digital interaction with our Python and OpenCV-powered virtual mouse. Control your computer effortlessly through webcam-detected hand gestures, providing precision and convenience in a seamless computing experience. Redefine your digital engagement with our responsive virtual mouse.",
  },
  {
    src: "/speech-synthesis.png",
    title: "Text to Audio",
    description: "Unleash the power of speech with our Text-to-Audio Converter. Powered by Google Speech Synthesis API and ReactJS, effortlessly transform written text into spoken words. Experience a seamless and user-friendly platform for accessibility, language learning, or creative expression. Embrace the future of communication with our innovative converter.",
  },
  {
    src: "/SpaceWebsite.png",
    title: "NextJS Portfolio",
    description: "Explore my portfolio, a stylish creation using Next.js and Framer Motion. Seamlessly navigate and enjoy eye-catching animations. Share your favorite highlights effortlessly with npm packages like next-share. Welcome to a future-ready digital experience!",
  },
  {
    src: "/rightfully.jpg",
    title: "2D game with AI voice assistant",
    description: "Dive into an interactive 2D gaming experience powered by Unity and enhanced with a smart AI voice assistant implemented in Python. Immerse yourself in a seamless blend of captivating gameplay and intuitive voice interactions, pushing the boundaries of gaming innovation. Welcome to a world where Unity and Python come together to redefine your gaming adventure.",
  },
];

export default Projects;
