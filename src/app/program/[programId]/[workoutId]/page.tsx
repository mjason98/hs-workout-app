import { sdk } from "@/lib/client";
import Link from "next/link";
import { pacifico } from "@/app/fonts/default";
import Image from "next/image";

type WorkoutPageProps = {
  params: {
    workoutId: string;
  };
};

const ArticlePage: React.FC<WorkoutPageProps> = async ({
  params: { workoutId },
}) => {
  const { data } = await sdk.Workout({ id: workoutId });

  const beginC = (
    <Image
      src={"/path1.png"}
      width="200"
      height="200"
      alt=""
      className="w-[40px]"
    />
  );
  const middleC = (
    <Image
      src={"/path4.png"}
      width="200"
      height="200"
      alt=""
      className="w-[40px]"
    />
  );
  const endC = (
    <Image
      src={"/path2.png"}
      width="200"
      height="200"
      alt=""
      className="w-[40px]"
    />
  );

  return (
    <main className="bg-yoga-o flex min-h-screen flex-col gap-10 items-center justify-start p-7 w-screen max-w-[400px]">
      <div
        className={
          "text-6xl text-center text-gray-700 leading-relaxed h-fit " +
          pacifico.className
        }
      >
        {data.workout?.name}
      </div>
      <Link  href={`/run/${workoutId}`} className="flex items-center justify-center  hover:bg-green-200 hover:text-green-500 hover:border-green-500 text-green-700 border-b-8 border-green-700 text-3xl bg-green-300 p-5 rounded-full w-[100px] h-[100px]">
        Start
      </Link>

      <div className={"text-4xl text-blue-900 " + pacifico.className}>
        Exercises
      </div>
      <div className="flex flex-col items-center justify-start w-full">
        {data.workout?.exercises.map((e, index) => {
          return (
            <div
              key={e.id}
              className="flex flex-row w-full gap-5 items-center justify-between"
            >
              {index == 0
                ? beginC
                : index + 1 == data.workout?.exercises?.length
                ? endC
                : middleC}
              <Link
                className="flex flex-row items-center justify-between gap-3 bg-blue-200 text-blue-900 border-b-8 border-blue-400 p-3 w-full rounded-2xl text-2xl text-center"
                href={`/exercise/${e.id}`}
              >
                <div>{e.name}</div>
                <div>
                  {e.duration}m x {e.repetition}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ArticlePage;
