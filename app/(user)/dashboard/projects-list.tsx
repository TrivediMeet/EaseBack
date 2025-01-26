import { InferSelectModel } from "drizzle-orm";
import { projects } from "@/db/schema";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import  Link  from "next/link";


type Project = InferSelectModel<typeof projects>;

type Props = {
    projects: Project[];
}

const ProjectsList = ( props : Props) => {
  return (

  <div>
    {/* <h1 className="text-2xl font-bold mb-4 text-center">Your Projects</h1> */}
    <ul className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4">
      {props.projects.map((project: Project) => (
        <li key={project.id}>
             <Card className="max-w-[350px] flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/projects/${project.id}`}>
                  <Button>View Project</Button>
                </Link>
              </CardFooter>
            </Card>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ProjectsList;
