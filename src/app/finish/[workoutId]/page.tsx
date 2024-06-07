import { pacifico } from "@/app/fonts/default";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zenitica Finish",
  description: "The Workout app. Finish Workout Page.",
};

type FinishProps = {
  params: {
    workoutId: string;
  };
};

const RunWorkoutPage: React.FC<FinishProps> = async ({
  params: { workoutId },
}) => {

  return (
    <main className="bg-yoga-o flex min-h-screen flex-col gap-10 items-center justify-start p-7 w-screen max-w-[400px]">
      <div
        className={
          "text-6xl text-center text-gray-700 leading-relaxed h-fit " +
          pacifico.className
        }
      >
        Finished !
      </div>
      <div className="text-3xl p-3 text-center">
        You  have finish a full workout. Congrats <FontAwesomeIcon icon={faFire} className="w-[20px] text-rose-600"/> 
      </div>
    </main>
  );
};

export default RunWorkoutPage;
