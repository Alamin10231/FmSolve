import React, { useState } from "react";
import AskSamLanding from "./AskSamLanding";
import AskSamTools from "./AskSamTools";
import AskSamStaticResults from "./AskSamStaticResults";
import Notmatchtext from "./Notmatchtext";
import { ShowAIResults } from "./ShowAIResults";

const AskSam = () => {
  const [showResults, setShowResults] = useState(false);
  const [lastQuery, setLastQuery] = useState("");

  const [payload, setPayload] = useState(null);

  // Called from AskSamLanding to update suggestions list
  const handleSuggestionClick = () => {};
  const handleSuggestionsUpdate = (list) => {
    console.log("[LOG] From handle suggestions update", list);
  };

  // Called when user submits a search
  const handleSearchResult = (showResult) => {
    setShowResults(showResult);
    setPayload(null);
  };

  // Called when answer is received (Ask Sam button submit)
  const handleAnswerReceived = (payload) => {
    console.log("[LOG] From handle answer received", payload);
    setShowResults(true);
    setLastQuery(payload?.question || "");
    setPayload(payload);
  };

  return (
    <div className="w-full min-h-screen ">
      <AskSamLanding
        onSearchResult={handleSearchResult}
        onAnswerReceived={handleAnswerReceived}
        onSuggestionClick={handleSuggestionClick}
        onSuggestionsUpdate={handleSuggestionsUpdate}
      />
      {showResults ? (
        payload.suggestions.length > 0 ? (
          <ShowAIResults payload={payload} />
        ) : (
          <Notmatchtext query={lastQuery} />
        )
      ) : (
        <AskSamTools />
      )}
      {/* <AskSamStaticResults payload={payload} /> */}
    </div>
  );
};

export default AskSam;
