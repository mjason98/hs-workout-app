import { sdk } from "@/lib/client";
import Link from "next/link";
import { pacifico } from "@/app/fonts/default";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

type ExercisePageProps = {
  params: {
    exerciseId: string;
  };
};

const ExercisePage: React.FC<ExercisePageProps> = async ({
  params: { exerciseId },
}) => {
  const { data } = await sdk.Exercise({ id: exerciseId });

  return (
    <main className="bg-yoga-o flex min-h-screen flex-col gap-10 items-center justify-start p-7 w-screen max-w-[400px]">
      <div
        className={
          "text-6xl text-center text-gray-700 leading-relaxed h-fit " +
          pacifico.className
        }
      >
        {data.exercise?.name}
      </div>
      <Image
        src={data.exercise?.image?.url || ""}
        className="rounded-2xl border-4 border-gray-600"
        width={data.exercise?.image?.width || "300"}
        height={data.exercise?.image?.height || "300"}
        alt={data.exercise?.name + " image"}
      />
      <div className="text-lg bg-white border-4 rounded-2xl p-5">
        {data.exercise?.desc}
      </div>
      <div className="flex flex-row w-full items-center justify-center gap-6">
        <div className="text-xl rounded-xl border-4 border-amber-700 p-3 bg-amber-300 text-amber-700">
          {data.exercise?.duration} minutes x {data.exercise?.repetition}
        </div>
          <Link href={data.exercise?.videoUrl || "#"} ><FontAwesomeIcon icon={faYoutube} className="w-[80px] text-rose-500"/> </Link>
      </div>
    </main>
  );
};

export default ExercisePage;
