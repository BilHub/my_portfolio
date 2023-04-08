import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Python from "../public/assets/skills/python.png";
import Postgresql from "../public/assets/skills/postgresql.png";
import Typescript from "../public/assets/skills/typescript.png";
import Pytest from "../public/assets/skills/pytest.png";
import Jest from "../public/assets/skills/jest.png";
import Nginx from "../public/assets/skills/nginx.png";
import Gunicorn from "../public/assets/skills/gunicorn.png";
import Docker from "../public/assets/skills/docker.webp";
import AWS from "../public/assets/skills/aws.png";
import Redis from "../public/assets/skills/redis.png";
import Celery from "../public/assets/skills/celery.png";
import Jquery from "../public/assets/skills/jquery.webp";
import Bootstrap from "../public/assets/skills/bootstrap.png";
import MaterialUI from "../public/assets/skills/materialUI.png";
import django_DRF from "../public/assets/skills/django_DRF.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 md:my-16 lg:my-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
        <p className="text-3xl tracking-widest uppercase text-[#1b74e4] mb-10">
          Skills
        </p>
        <h2 className="py-4">What I&apos;ve Used</h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 justify-center items-center">
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-2 justify-center items-center">
              <div className="m-auto">
                <Image src={Python} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="h-[90px] shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative parent-div">
            <div className="absolute inset-0">
              <Image
                src={django_DRF}
                layout="fill"
                objectFit="object-fit"
                alt="/"
                className="rounded rounded-xl"
              />
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-2 justify-center items-center">
              <div className="m-auto">
                <Image src={Postgresql} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Postgresql</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Pytest} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Pytest</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Celery} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Celery</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Typescript} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="70px" height="80p70pxx" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Jest} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Jest</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Bootstrap} width="80px" height="80px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MaterialUI} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>MaterialUI</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Jquery} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Jquery</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Docker} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>docker</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={AWS} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Redis} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Redis</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Gunicorn} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Gunicorn</h3>
              </div>
            </div>
          </div>
          <div className="px-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Nginx} width="70px" height="70px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl">
                <h3>Nginx</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
