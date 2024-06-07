import { sdk } from "@/lib/client";
import Link from "next/link";
import { pacifico } from "@/app/fonts/default";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zenitica Workout",
  description: "The Workout app. Workout Page.",
};

type PlanPageProps = {
  params: {
    programId: string;
  };
};

const WorkoutPage: React.FC<PlanPageProps> = async ({
  params: { programId },
}) => {
  const { data } = await sdk.Program({ id: programId });

  return (
    <main className="bg-yoga-o flex min-h-screen flex-col gap-10 items-center justify-start p-7 w-screen max-w-[400px]">
      <div
        className={
          "text-6xl text-center text-gray-700 leading-relaxed h-fit " +
          pacifico.className
        }
      >
        {data.program?.name}
      </div>
      <div className="flex flex-col items-center justify-start gap-7 p-3 w-full">
        {data.program?.workouts.map((w) => {
          return (
            <Link
              key={w.id}
              href={`/program/${programId}/${w.id}`}
              className="button-with-bg flex flex-col items-center justify-begin min-h-[150px] w-full"
              style={{ backgroundImage: `url(${w.image?.url})`, borderColor:`rgb(136, 19, 55)` }}
            >
              <div className="bg-rose-900 text-rose-50 text-2xl p-4 rounded-xl">{w.name}</div>
              
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default WorkoutPage;
