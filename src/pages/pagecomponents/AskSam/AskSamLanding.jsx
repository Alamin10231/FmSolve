import React, { useEffect, useRef, useState } from "react";
import bgVideo from "/firevideo.mp4";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";
import { requestAskPrelogin, searchAskSam } from "@/services/asksam.service";
// Results are rendered by parent via onAnswerReceived(data)

const AskSamLanding = ({
  onSearchResult,
  onAnswerReceived,
  onSuggestionsUpdate,
}) => {
  const [query, setQuery] = useState("");
  const [showVideo, setShowVideo] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  // Fetch suggestions from API
  const fetchSuggestions = async (val) => {
    try {
      const res = await searchAskSam(val);
      // Only show the 'question' field from each result
      let list = [];
      if (Array.isArray(res)) {
        list = res
          .map((item) => item.question)
          .filter(Boolean)
          .slice(0, 6);
        setSuggestions(list);
        setShowSuggestions(res.length > 0);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
      if (onSuggestionsUpdate) onSuggestionsUpdate(list);
    } catch (e) {
      setSuggestions([]);
      setShowSuggestions(false);
      if (onSuggestionsUpdate) onSuggestionsUpdate([]);
      console.log(e);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        try {
          videoRef.current.pause();
        } catch (e) {
          console.error("Error pausing video:", e);
        }
      }
      setShowVideo(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleAsk = async (e) => {
    e.preventDefault();
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return;
    setLoading(true);
    setError(null);
    try {
      const res = await requestAskPrelogin({ question: query });
      const payload = {
        fsid: res?.temp_fsid ?? res?.fsid ?? res?.id,
        question: res?.question ?? query,
        quickAnswer: res?.quick_answer ?? res?.answer ?? "",
        title: res?.title,
        tags: res?.tags ?? [],
        breadcrumbs: res?.breadcrumbs ?? [],
      };
      if (onAnswerReceived) onAnswerReceived(payload);
    } catch (err) {
      const status = err?.response?.status;
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.detail ||
        err?.message ||
        "Request failed. Please try again.";
      console.error("Ask Sam request failed", {
        status,
        data: err?.response?.data,
        err,
      });
      setError(status ? `${status}: ${msg}` : msg);
      if (onSearchResult) onSearchResult(true, false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={
        `relative overflow-hidden w-full min-h-[60vh] py-24  ` +
        (showVideo
          ? `bg-white/50 text-white backdrop-blur-sm dark:bg-[#0b0f1a]/70 dark:text-white dark:backdrop-blur-sm`
          : `bg-white text-gray-900 dark:bg-[#0b0f1a] dark:text-white`)
      }
    >
      {showVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 z-0 object-cover w-full h-full"
          autoPlay
          muted
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="relative z-10 px-6 mx-auto text-center max-w-7xl font-DmSans">
        {/* Badge */}
        <div className="inline-block px-6 py-2 mb-8 text-sm font-semibold text-blue-700 bg-blue-100 border border-blue-200 rounded-full dark:bg-blue-900/30 dark:border-blue-800/40 dark:text-blue-300">
          The World's Most Comprehensive FM Knowledge Platform
        </div>

        {/* Headings */}
        <h1 className="text-4xl font-black tracking-tight md:text-6xl">
          Describe Your FM Problem.
        </h1>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-transparent md:text-6xl bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text">
          Get Expert Solutions.
        </h2>

        {/* Description */}
        <p
          className={`max-w-3xl mx-auto mt-8 text-lg text-gray-600 dark:text-slate-300 ${
            showVideo ? "text-white" : "text-gray-600 dark:text-slate-300"
          }`}
        >
          Instant access to{" "}
          <span className="font-bold text-blue-500 dark:text-white">
            10,000+ expert answers
          </span>{" "}
          and{" "}
          <span className="font-bold text-blue-500 dark:text-white">
            5,000+ diagnostic reports
          </span>{" "}
          — curated by FM professionals, not generated by AI.
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleAsk}
          className="flex flex-col items-center max-w-4xl gap-3 mx-auto mt-10 sm:flex-row"
        >
          <div className="relative flex-1 w-full">
            <span className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2 dark:text-slate-400">
              <Search className="w-5 h-5" />
            </span>

            <Input
              value={query}
              onChange={(e) => {
                const val = e.target.value;
                setQuery(val);
                if (val.trim().length > 0) {
                  fetchSuggestions(val.trim());
                  if (onSearchResult) onSearchResult(false, false);
                } else {
                  setShowSuggestions(false);
                  setSuggestions([]);
                  if (onSearchResult) onSearchResult(false, false);
                }
              }}
              placeholder="Client complaints are increasing"
              className="py-6 pl-10 pr-3 text-gray-900 bg-gray-100 border-gray-300 placeholder:text-gray-400 dark:bg-slate-950 dark:text-slate-200 dark:border-slate-800"
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 z-20 mt-2 overflow-hidden text-left bg-white border shadow-lg rounded-xl dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                {suggestions.map((s, idx) => (
                  <li
                    key={idx}
                    onMouseDown={() => {
                      setQuery(s);
                      setShowSuggestions(false);
                      // Do NOT trigger onSuggestionClick here, just fill input
                    }}
                    className="px-3 py-2 text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="
              px-6 py-6 h-[52px]
              text-white bg-orange-600 hover:bg-orange-700
              rounded-xl font-bold flex items-center gap-2
            "
          >
            <Sparkles className="w-5 h-5" />
            {loading ? "Generating..." : "Ask Sam"}
          </Button>
        </form>

        {error && (
          <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}

        {/* Trust Signals */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 mt-10 text-gray-500 dark:text-slate-400 ${
            showVideo ? "text-white" : "text-gray-500 dark:text-slate-400"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Human-curated expertise
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            Industry-proven solutions
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Instant results
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
            Built by FM leaders
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskSamLanding;
