import { File, FileQuestion } from "lucide-react";
import React from "react";

interface iappProps {
  title: string;
  description: string;
}

export default function NoItem({ description, title }: iappProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md borded border-dashed p-8 text-center animate-in fade-in-50 mt-10">
      <div className="flex h-20 w-20 bg-primary/10 items-center justify-center rounded-full">
        <FileQuestion className="h-10 w-10 text-primary" />
      </div>
      <h2 className="font-semibold text-xl mt-6">{title} </h2>
      <p className="mt-2 text-sm text-muted-foreground leading-4 text-center">
        {description}
      </p>
    </div>
  );
}
