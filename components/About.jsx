import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-3xl tracking-widest text-[#1b74e4]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As a full stack web developer, I possess a strong understanding of
            both the back-end and front-end of web development.
          </p>
          <p className="py-2 text-gray-600">
            I am experienced in developing and deploying web applications and
            Restful APIs. I worked on vriety on of projects mainly with
            Python/Django on Backend and React/Next JS on Frontend.
          </p>
          <p className="py-2 text-gray-600">
            My proficiency in Django templates and HTMX allows me to develop
            server-side templates that are dynamic and responsive, while also
            leveraging the power of HTMX to create efficient and performant web
            applications. I also have extensive experience with Django Rest
            Framework with postgresql, enabling me to build RESTful APIs that
            are secure and scalable.
          </p>
          <p className="py-2 text-gray-600">
            On the front-end, my expertise in React JS, Next JS, and TypeScript
            allows me to create dynamic and responsive user interfaces that are
            both user-friendly and aesthetically pleasing. I am also proficient
            in CSS frameworks such as Tailwind CSS and Bootstrap, which enables
            me to build web applications that are both visually appealing and
            efficient.
          </p>
          <p className="py-2 text-gray-600">
            I am comfortable working in a team environment and possess excellent
            communication skills that allow me to collaborate effectively with
            other developers, designers, and stakeholders.
          </p>
          <p className="py-2 text-gray-600">
            I am always eager to learn new technologies and stay up-to-date with
            the latest trends in web development, in order to deliver
            cutting-edge solutions that meet the needs of my clients.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className=" relative w-full h-[400px] m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            className="rounded-xl"
            alt="/"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
