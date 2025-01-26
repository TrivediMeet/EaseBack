import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import NewProjBtn from "@/components/new-proj";
import { eq } from "drizzle-orm";
import ProjectsList from "./projects-list";

export default async function Page() {
  const { userId } = await auth();
  
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const userProjects = await db.select().from(projects).where(eq(projects.userId, userId));

  return (
    <div>
    <div className="flex items-center justify-center gap-3">
      <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
      <NewProjBtn />
    </div><ProjectsList projects={userProjects} /></div>
  );
}
