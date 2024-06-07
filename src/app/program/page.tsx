import { sdk } from "@/lib/client";
import Link from "next/link";
import { pacifico } from "../fonts/default";

const PlansPage = async () => {
  const { data } = await sdk.Programs();

  return (
    <main className="bg-yoga-o flex min-h-screen flex-col gap-10 items-center justify-start p-7 w-screen max-w-[400px]">
      <div className={"text-6xl text-gray-700 " + pacifico.className}>
        {" "}
        Programs{" "}
      </div>
      <div className="flex flex-col items-center justify-center gap-7 p-3 w-full overflow-y-auto h-left">
        {data.programs.map((p) => {
          return (
            <Link
              key={p.id}
              href={`/program/${p.id}`}
              className="button-with-bg flex flex-col items-center justify-begin min-h-[200px]"
              style={{ backgroundImage: `url(${p.image?.url})` }}
            >
              <div className="bg-gray-800 text-gray-100 text-3xl p-4 rounded-xl">{p.name}</div>
              
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default PlansPage;
