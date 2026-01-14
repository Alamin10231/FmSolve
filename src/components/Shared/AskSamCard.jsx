import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import SamImg from "../../assets/images/Sam.svg";

const AskSamCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <h1 className="mb-8 font-serif text-3xl italic tracking-wide text-gray-900 dark:text-white">
        Get Straight Answers Fast
      </h1>

      <div className="flex flex-col items-center w-full h-full p-6 pt-10 bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-slate-800 rounded-2xl">
        <div className="w-24 h-24 p-1 mb-6 border-2 rounded-full dark:border-white">
          <img
            src={SamImg}
            alt="Sam"
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Ask Sam
        </h2>

        <p className="mb-8 text-base leading-relaxed text-center text-gray-700 dark:text-gray-300">
          Your friendly FM advisor. 2000+ expert answers to common FM
          challenges, curated by senior curaro 4 professionals.
        </p>

        <Button
          className="w-full bg-[#f15a22] hover:bg-[#d84e1a] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all mt-auto"
          onClick={() => navigate("/ask-sam")}
        >
          <span className="text-xl">✨</span>
          Ask Sam
        </Button>
      </div>
    </div>
  );
};

export default AskSamCard;
