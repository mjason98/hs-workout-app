import Image from "next/image";
import { hygraphClient } from "@/lib/client";
import { GET_PROJECTS } from "@/lib/queries";
import { PersonalProject } from "@/lib/types";

const Home = async () => {
  const { personalProjects } = await hygraphClient.request<{
    personalProjects: PersonalProject[];
  }>(GET_PROJECTS);

  console.log(personalProjects)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      aa aa
    </main>
  );
}

export default Home;
