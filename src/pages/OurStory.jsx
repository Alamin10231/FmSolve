import React from "react";
import HeroStory from "./pagecomponents/OurStory/HeroStory";
import SamSection from "./pagecomponents/MeetSam/SamSection";
import SamStatsSection from "./pagecomponents/OurStory/SamStatsSection";
import MissionSection from "./pagecomponents/OurStory/MissionSection ";
import PhilosophySection from "./pagecomponents/OurStory/PhilosophySection";
import FMSolveAbout from "./pagecomponents/OurStory/FMSolveAbout";
import SamCoreValues from "./pagecomponents/OurStory/SamCoreValues";
import SamOrigin from "./pagecomponents/OurStory/SamOrigin";
import TeamSection from "./pagecomponents/OurStory/TeamSection";
import Scrollinlogo from "./pagecomponents/home/Scrollinlogo";
import ContactTeam from "@/components/Shared/ContactTeam";
import DiagnosticTool from "@/components/Shared/DiagnosticTool";
import AskSamCard from "@/components/Shared/AskSamCard";
import CallToAction from "./pagecomponents/OurStory/CallToAction";
// import FMSolveAbout from "./pagecomponents/OurStory/FMSolveAbout";
// import FMSolveAbout from "./pagecomponents/OurStory/FMSolveAbout";

const OurStory = () => {
  return (
    <>
      <div>
        <HeroStory />
      </div>
      <div>
        <SamStatsSection></SamStatsSection>
      </div>
      <div>
        <MissionSection></MissionSection>
      </div>
      <div>
        <PhilosophySection></PhilosophySection>
      </div>
      <div>
        <FMSolveAbout></FMSolveAbout>
      </div>
      <div>
        <SamCoreValues></SamCoreValues>
      </div>
      <div>
        <SamOrigin></SamOrigin>
      </div>
      <div>
        <TeamSection></TeamSection>
      </div>
      <div>
        <Scrollinlogo></Scrollinlogo>
      </div>
      <div className="container items-center justify-between mx-auto md:flex ">
        <ContactTeam></ContactTeam>
        <DiagnosticTool></DiagnosticTool>
        <AskSamCard></AskSamCard>
      </div>
      <div>
        <CallToAction></CallToAction>
      </div>
    </>
  );
};

export default OurStory;
