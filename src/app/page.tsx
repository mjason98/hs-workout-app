import Image from "next/image";
import { sdk } from "@/lib/client";

const Home = async () => {
  const {data} = await sdk.Exercises()

  console.log(data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      aa aa
    </main>
  );
}

export default Home;
