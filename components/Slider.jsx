import Image from "next/image";
import React, { useState } from "react";
import rightIcon from "../public/assets/slider/right.png";
import leftIcon from "../public/assets/slider/left.png";
import { AiTwotoneLeftCircle } from "react-icons/ai";

const Slider = ({ slides }) => {
  const [currentIndex, setCurentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurentIndex(slideIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurentIndex(newIndex);
  };
  const gotToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurentIndex(newIndex);
  };
  return (
    <div>
      <div className="h-[30vh] md:h-[65vh] w-full md:w-[65vw] absolute left-[50%] -translate-x-1/2 mt-10">
        <Image
          src={slides[currentIndex].link}
          alt="/"
          layout="fill"
          object-fit="cover"
        />
      </div>
      <div
        onClick={gotToNext}
        className="h-[25px] w-[25px] md:h-[50px] md:w-[50px] absolute right-0 top-[17vh] md:top-[30vh] -translate-x-[3vw] md:-translate-x-[10vw]"
      >
        <Image src={rightIcon} alt="/" layout="fill" object-fit="cover" />
      </div>
      <div
        onClick={goToPrevious}
        className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] absolute left-0 top-[17vh] md:top-[30vh] translate-x-[3vw] md:translate-x-[10vw]"
      >
        <Image src={leftIcon} alt="/" layout="fill" object-fit="cover" />
      </div>
      <div className="absolute bottom-0 left-[50%] flex -translate-y-[5vh] -translate-x-1/2 gap-5">
        {slides.map((slide, slideIndex) => {
          return (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              currentIndex={currentIndex}
            >
              <AiTwotoneLeftCircle />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
