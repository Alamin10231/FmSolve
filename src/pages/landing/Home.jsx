import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Main from "../pagecomponents/home/Main";

export const Home = () => {
  // const [active,setactive]= useState("")
  return (
    <div className="py-10 ">
      <div className="text-center space-y-6">
        <h1 className="text-white font-bold text-7xl">
          Problem. Solution. Exit.
        </h1>
        <p className="text-wrap text-2xl text-white max-w-3xl mx-auto ">
          A virtual bench of proven SMT professionals. No Contracts. Real
          Impact. Senior Firepower On Demand
        </p>
        <div className="space-x-3">
          <Button className={`bg-secondary text-white px-4 py-1.5 rounded hover:bg-transparent border hover:border-2 hover:border-white duration-300`} >
            Book a Clarity Call
          </Button>
  <Button className={`bg-secondary text-white px-4 py-1.5 rounded hover:bg-transparent border hover:border-2 hover:border-white duration-300`} >
            Contact the Team
          </Button>
        </div>
      </div>
      <Main></Main>
    </div>
  );
};
