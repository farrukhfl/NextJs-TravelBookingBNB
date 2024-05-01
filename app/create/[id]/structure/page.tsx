import CreationBottomBar from "@/app/Components/CreationBottomBar";
import SelectedCategory from "@/app/Components/SelectedCategory";
import CreationSubmit from "@/app/Components/SubmitButtons";
import { createCategoryPage } from "@/app/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function StructureRoute({params}: {params : {id : string}}) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your house
        </h2>
      </div>
      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id} />
<SelectedCategory />
<CreationBottomBar />
  
      </form>
    </>
  );
}
