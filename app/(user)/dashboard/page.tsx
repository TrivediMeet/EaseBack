import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth ,currentUser} from "@clerk/nextjs/server";
import NewProjBtn from "@/components/new-proj";

export default async function Page() {
  const allprojects = await db.select().from(projects);
  

  return (
    <div>
      <NewProjBtn />
    </div>
  );
}
