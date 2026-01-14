import { Button } from "@/components/ui/button";
import Main from "../pagecomponents/home/Main";

import { AuthContext } from "@/context/AuthProvider";
import Scrollinlogo from "../pagecomponents/home/Scrollinlogo";
import ContactTeam from "@/components/Shared/ContactTeam";
import DiagnosticTool from "@/components/Shared/DiagnosticTool";
import AskSamCard from "@/components/Shared/AskSamCard";
import ProcessSection from "../pagecomponents/home/ProcessSection";
import HeroSection from "../pagecomponents/home/HeroSection";
import ContinuousImprovement from "../pagecomponents/home/ContinuousImprovment";
import SMTBoostSection from "../pagecomponents/home/SMTBoostSection";
import TeamSection from "../pagecomponents/home/TeamSection";
import ServiceOverview from "@/components/Shared/ServiceOverview";
import Header from "../pagecomponents/home/Header";
import Status from "../pagecomponents/home/Status";
// import Header from "../pagecomponents/home/Header";

export const Home = () => {
  return (
    <div className="py-10 bg-gray-50 dark:bg-black">
      <div className="bg-[#ECF1FD] ">
        <Header className=""></Header>
        <Main className=""></Main>
      </div>
      <Scrollinlogo></Scrollinlogo>

      <div className="container grid items-stretch grid-cols-1 gap-6 md:mx-auto md:grid-cols-3">
        <div className="h-full">
          <ContactTeam />
        </div>
        <div className="h-full">
          <DiagnosticTool />
        </div>
        <div className="h-full">
          <AskSamCard />
        </div>
      </div>

      <ProcessSection></ProcessSection>
      <ServiceOverview></ServiceOverview>
      <HeroSection></HeroSection>
      <ContinuousImprovement></ContinuousImprovement>
      <SMTBoostSection></SMTBoostSection>
      <Status></Status>
      <TeamSection></TeamSection>
    </div>
  );
};
