import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  backgroundImg,
  frontTech,
  backTech,
  otherTech,
  projectUrl,
}) => {
  return (
    <div className="relative flex items-center justify-center h-[500px] w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-black hover:opacity-90">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        layout="fill"
        objectFit="object-fit"
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl">
        <h3 className="text-4xl text-white tracking-wider text-center mb-10">
          {title}
        </h3>
        <p className="text-white text-center">{backTech}</p>
        <p className="text-white text-center">{frontTech}</p>
        <p className="text-white text-center">{otherTech}</p>
        <Link href={projectUrl}>
          <p className="mt-10 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
