import Link from "next/link";
import { pacifico } from "./fonts/default";

const Home = () => {
  return (
    <main className="bg-yoga-o flex min-h-screen flex-col gap-10 items-center justify-center p-7 w-screen max-w-[400px]">
      <div className={"text-8xl text-gray-800 " + pacifico.className}>
        Zenitica
      </div>
      <Link
        href="/program"
        className="bg-amber-300 hover:bg-amber-400 hover:text-amber-100 text-amber-700 font-bold py-2 px-4 border-b-8 border-amber-700 hover:border-amber-600 rounded-lg text-2xl"
      >
        {" "}
        Explore our Programs
      </Link>
    </main>
  );
};

export default Home;
