import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiCheckCircle,
  FiDownload,
  FiSave,
  FiAlertCircle,
} from "react-icons/fi";

const DIMENSIONS = [
  { name: "Process & Governance Control", status: "Critical" },
  { name: "Data, Visibility & Reporting", status: "Critical" },
  { name: "People, Culture & Capability", status: "Critical" },
  { name: "Partners & Supply Chain Performance", status: "Critical" },
  { name: "Financial & Cost Risk", status: "Critical" },
];

const IMMEDIATE_ACTIONS = [
  "Cleanse CAFM warranty fields for critical assets; attach OEM warranty documents and standard dates",
  "Introduce a mandatory warranty check at permit-to-work and handover; route claims approvals within 5 days",
  "Stand up a warranty recovery ledger with aging, review weekly and resolve claims <14 days",
  "Review and refresh contract terms with DLP/warranty; set recovery determinants in model",
  "Trace backcharges and refund notices to OEM/contractors on declined claims; log disputes centrally",
];

const STRATEGIC_FIXES = [
  "Warranty & DLP Governance Programme (High impact)",
  "CAFM Warranty Module & Analytics Upgrade (High impact)",
  "Contractual Reset & Vendor Performance Regime (Medium impact)",
];

const QA_TRAIL = [
  "How complete is warranty data in the CAFM asset register (dates, terms, docs)?",
  "Is there a documented warranty/DLP SOP with clear ownership and permit-to-work checks?",
  "What is the review cadence of the warranty recovery ledger and aged claims?",
  "Are suppliers given the warranty dispatch/replace ticket dispatching timeline?",
  "Do contracts include a measurable DLP/warranty KPI with recovery SLAs and backcharges?",
  "Do you backdate early warranty indicators (prevent faults at 6 months, failure data) into warranty opportunities?",
  "How are claims tracked to resolved, aged, rejected (SOPs, OEMs, disputes)?",
];

const Chip = ({ children, color = "red" }) => (
  <span
    className={`px-2 py-0.5 text-xs rounded border ${
      color === "green"
        ? "bg-green-100 text-green-700 border-green-200"
        : "bg-red-100 text-red-700 border-red-200"
    }`}
  >
    {children}
  </span>
);

export const ReportView = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const report = state || {
    category: "commercial-strategy",
    scenarioId: "poor-warranty-defects-recovery",
    reportName: "Sample Report",
    score: 79,
    email: "example@company.com",
    fullName: "John Smith",
    company: "Acme Facilities",
    phone: "+44 7700 900000",
    createdAt: new Date().toISOString(),
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${report.reportName || "report"}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSave = () => {
    const key = "reports";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    const item = { id: Date.now(), ...report };
    localStorage.setItem(key, JSON.stringify([item, ...existing]));
    navigate("/reports");
  };

  return (
    <div className="container px-4 py-6 mx-auto">
      {/* Email banner */}
      <div className="flex items-center gap-2 px-3 py-2 mb-4 text-green-700 bg-green-100 border border-green-200 rounded">
        <FiCheckCircle />
        <span>
          Full report sent to: {report.email || "example@company.com"}
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <Link
          to="/dashboard"
          className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          &lt; Back to Dashboard
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded border bg-white dark:bg-[#11162a]"
          >
            <FiDownload /> Download
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded border bg-white dark:bg-[#11162a]"
          >
            <FiSave /> Save Report
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Stability Pack Report
      </h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        {(report.category || "Category").replace(/-/g, " ")} •{" "}
        {(report.scenarioId || "Scenario").replace(/-/g, " ")} • v1.0
      </p>

      {/* Stability Assessment */}
      <div className="mt-4 p-4 rounded border bg-white dark:bg-[#11162a]">
        <div className="flex items-center gap-2 text-green-700">
          <FiCheckCircle />
          <span className="font-medium">Your operation is Good</span>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-3 md:grid-cols-2 lg:grid-cols-3">
          {DIMENSIONS.map((d) => (
            <div
              key={d.name}
              className="flex items-center justify-between px-3 py-2 border border-red-200 rounded bg-red-50"
            >
              <span className="text-sm text-gray-800 dark:text-gray-200">
                {d.name}
              </span>
              <Chip>Critical</Chip>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnostic Summary */}
      <div className="mt-4 p-4 rounded border bg-white dark:bg-[#11162a]">
        <h3 className="font-medium text-gray-900 dark:text-white">
          Diagnostic Summary
        </h3>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          This scenario diagnoses weak warranty/defect recovery mechanics: poor
          asset warranty data, unclear governance, weak tickets, inconsistent
          escalation gates, and soft contractor accountability causing avoidable
          cost absorptions. It highlights both lagging recovery and missing
          early warning indicators, undermining commercial stability.
        </p>
      </div>

      {/* Immediate Actions */}
      <div className="mt-4 p-4 rounded border bg-white dark:bg-[#11162a]">
        <h3 className="font-medium text-gray-900 dark:text-white">
          Immediate Actions
        </h3>
        <ul className="mt-2 space-y-2">
          {IMMEDIATE_ACTIONS.map((a, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-red-700">
              <FiAlertCircle className="mt-0.5" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Strategic Fixes */}
      <div className="mt-4 p-4 rounded border bg-white dark:bg-[#11162a]">
        <h3 className="font-medium text-gray-900 dark:text-white">
          Strategic Fixes
        </h3>
        <ul className="mt-2 space-y-2 text-sm text-gray-800 dark:text-gray-200">
          {STRATEGIC_FIXES.map((s, i) => (
            <li
              key={i}
              className="flex items-center justify-between px-3 py-2 rounded bg-gray-50 dark:bg-[#0b0f1a]"
            >
              <span>{s}</span>
              <Chip color="green">Recommended</Chip>
            </li>
          ))}
        </ul>
      </div>

      {/* Detailed Dimension Analysis */}
      <div className="mt-4 p-4 rounded border bg-white dark:bg-[#11162a]">
        <h3 className="font-medium text-gray-900 dark:text-white">
          Detailed Dimension Analysis
        </h3>
        <div className="mt-2 space-y-2">
          {DIMENSIONS.map((d) => (
            <div
              key={d.name}
              className="flex items-center justify-between px-3 py-2 border border-red-200 rounded bg-red-50"
            >
              <span className="text-sm text-gray-800 dark:text-gray-200">
                {d.name}
              </span>
              <Chip>Critical</Chip>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnostic Q&A Trail */}
      <div className="mt-4 p-4 rounded border bg-white dark:bg-[#11162a]">
        <h3 className="font-medium text-gray-900 dark:text-white">
          Diagnostic Q&A Trail
        </h3>
        <ol className="mt-2 space-y-2 text-sm text-gray-800 list-decimal list-inside dark:text-gray-200">
          {QA_TRAIL.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ReportView;
