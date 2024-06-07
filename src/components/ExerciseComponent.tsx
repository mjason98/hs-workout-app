import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

type ExerciseCProps = {
  name: string;
  image: string;
  duration: number;
  repetition: number;
  current: number;
  index: number;
};

const ExerciseComponent: React.FC<ExerciseCProps> = ({
  name,
  image,
  duration,
  repetition,
  current,
  index,
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-3">
      <div className="flex flex-col gap-10 items-center justify-center rounded-xl border-4 border-gray-300 bg-white py-5 px-2 w-full">
        <div className="text-3xl">{name}</div>
        <Image
          priority
          className="rounded-xl h-[150px]"
          src={image}
          width="600"
          height="600"
          alt="ex"
        />
        {current > index && (
          <div className="text-xl bg-gray-200 rounded-xl p-3 text-gray-400">
            {duration}m x {repetition}
          </div>
        )}
        {current < index && (
          <div className="text-xl bg-amber-400 rounded-xl p-3 text-amber-700">
            {duration}m x {repetition}
          </div>
        )}
        {current == index && (
          <div className="flex flex-row gap-3 text-center items-center text-xl bg-green-400 rounded-xl p-3 text-green-700">
            <FontAwesomeIcon icon={faPlay} />
            {duration}m x {repetition}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseComponent;
