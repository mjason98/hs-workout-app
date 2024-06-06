// import { sdk } from "@/lib/client";
import Link from "next/link";

const PlansPage = async () => {
  const plans = [{name:'plan1', id:'a'}, {name:'plan2', id:'b'}]

  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-start p-10">
      <div className="text-6xl">Plans</div>
      <div className="flex flex-col gap-7 p-3 w-full">
        {plans.map((p)=>{
            return(<Link key={p.id} href={`/program/${p.id}`} className="p-4 bg-gray-300 rounded-lg" >{p.name} - image</Link>);
        })}
      </div>
    </main>
  );
}

export default PlansPage;
