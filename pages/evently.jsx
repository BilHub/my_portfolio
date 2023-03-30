import Image from "next/image";
import React from "react";
import evently_home from "../public/assets/projects/evently/evently_home.png";
import evently_signIn from "/public/assets/projects/evently/evently_signIn.png";
import evently_dashboard from "/public/assets/projects/evently/evently_dashboard.png";
import evently_accounts from "/public/assets/projects/evently/evently_accounts.png";
import evently_profile from "/public/assets/projects/evently/evently_profile.png";
import evently_activities from "/public/assets/projects/evently/evently_activities.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Slider from "../components/Slider";

const evently = () => {
  const slides = [
    {
      link: evently_home,
      title: "image 4",
    },
    {
      link: evently_signIn,
      title: "image 3",
    },
    {
      link: evently_dashboard,
      title: "image 4",
    },
    {
      link: evently_accounts,
      title: "image 2",
    },
    {
      link: evently_profile,
      title: "image 4",
    },
    {
      link: evently_activities,
      title: "image 1",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="fill"
          src={evently_home}
          alt="/"
        />
        <div className="absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Evently</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="mb-5">Overview</h2>
          <p>
            Introducing Eventy, a powerful website platform designed to simplify
            event organization. With this comprehensive solution, you can
            effortlessly manage members, billing, organizing, and reporting for
            all your events. The user-friendly platform allows you to
            efficiently track attendees, manage transactions, and maintain event
            records in a centralized location. Additionally, the calendar
            feature streamlines the scheduling process, making it easy to
            coordinate and plan events with ease.
          </p>
          <p>
            The app was built using the Django web framework, I integrated MySQL
            as the primary database management system. Additionally, I
            incorporated Celery and Redis for task management.
          </p>
          <p>
            On the front side, I utilized jQuery and Bootstrap, two popular
            front-end frameworks. I utilized Docker to containerize the app, and
            Git to manage the app&apos;s development and version control.
          </p>
          <p>
            On deployement, to optimize the app&apos;s performance and
            scalability, I integrated Nginx as the web server and Gunicorn as
            the WSGI HTTP server.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-xl underline">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> Django
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MySQL
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Celery
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redis
              </p>
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> Jquery
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Docker
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Nginx
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Gunicorn
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GIT
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80vh] relative">
        <Slider slides={slides} />
      </div>
      <Link href="/#projects">
        <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  );
};

export default evently;
