import Image from "next/image";
import Link from "next/link";
import React from "react";
import sms_homePage from "../public/assets/projects/sms/sms_homePage.png";
import evently_home from "../public/assets/projects/evently/evently_home.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-3xl tracking-widest uppercase text-[#1b74e4]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        {/* <div className="grid md:grid-cols-2 gap-8"> */}
        <div className="grid gap-20">
          <ProjectItem
            title="Allin1School"
            backgroundImg={sms_homePage}
            projectUrl="/allin1school"
            frontTech="React JS | Tailwind css"
            backTech="Django Rest Frmaework | Postgresql | Celery | Redis"
            otherTech="GIT | Docker "
          />
          <ProjectItem
            title="Evently"
            backgroundImg={evently_home}
            projectUrl="/evently"
            frontTech="Jquery | Bootstrap"
            backTech="Django | Mysql | Celery | Redis"
            otherTech="GIT | Docker | Nginx | Gunicorn | AWS "
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
