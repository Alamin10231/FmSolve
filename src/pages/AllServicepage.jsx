import React from "react";
import Header from "./pagecomponents/home/Header";
import Assesment from "@/components/Shared/Assesment";
import DiagnosticTool from "@/components/Shared/DiagnosticTool";
import ProcessSection from "./pagecomponents/home/ProcessSection";
import ContactTeam from "@/components/Shared/ContactTeam";
import AskSamCard from "@/components/Shared/AskSamCard";
import Automation from "@/components/Shared/Automation";
import Scrollinlogo from "./pagecomponents/home/Scrollinlogo";
import Operational from "./pagecomponents/AllService/Operational";
import WhoWeWorkWith from "./pagecomponents/AllService/WhoWeWorkWith";
import ServiceOverview from "@/components/Shared/ServiceOverview";
import ContinuousImprovement from "./pagecomponents/home/ContinuousImprovment";
import Status from "./pagecomponents/home/Status";
import TeamLead from "./pagecomponents/AllService/TeamLead";
import TransformCTA from "./pagecomponents/AllService/TransformCTA";
// import Operational from "./pagecomponents/AllService/Operational";

// const CHILDREN_BY_SERVICE = {
//   "operational-delivery": [
//     "Mobilisation",
//     "FM Playbooks",
//     "Risk & Compliance",
//     "SOPs & Workflow",
//   ],
//   "commercial-strategy": ["Pricing", "Contract Review", "Margin Improvement"],
//   "supply-chain": ["Contractors", "SLA Management", "Compliance"],
//   "operational-hr": ["Skills Gap", "Training", "Workforce Planning"],
//   "performance-kpis": ["KPI Gaps", "Benchmarking", "Trending"],
//   "data-technology": ["Integrations", "Roadmap", "System Audit"],
// };

const AllServicepage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#05080d] dark:text-white">
      <div className="mt-10">
        <Header></Header>
      </div>
      <div className="flex flex-col items-center justify-center grid-cols-1 gap-5 my-10 md:flex-row">
        <div>
          <Assesment></Assesment>
        </div>
        <div>
          <DiagnosticTool></DiagnosticTool>
        </div>
      </div>
      <div>
        <Scrollinlogo></Scrollinlogo>
      </div>
      <div className="container grid items-stretch grid-cols-1 gap-6 md:mx-auto md:grid-cols-3">
        <div className="h-full">
          <ContactTeam />
        </div>
        <div className="h-full">
          <Automation></Automation>
        </div>
        <div className="h-full">
          <AskSamCard />
        </div>
      </div>
      <div>
        <ProcessSection></ProcessSection>
      </div>
      <div>
        <Operational></Operational>
      </div>
      <div>
        <WhoWeWorkWith></WhoWeWorkWith>
      </div>
      <div>
        <ServiceOverview></ServiceOverview>
      </div>
      <div>
        <ContinuousImprovement></ContinuousImprovement>
      </div>
      <Status></Status>
      <TeamLead></TeamLead>
      <TransformCTA></TransformCTA>
    </div>
  );
};

export default AllServicepage;
