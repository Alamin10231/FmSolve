import React, { useState } from "react";
import AskSamLanding from "./AskSamLanding";
import AskSamTools from "./AskSamTools";
import AskSamStaticResults from "./AskSamStaticResults";

const AskSam = () => {
  const [showResults, setShowResults] = useState(false);
  return (
    <div className="w-full min-h-screen ">
      <AskSamLanding onToggleResults={setShowResults} />
      {showResults ? <AskSamStaticResults /> : <AskSamTools />}
    </div>
  );
};

export default AskSam;
