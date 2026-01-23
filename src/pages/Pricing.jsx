import React from "react";
import FMSections from "./pagecomponents/Pricing/FMSections";
import SubscriptionSection from "./pagecomponents/Pricing/SubscriptionSection";
import ZeroSurprise from "./pagecomponents/Pricing/ZeroSurprise";
import WePrice from "./pagecomponents/Pricing/WePrice";
import HowItWorks from "./pagecomponents/Pricing/HowItWorks";
import Exampletask from "./pagecomponents/Pricing/Exampletask";
import Designed from "./pagecomponents/Pricing/Designed";
import Scrollinlogo from "./pagecomponents/home/Scrollinlogo";
import ContactTeam from "@/components/Shared/ContactTeam";
import DiagnosticTool from "@/components/Shared/DiagnosticTool";
import AskSamCard from "@/components/Shared/AskSamCard";
import PricingContact from "./pagecomponents/Pricing/PricingContact";

const Pricing = () => {
  return (
    <div>
      <div>
        <FMSections />
      </div>
      <div>
        <SubscriptionSection />
      </div>
      <div>
        <ZeroSurprise />
      </div>
      <div>
        <WePrice />
      </div>
      <div>
        <HowItWorks />
      </div>
      <div>
        <Exampletask />
      </div>
      <div>
        <Designed />
      </div>
      <div>
        <PricingContact />
      </div>
      <div>
        <Scrollinlogo></Scrollinlogo>
      </div>
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
    </div>
  );
};

export default Pricing;
