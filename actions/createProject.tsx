"use server";

import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function createProject(formData: FormData) : Promise<void> {
  const user = await currentUser();
  const userId = user?.id;

  const project = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    url: formData.get("url") as string,
    userId: userId,
  }
  console.log(project);

  const newProjectId = await db.insert(projects).values(project).returning({insertedId: projects.id});
  console.log(`New project created with id: ${newProjectId[0].insertedId}`);
   newProjectId;
   return;
}
