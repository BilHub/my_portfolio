import Image from "next/image";
import sms_homePage from "../public/assets/projects/sms/sms_homePage.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Slider from "../components/Slider";

const allin1school = () => {
  const slides = [
    {
      link: "/../public/assets/projects/sms/sms_homePage.png",
      title: "image 4",
    },
    {
      link: "/../public/assets/projects/sms/sms_dashboard.png",
      title: "image 3",
    },
    {
      link: "/../public/assets/projects/sms/sms_users.png",
      title: "image 4",
    },
    {
      link: "/../public/assets/projects/sms/sms_courses.png",
      title: "image 2",
    },
    {
      link: "/../public/assets/projects/sms/sms_schedule.png",
      title: "image 4",
    },
    {
      link: "/../public/assets/projects/sms/sms_attendance.png",
      title: "image 1",
    },
    {
      link: "/../public/assets/projects/sms/sms_finance.png",
      title: "image 4",
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
          src={sms_homePage}
          alt="/"
        />
        <div className="absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Allin1School</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-5 py-8">
        <div className="col-span-4">
          <h2 className="mb-5">Overview</h2>
          <p>
            Allin1School is a comprehensive platform designed to facilitate the
            management of various private schools. It offers a range of features
            to effectively handle and streamline workflow processes, including
            user management for students, teachers, parents, and staff,
            attendance and finance tracking, as well as course management for
            all programs offered by the school.
          </p>
          <p>
            I created this app using a range of powerful tools and technologies
            to deliver an outstanding user experience. The backend of the app
            was built using Django Rest Framework, a robust and scalable web
            framework that makes it easy to build APIs quickly and efficiently.
            To store data, I used Postgresql, a powerful relational database
            that offers excellent performance and reliability.
          </p>
          <p>
            To ensure that the app was of the highest quality, I used Pytest, a
            testing framework that allows for easy and thorough testing of code.
            I also implemented Celery and Redis, two powerful tools that provide
            a distributed task queue and in-memory data structure store,
            respectively. These tools helped me to improve the app&apos;s
            performance and scalability, making it capable of handling large
            volumes of traffic with ease.
          </p>
          <p>
            The frontend of the app was developed using React JS and Tailwind
            CSS, two modern and cutting-edge technologies that provide an
            immersive and engaging user experience. To manage the code and
            version control, I used GIT, a powerful and flexible tool that
            provides excellent collaboration capabilities.
          </p>
          <p>
            To package the app, I used Docker, a platform that provides an easy
            and efficient way to containerize and deploy applications. To ensure
            that the app was highly available and scalable, I used Nginx as a
            reverse proxy server and Gunicorn as the web server. These
            technologies helped me to ensure that the app was always available
            and performing optimally.
          </p>
          <p>
            With all of these tools and technologies working together, I was
            able to create a powerful and robust app that provides an
            outstanding user experience and is highly scalable and performant.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-xl underline">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> Django Rest Frmaework
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Postgresql
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pytest
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Celery
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redis
              </p>
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind css
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
        <p className="underline cursor-pointer mb-10">Back</p>
      </Link>
    </div>
  );
};

export default allin1school;
