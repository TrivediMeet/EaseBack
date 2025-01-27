  import { Metadata } from "next";
  import CopyBtn from "@/components/copy-btn";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
  import Link from "next/link";
  import { ChevronLeft } from "lucide-react";

  // Define the props interface
  interface PageProps {
    params: {
      projectId: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
  }

  // Add metadata export if needed
  export const metadata: Metadata = {
    title: 'Project Instructions',
  };

  const Page = async ({ params, searchParams }: PageProps) => {
    if (!params.projectId) return (<div>Invalid Project ID</div>);
    if (!process.env.WIDGET_URL) return (<div>Missing WIDGET_URL</div>);

    return (
      <div>
        <Link 
          href={`/projects/${params.projectId}`} 
          className="flex items-center text-indigo-700 mb-5 w-fit hover:text-indigo-800"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="text-lg">Back to project</span>
        </Link>

        <Card className="max-w-3xl">
          <CardHeader>
            <CardTitle className="text-2xl">Start Collecting Feedback</CardTitle>
            <CardDescription className="text-lg">
              Copy and paste this code into your website's HTML where you want the feedback widget to appear
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-950 p-6 rounded-lg mt-4 relative font-mono">
              <code className="text-white text-sm block whitespace-pre-wrap">
                {`<my-widget project-id="${params.projectId}"></my-widget>`}
                {`\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
              </code>
              <CopyBtn text={`<my-widget project-id="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`} />
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>💡 <span className="font-semibold">Tip:</span> Place this code just before the closing {'</body>'} tag for optimal performance.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  export default Page;