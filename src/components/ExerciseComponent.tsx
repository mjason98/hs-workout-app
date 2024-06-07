import React from "react";
import Image from "next/image";

type ExerciseCProps = {
  name: string;
  image: string;
  duration: number;
  repetition: number;
};

const ExerciseComponent: React.FC<ExerciseCProps> = ({
  name,
  image,
  duration,
  repetition,
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-3">
      <div className="flex flex-col gap-10 items-center justify-center rounded-xl border-4 border-gray-300 bg-white py-5 px-2 w-full">
        <div className="text-3xl">{name}</div>
        <Image
          priority
          className="rounded-xl"
          src={image}
          width="600"
          height="600"
          alt="ex"
        />
        <div className="text-xl bg-amber-500 rounded-xl p-3 text-amber-800">
          {duration}m x {repetition}
        </div>
      </div>
    </div>
  );
};

export default ExerciseComponent;
