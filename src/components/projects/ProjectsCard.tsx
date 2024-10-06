import React from "react";

interface ProjectsCardProps {
  image: string;
  title: string;
  category: string;
  link: string;
}

const ProjectsCard: React.FunctionComponent<ProjectsCardProps> = ({ image, title, category, link }) => {
  return (
    <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800">
      <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group">
        <img
          className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt="ImageOne"
        />
        <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-green-600 via-green-600 to-green-200 opacity-20"></div>
      </div>
      <a 
        href={link}
        target="_blank"
        rel="noreferrer"
        className="font-titleFont text-lg font-semibold text-[#ccc] hover:text-designColor">
        {title}
      </a>
      <p className="text-base text-gray-400 mt-2">{category}</p>
    </div>
  );
};

export default ProjectsCard;
