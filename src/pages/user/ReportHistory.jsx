import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiSearch, FiTrash2, FiEye } from "react-icons/fi";

const Chip = ({ children }) => (
  <span className="px-2 py-0.5 text-xs rounded bg-green-100 text-green-700 border border-green-200">
    {children}
  </span>
);

const Pill = ({ children }) => (
  <span className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-700 border border-gray-200">
    {children}
  </span>
);

const ReportCard = ({ item, onView, onDelete }) => {
  const date = new Date(item.createdAt).toLocaleDateString();
  const categoryLabel = (item.category || "").replace(/-/g, " ");
  const scenarioLabel = (item.scenarioId || "").replace(/-/g, " ");
  return (
    <div className="flex items-center justify-between p-4 rounded border bg-white dark:bg-[#11162a]">
      <div>
        <div className="flex items-center gap-2">
          <Pill>{categoryLabel || "Category"}</Pill>
          <Chip>Good</Chip>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            • {date}
          </span>
        </div>
        <div className="mt-2 font-medium text-gray-900 dark:text-white">
          {scenarioLabel || item.reportName}
        </div>
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          Client: {item.company || "n/a"}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onView}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-500"
        >
          <FiEye /> View
        </button>
        <button
          onClick={onDelete}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded border text-red-600 hover:bg-red-50"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

const ReportHistory = () => {
  const [q, setQ] = useState("");
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("reports") || "[]");
    setReports(list);
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return reports;
    return reports.filter(
      (r) =>
        (r.company || "").toLowerCase().includes(s) ||
        (r.reportName || "").toLowerCase().includes(s) ||
        (r.scenarioId || "").toLowerCase().includes(s)
    );
  }, [q, reports]);

  const handleDelete = (id) => {
    const next = reports.filter((r) => r.id !== id);
    setReports(next);
    localStorage.setItem("reports", JSON.stringify(next));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-4">
        <FiChevronLeft className="text-gray-700 dark:text-gray-200" />
        <Link
          to="/dashboard"
          className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          Back to Dashboard
        </Link>
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Report History
      </h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        View and manage your saved Stability Pack reports
      </p>

      <div className="mt-4 relative max-w-xl">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="e.g., Kier, NHS Trust, Client 001"
          className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-[#11162a] border border-gray-200 dark:border-gray-700 rounded outline-none"
        />
      </div>

      <div className="mt-4 space-y-3">
        {filtered.map((item) => (
          <ReportCard
            key={item.id}
            item={item}
            onView={() => navigate("/report", { state: item })}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
        {filtered.length === 0 && (
          <div className="p-4 rounded border bg-white dark:bg-[#11162a] text-sm text-gray-600 dark:text-gray-300">
            No saved reports yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportHistory;
