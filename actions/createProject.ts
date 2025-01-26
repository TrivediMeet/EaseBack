import { db } from "@/db";
import { projects } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData): Promise<void> {
  const name = formData.get('name') as string;
  const url = formData.get('url') as string;
  const description = formData.get('description') as string;

  void await db.insert(projects).values({
    name,
    url,
    description,
  });
  
  revalidatePath('/dashboard');
} 