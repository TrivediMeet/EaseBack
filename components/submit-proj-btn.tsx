"use client";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit">
      {pending ? (
        <>
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Creating...
        </>
      ) : (
        "Create Project"
      )}
    </Button>
  );
};

export default SubmitButton;
