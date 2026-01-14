import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FiChevronLeft,
  FiArrowRight,
  FiLock,
  FiMail,
  FiUser,
  FiPhone,
  FiChevronsLeft,
} from "react-icons/fi";
import { HiBuildingOffice } from "react-icons/hi2";

const ScenarioDetail = () => {
  const { category, scenarioId } = useParams();
  const navigate = useNavigate();

  const [stage, setStage] = useState("name");
  const [reportName, setReportName] = useState("");
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  const friendlyTitle = (scenarioId || "").replace(/-/g, " ");

  const QUESTIONS = useMemo(
    () => [
      {
        q: "How complete is warranty data in the CAFM asset register (dates, terms, docs)?",
        options: [
          "95%+ assets have warranty start/end, terms, OEM details; documents attached in CAFM",
          "60–90% complete; some missing documents or incorrect dates",
          "<60% complete; inconsistent fields; documents not stored or inaccessible",
        ],
      },
      {
        q: "Is there a documented warranty/DLP SOP with clear ownership and permit-to-work checks?",
        options: [
          "SOP with RACI; warranty check in permit-to-work and handover; claims approved within 5 days",
          "Informal process; some checks in PTW; approvals inconsistent",
          "No SOP; no PTW warranty gate; approvals ad hoc",
        ],
      },
      {
        q: "Are warranty claims tracked with status and recovery amounts?",
        options: ["Always", "Sometimes", "Rarely"],
      },
      {
        q: "Do service contracts define defect liability terms clearly?",
        options: ["Yes, for all", "Partially", "No"],
      },
      {
        q: "Is vendor performance reviewed for warranty responsiveness?",
        options: ["Quarterly", "Annually", "Never"],
      },
      {
        q: "Is there a central repository for warranty docs accessible to field teams?",
        options: ["Yes", "Limited", "No"],
      },
      {
        q: "Are asset warranties validated during mobilization and site changes?",
        options: ["Always", "Sometimes", "No"],
      },
    ],
    []
  );

  const total = QUESTIONS.length;
  const percent = Math.round((idx / total) * 100);

  const handleBegin = (e) => {
    e.preventDefault();
    if (!reportName.trim()) return;
    setStage("quiz");
  };

  const handleSelect = (choiceIndex) => {
    const add = 3 - choiceIndex;
    setScore((s) => s + add);
    if (idx + 1 >= total) {
      setStage("result");
    } else {
      setIdx((i) => i + 1);
    }
  };

  const handleBack = () => {
    if (stage === "quiz" && idx > 0) setIdx((i) => i - 1);
  };

  const finalPercent = Math.round((score / (total * 3)) * 100) || 0;

  if (stage === "name") {
    return (
      <div className="container px-4 py-8 mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <FiChevronLeft className="text-gray-700 dark:text-gray-200" />
          <Link
            to={`/diagnostic/${category}`}
            className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Exit Diagnostic
          </Link>
        </div>

        <form
          onSubmit={handleBegin}
          className="max-w-2xl p-6 bg-white dark:bg-[#11162a] border border-gray-200 dark:border-gray-700 rounded"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Name Your Report
          </h2>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Give this report a name so you can identify it later. This will
            appear on your emailed report for "{friendlyTitle}".
          </p>

          <label className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
            Report Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={reportName}
            onChange={(e) => setReportName(e.target.value)}
            placeholder="e.g., Site A Review, Q4 Audit, Manchester Contract"
            className="mt-2 w-full px-3 py-2 text-sm bg-white dark:bg-[#0b0f1a] border border-gray-300 dark:border-gray-700 rounded outline-none text-gray-900 dark:text-gray-100"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            A unique reference number will be added automatically.
          </p>

          <button
            type="submit"
            disabled={!reportName.trim()}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Begin Diagnostic <FiArrowRight />
          </button>
        </form>
      </div>
    );
  }

  if (stage === "quiz") {
    const q = QUESTIONS[idx];
    return (
      <div className="container px-4 py-8 mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <FiChevronLeft className="text-gray-700 dark:text-gray-200" />
          <Link
            to={`/diagnostic/${category}`}
            className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Exit Diagnostic
          </Link>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Question {idx + 1} of {total}
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {Math.max(percent, 1)}%
          </span>
        </div>
        <div className="w-full h-1 bg-gray-200 rounded dark:bg-gray-700">
          <div
            className="h-1 bg-blue-600 rounded"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="mt-4 p-6 bg-white dark:bg-[#11162a] border border-gray-200 dark:border-gray-700 rounded">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {q.q}
          </h2>
          <div className="mt-4 space-y-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="w-full text-left px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0b0f1a] hover:border-blue-500"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            <FiChevronLeft /> Back
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <FiChevronsLeft className="text-gray-700 dark:text-gray-200" />
        <Link
          to="/dashboard"
          className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          Back to Dashboard
        </Link>
      </div>

      <div className="max-w-md mx-auto p-6 bg-white dark:bg-[#11162a] border border-gray-200 dark:border-gray-700 rounded">
        <div className="flex items-center justify-center w-12 h-12 mx-auto text-blue-600 bg-blue-100 rounded-full">
          <FiLock />
        </div>
        <h2 className="mt-3 text-xl font-semibold text-center text-gray-900 dark:text-white">
          Your Results Are Ready
        </h2>
        <p className="mt-1 text-sm text-center text-gray-700 dark:text-gray-300">
          Enter your details to unlock your full {friendlyTitle} report
        </p>

        <div className="p-4 mt-4 text-center bg-green-100 rounded">
          <div className="text-gray-700">Your Score</div>
          <div className="mt-1 text-3xl font-bold text-green-700">
            {finalPercent}%
          </div>
          <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded bg-green-700 text-white">
            Stable
          </span>
        </div>

        <form
          className="mt-6 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            const payload = {
              category,
              scenarioId,
              reportName,
              score: finalPercent,
              email,
              fullName,
              company,
              phone,
              createdAt: new Date().toISOString(),
            };
            navigate("/report", { state: payload });
          }}
        >
          <div>
            <label className="text-sm text-gray-900 dark:text-white">
              Work Email *
            </label>
            <div className="relative mt-1">
              <FiMail className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-[#0b0f1a] border border-gray-300 dark:border-gray-700 rounded outline-none"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-900 dark:text-white">
              Full Name
            </label>
            <div className="relative mt-1">
              <FiUser className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Smith"
                className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-[#0b0f1a] border border-gray-300 dark:border-gray-700 rounded outline-none"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-900 dark:text-white">
              Company
            </label>
            <div className="relative mt-1">
              <HiBuildingOffice className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Facilities"
                className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-[#0b0f1a] border border-gray-300 dark:border-gray-700 rounded outline-none"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-900 dark:text-white">
              Phone (optional)
            </label>
            <div className="relative mt-1">
              <FiPhone className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+44 7700 900000"
                className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-[#0b0f1a] border border-gray-300 dark:border-gray-700 rounded outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500"
          >
            Get My Full Report
          </button>
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Your report will be sent to your email. We respect your privacy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ScenarioDetail;
