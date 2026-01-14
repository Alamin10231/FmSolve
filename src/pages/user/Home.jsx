import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiFileText, FiChevronRight } from "react-icons/fi";

const Home = () => {
  const [reports] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("reports") || "[]");
    } catch {
      return [];
    }
  });
  const navigate = useNavigate();

  const recent = useMemo(() => reports.slice(0, 2), [reports]);

  const formatDate = (iso) => {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "—";
    }
  };

  const shortId = (id) => {
    if (!id) return "—";
    try {
      const hex = Number(id).toString(16);
      return hex.slice(-8);
    } catch {
      return String(id).slice(0, 8);
    }
  };
  return (
    <div>
      <div className="mx-auto space-y-6 max-w-7xl">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">
            Good morning, <span className="text-blue-600">Md</span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your operational diagnostics dashboard
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Reports", value: 0 },
            { label: "Diagnostics", value: 264 },
            { label: "Ideas", value: 9 },
            { label: "FM Answers", value: 0 },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 bg-white dark:bg-[#11162a] border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <p className="text-xs text-gray-500">{item.label}</p>
              <h3 className="text-xl font-bold text-blue-600">{item.value}</h3>
            </div>
          ))}
        </div>

        {/* Recommended */}
        <div className="p-4 bg-white dark:bg-[#11162a] border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="mb-2 font-semibold">Recommended for you</h2>
          <div className="flex flex-wrap gap-2">
            {["Operational HR", "Supply Chain", "Commercial Strategy"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Your Reports */}
        <div className="p-6 bg-white dark:bg-[#11162a] border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Your Reports</h3>
            <Link
              to="/reports"
              className="inline-flex items-center gap-1 text-sm text-blue-600"
            >
              View All ({reports.length}) <FiChevronRight />
            </Link>
          </div>

          {recent.length === 0 ? (
            <div className="p-6 text-center border border-gray-300 border-dashed rounded-lg dark:border-gray-700">
              <p className="mb-3 text-sm text-gray-500">No reports yet</p>
              <Link
                to="/diagnostic"
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Start Diagnostic
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {recent.map((item) => {
                const categoryLabel = (item.category || "").replace(/-/g, " ");
                const scenarioLabel = (item.scenarioId || "").replace(
                  /-/g,
                  " "
                );
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate("/report", { state: item })}
                    className="w-full text-left p-4 rounded-lg border bg-gray-50 dark:bg-[#0b0f1a] hover:bg-white dark:hover:bg-[#11162a] flex items-start justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white dark:bg-[#11162a] border">
                        <FiFileText className="text-gray-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">
                            {item.reportName || "—"}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 border">
                            ID: {shortId(item.id)}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                          {scenarioLabel || "—"} <span className="mx-2">•</span>{" "}
                          {categoryLabel || "—"}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 border border-red-200">
                        Good
                      </span>
                      <div className="mt-1 text-xs text-gray-500">
                        {formatDate(item.createdAt)}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

    
        <div className="p-6 bg-white dark:bg-[#11162a] border border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-center">
          <h3 className="mb-1 font-semibold">No saved questions yet</h3>
          <p className="mb-3 text-sm text-gray-500">No saved questions yet</p>
         <Link to="/ask-sam/fm-answers">
          <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
            Browse FM Answers
          </button>
         </Link>
        </div>

        {/* Run Diagnostic */}
      </div>
    </div>
  );
};

export default Home;
