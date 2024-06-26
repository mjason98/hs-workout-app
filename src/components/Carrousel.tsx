"use client";

import React from "react";
import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";
import ExerciseComponent from "./ExerciseComponent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Exercise } from "@/generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from 'next/navigation';

type CarrouseProps = {
  exercises: Exercise[];
  workoutId: string;
};

const getTime = (ex:Exercise) => {
  const newTime = (ex?.duration)?(ex?.duration):0;
  const newtimeFixed:number = newTime?newTime:0;
  const times = ex?.repetition || 0;

  return newtimeFixed*60*times;
}

const Carrousel: React.FC<CarrouseProps> = ({ exercises, workoutId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState(getTime(exercises[0]));
  const sliderRef = useRef<Slider | null>(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const prevTimeLeftFixed = prevTimeLeft?prevTimeLeft:0;
        if (prevTimeLeftFixed <= 1) {
          if (currentSlide < exercises.length - 1) {
            if (sliderRef.current) {
              sliderRef.current.slickGoTo(currentSlide + 1);
            }
            setCurrentSlide(currentSlide+1);
          } else {
            // finish
            router.push(`/finish/${workoutId}`);
          }

          return getTime(exercises[currentSlide + 1]);
        }
        return prevTimeLeftFixed - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  },);


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <div
        style={{
          width: "300px",
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {exercises.map((e, index) => {
            return (
              <ExerciseComponent
                key={index}
                name={e.name || ""}
                image={e.image?.url || ""}
                duration={e.duration || 0}
                repetition={e.repetition || 0}
                current={currentSlide}
                index={index}
              />
            );
          })}
        </Slider>
        <div className="flex flex-col p-1 text-center mt-7 items-center">
          <div className="flex flex-row items-center justify-between w-[80%] text-center mt-4 text-6xl bg-blue-100 rounded-xl py-6 px-5 text-blue-600">
            <FontAwesomeIcon icon={faClock} />  <div>{Math.floor(timeLeft / 60)}:{timeLeft % 60}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
