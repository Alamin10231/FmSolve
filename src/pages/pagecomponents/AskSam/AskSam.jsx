import React, { useState } from "react";
import AskSamLanding from "./AskSamLanding";
import AskSamTools from "./AskSamTools";
import AskSamStaticResults from "./AskSamStaticResults";
import Notmatchtext from "./Notmatchtext";
import AskSamAnswerDetail from "./AskSamAnswerDetail";

const AskSam = () => {
  const [showResults, setShowResults] = useState(false);
  const [hasMatch, setHasMatch] = useState(false);
  const [answerData, setAnswerData] = useState(null);

  const handleSearchResult = (showResult, matchFound) => {
    setShowResults(showResult);
    setHasMatch(matchFound);
  };

  const handleAnswerReceived = (data) => {
    setAnswerData(data || null);
    setShowResults(true);
    setHasMatch(!!data);
  };

  return (
    <div className="w-full min-h-screen ">
      <AskSamLanding
        onSearchResult={handleSearchResult}
        onAnswerReceived={handleAnswerReceived}
      />
      {answerData ? (
        <AskSamAnswerDetail answerData={answerData} />
      ) : showResults ? (
        <div>{hasMatch ? <AskSamStaticResults /> : <Notmatchtext />}</div>
      ) : (
        <AskSamTools />
      )}
    </div>
  );
};

export default AskSam;
