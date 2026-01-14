import React from "react";
import Home from "./Home";
import Diagnostic from "./Diagnostic";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-800 dark:text-gray-200 px-4 py-6">
     

      <Home />
      <Diagnostic />
    </div>
  );
};
