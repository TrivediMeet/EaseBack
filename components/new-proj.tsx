import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Rocket, Globe, FileText } from "lucide-react";
import { createProject } from "@/actions/createProject";
import SubmitButton from "@/components/submit-proj-btn";

const NewProjBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100">
          <Plus className="w-4 h-4 mr-1" />
          Create Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] rounded-xl bg-slate-50/90 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2 text-slate-800">
            <Rocket className="w-6 h-6 text-slate-700" />
            Create New Project
          </DialogTitle>
          <DialogDescription className="text-base text-slate-600">
            Launch your feedback collection journey with a new project
          </DialogDescription>
        </DialogHeader>
        <form className="flex gap-6 flex-col mt-4" action={createProject}>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-base flex items-center gap-2 text-l text-slate-1900">
                <FileText className="w-4 h-4 text-slate-600" />
                Project Name
              </Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="My Awesome Project" 
                className="text-base py-5 bg-white/70 border-slate-200 focus:border-slate-400 focus:ring-slate-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="url" className="text-base flex items-center gap-2 text-slate-1900 ">
                <Globe className="w-4 h-4 text-slate-600" />
                Website URL
              </Label>
              <Input 
                id="url" 
                name="url" 
                placeholder="https://example.com" 
                className="text-base py-5 bg-white/70 border-slate-200 focus:border-slate-400 focus:ring-slate-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description" className="text-base text-slate-1900">Description</Label>
              <Textarea
                name="description"
                id="description"
                placeholder="Tell us about your project..."
                className="text-base min-h-[100px] resize-none bg-white/70 border-slate-200 focus:border-slate-400 focus:ring-slate-400"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjBtn;
