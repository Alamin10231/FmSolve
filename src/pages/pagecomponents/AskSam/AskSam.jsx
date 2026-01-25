import React, { useState } from "react";
import AskSamLanding from "./AskSamLanding";
import AskSamTools from "./AskSamTools";
import AskSamStaticResults from "./AskSamStaticResults";
import Notmatchtext from "./Notmatchtext";

const AskSam = () => {
  const [showResults, setShowResults] = useState(false);
  const [hasMatch, setHasMatch] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [lastQuery, setLastQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Called from AskSamLanding to update suggestions list
  const handleSuggestionClick = () => {};
  // Called from AskSamLanding to update suggestions list
  const handleSuggestionsUpdate = (list) => {
    setSuggestions(list);
  };

  // Called when user submits a search
  const handleSearchResult = (showResult, matchFound) => {
    setShowResults(showResult);
    setHasMatch(matchFound);
    setSelectedSuggestion(null);
  };

  // Called when answer is received (Ask Sam button submit)
  const handleAnswerReceived = (payload) => {
    setShowResults(true);
    setLastQuery(payload?.question || "");
    // Check if the submitted query matches any suggestion (case-insensitive)
    const match = suggestions.some(
      (s) =>
        s.trim().toLowerCase() ===
        (payload?.question || "").trim().toLowerCase(),
    );
    setHasMatch(match);
    setSelectedSuggestion(match ? payload?.question || "" : null);
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
        hasMatch ? (
          <AskSamStaticResults suggestion={selectedSuggestion} />
        ) : (
          <Notmatchtext query={lastQuery} />
        )
      ) : (
        <AskSamTools />
      )}
    </div>
  );
};

export default AskSam;
