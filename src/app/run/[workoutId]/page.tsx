import { sdk } from "@/lib/client";
import { pacifico } from "@/app/fonts/default";
import Carrousel from "@/components/Carrousel";
import { Exercise } from "@/generated/graphql";


type RunPageProps = {
  params: {
    workoutId: string;
  };
};

const RunWorkoutPage: React.FC<RunPageProps> = async ({
  params: { workoutId },
}) => {
  const { data } = await sdk.Workout({ id: workoutId });


  return (
    <main className="bg-yoga-o flex min-h-screen flex-col gap-10 items-center justify-start p-7 w-screen">
      <div
        className={
          "text-6xl text-center text-gray-700 leading-relaxed h-fit " +
          pacifico.className
        }
      >
        {data.workout?.name}
      </div>
      <Carrousel exercises={data.workout?.exercises as Exercise[] || []} />
    </main>
  );
};

export default RunWorkoutPage;
