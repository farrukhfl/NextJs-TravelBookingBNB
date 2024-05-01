'use client'
import React, { useState } from "react";
import { categoryItems } from "../lib/categoryItems";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function SelectedCategory() {
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined)
  return (

    <div className="grid grid-cols-4 gap-8 mt-8 mx-auto w-3/5 mb-36">
        <input type="hidden" value={selectedCategory as string} name="categoryName"  />
      {categoryItems.map((item) => (
        <div className="cursor-pointer" key={item.id}>
          <Card className={selectedCategory === item.name ? "border-primary" : ""}
          onClick={()=> setSelectedCategory(item.name)}>
            <CardHeader>
              <Image
                src={item.imageUrl}
                alt={item.name}
                height={32}
                width={32}
                className="h-8 w-8"
              />
              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
