import React from "react";

interface ResumeTitleProps {
  icon: JSX.Element;
  title: string;
}

const ResumeTitle: React.FunctionComponent<ResumeTitleProps> = ({ icon, title }) => {
  return (
    <h1 className="text-lg text-gray-300 font-semibold flex items-center gap-2 py-3 border-b-[1px] border-b-zinc-800">
      <span className="text-designColor text-2xl">{icon}</span>
      {title}
    </h1>
  );
};

export default ResumeTitle;
