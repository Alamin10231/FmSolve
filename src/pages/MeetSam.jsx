import React from "react";
// import SamHero from './pagecomponents/MeetSam/SamHero'
import SamSection from "./pagecomponents/MeetSam/SamSection";
import SamHowItWorks from "./pagecomponents/MeetSam/SamHowItWorks";
import WhySam from "./pagecomponents/MeetSam/WhySam";
import SamTrustPromise from "./pagecomponents/MeetSam/SamTrustPromise";
import SamAvater from "./pagecomponents/MeetSam/SamHero";
import SamCTA from "./pagecomponents/MeetSam/SamCTA";


const MeetSam = () => {
  return (
    <div>
      
      <div>
        <SamSection></SamSection>
      </div>
      <div>
        <SamHowItWorks></SamHowItWorks>
      </div>
      <div>
        <WhySam></WhySam>
      </div>
      <div>
        <SamTrustPromise></SamTrustPromise>
      </div>
      <div><SamCTA></SamCTA></div>
   
      
        
      
    </div>
  );
};

export default MeetSam;
