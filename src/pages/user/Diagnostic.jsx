import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowRight, FiSearch, FiClock, FiHelpCircle } from "react-icons/fi";

/* ---------------- Fake JSON Data ---------------- */
const DIAGNOSTIC_DATA = [
  {
    slug: "client-services",
    name: "Client Services",
    subtitle:
      "Evaluate client relationship health, satisfaction scores, and communication",
    count: 0,
    scenarios: [],
  },
  {
    slug: "commercial-strategy",
    name: "Commercial Strategy",
    subtitle: "Commercial strategy",
    count: 52,
    scenarios: [
      {
        id: "poor-warranty-defects-recovery",
        title: "Poor Warranty and Defects Recovery",
        time: "5-10 min",
      },
      {
        id: "no-margin-visibility-by-class-or-job",
        title: "No Margin Visibility by Asset Class or Job Type",
        time: "5-10 min",
      },
    ],
  },
  {
    slug: "data-technology",
    name: "Data & Technology",
    subtitle:
      "Diagnose your technology landscape and identify opportunities for digital improvement.",
    count: 0,
    scenarios: [],
  },
  {
    slug: "helpdesk",
    name: "Helpdesk",
    subtitle:
      "Optimise helpdesk response performance, call handling, and first-contact resolution",
    count: 0,
    scenarios: [],
  },
  {
    slug: "operational-hr",
    name: "Operational HR",
    subtitle: "Human resources operations",
    count: 59,
    scenarios: [],
  },
];

/* ---------------- Component ---------------- */
const Diagnostic = () => {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  /* ---------------- FIRST PAGE SEARCH (CATEGORY TITLE ONLY) ---------------- */
  const filteredCategories = DIAGNOSTIC_DATA.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  /* ---------------- SECOND PAGE ---------------- */
  const active = DIAGNOSTIC_DATA.find((c) => c.slug === category) || null;

  /* ---------------- FIRST PAGE (Categories) ---------------- */
  if (!category) {
    return (
      <div className="container px-4 py-6 mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <FiHelpCircle />
          <h2 className="text-lg font-semibold">Run a Diagnostic</h2>
        </div>

        {/* SEARCH INPUT (FIRST PAGE ONLY) */}
        <div className="relative max-w-sm mb-5">
          <FiSearch className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
          <input
            type="text"
            placeholder="Search diagnostic..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm border rounded outline-none dark:bg-[#11162a]"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.length === 0 ? (
            <div className="col-span-full p-6 border rounded bg-white dark:bg-[#11162a]">
              No diagnostics found.
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/diagnostic/${cat.slug}`}
                className="relative p-4 bg-white dark:bg-[#11162a] border rounded hover:border-blue-600 transition"
              >
                <span className="absolute right-3 top-3 text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-[#0b0f1a]">
                  {cat.count}
                </span>
                <h4 className="font-medium">{cat.name}</h4>
                <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                  {cat.subtitle}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    );
  }


  if (!active) return null;

  return (
    <div className="container px-4 py-8 mx-auto">
      <Link to="/dashboard" className="text-sm text-gray-500 hover:text-blue-600">
        &lt; Back to Dashboard
      </Link>

      <h1 className="mt-2 text-3xl font-semibold">{active.name}</h1>
      <p className="text-sm text-gray-500">{active.subtitle}</p>

      <h3 className="mt-6 mb-4 text-lg font-medium">Available Scenarios</h3>

      <div className="space-y-4">
        {active.scenarios.length === 0 ? (
          <div className="p-6 border rounded bg-white dark:bg-[#11162a]">
            No scenarios available.
          </div>
        ) : (
          active.scenarios.map((s) => (
            <div
              key={s.id}
              className="group flex justify-between gap-4 p-5 border rounded bg-white dark:bg-[#11162a]"
            >
              <div>
                <h4 className="font-medium">{s.title}</h4>
                <span className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                  <FiClock /> {s.time}
                </span>
              </div>

              <Link
                to={`/diagnostic/${active.slug}/${s.id}`}
                className="flex items-center self-center gap-2 px-3 py-2 text-white transition bg-blue-600 rounded "
              >
               Start Diagnostic <FiArrowRight />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Diagnostic;
