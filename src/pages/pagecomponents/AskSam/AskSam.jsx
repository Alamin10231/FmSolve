import React, { useState } from "react";
import AskSamLanding from "./AskSamLanding";
import AskSamTools from "./AskSamTools";
import AskSamStaticResults from "./AskSamStaticResults";
import Notmatchtext from "./Notmatchtext";
// import Notmatchtext from "./Notmatchtext";

const AskSam = () => {
  const [showResults, setShowResults] = useState(false);
  const [hasMatch, setHasMatch] = useState(false);

  const handleSearchResult = (showResult, matchFound) => {
    setShowResults(showResult);
    setHasMatch(matchFound);
  };

  return (
    <div className="w-full min-h-screen ">
      <AskSamLanding onSearchResult={handleSearchResult} />
      {showResults ? (
        <div>{hasMatch ? <AskSamStaticResults /> : <Notmatchtext />}</div>
      ) : (
        <AskSamTools />
      )}
    </div>
  );
};

export default AskSam;
