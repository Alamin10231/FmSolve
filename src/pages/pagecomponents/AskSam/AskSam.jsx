import React, { useState } from "react";
import AskSamLanding from "./AskSamLanding";
import AskSamTools from "./AskSamTools";
import AskSamStaticResults from "./AskSamStaticResults";
import Notmatchtext from "./Notmatchtext";
import AskSamAnswerDetail from "./AskSamAnswerDetail";

const AskSam = () => {
  const [showResults, setShowResults] = useState(false);
  const [hasMatch, setHasMatch] = useState(false);
  

  const handleSearchResult = (showResult, matchFound) => {
    setShowResults(showResult);
    setHasMatch(matchFound);
  };
  const handleAnswerReceived = () => {
   
    setShowResults(true);
  };

  return (
    <div className="w-full min-h-screen ">
      <AskSamLanding
        onSearchResult={handleSearchResult}
        onAnswerReceived={handleAnswerReceived}
      />
      {showResults ? (
        hasMatch ? (
          <AskSamStaticResults />
        ) : (
          <Notmatchtext />
        )
      ) : (
        <AskSamTools />
      )}
    </div>
  );
};

export default AskSam;
