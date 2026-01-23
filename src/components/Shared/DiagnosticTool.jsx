import React from "react";
import { useNavigate } from "react-router-dom";
import setting from "../../assets/icons/uil_setting.svg";
import Strategy from "../../assets/icons/iconoir_light-bulb.svg";
import chain from "../../assets/icons/tabler_checkbox.svg";
import HR from "../../assets/icons/Vector.svg";
import KPI from "../../assets/icons/streamline-ultimate_performance-increase.svg";
import data from "../../assets/icons/streamline-ultimate_laptop.svg";
import helpdesk from "../../assets/icons/bx_support.svg";
import service from "../../assets/icons/ri_service-line.svg";
import listbox from "../../assets/icons/mdi_list-box-outline.svg";
import { useTheme } from "@/context/ThemeContext";

const DiagnosticTool = () => {
  const navigate = useNavigate();
  const { serviceIndex, setServiceIndex } = useTheme();

  const categories = [
    {
      id: 1,
      title: "Operational Delivery",
      icon: (
        <img
          src={setting}
          alt="setting"
          className="filter brightness-0 saturate-100 dark:invert"
        />
      ),
    },
    {
      id: 2,
      title: "Commercial Strategy",
      icon: (
        <img
          src={Strategy}
          alt="strategy"
          className="filter brightness-0 saturate-100 dark:invert"
        />
      ),
    },
    {
      id: 3,
      title: "Supply Chain",
      icon: (
        <img
          src={chain}
          alt="chain"
          className="filter brightness-0 saturate-100 dark:invert"
        />
      ),
    },
    {
      id: 4,
      title: "Operational HR",
      icon: (
        <img
          src={HR}
          alt="hr"
          className="filter brightness-0 saturate-100 dark:invert"
        />
      ),
    },
    {
      id: 5,
      title: "Performance & KPIs",
      icon: (
        <img
          src={KPI}
          alt="kpi"
          className="filter brightness-0 saturate-100 dark:invert"
        />
      ),
    },
    {
      id: 6,
      title: "Data & Technology",
      icon: (
        <img
          src={data}
          alt="data"
          className="filter brightness-0 saturate-100 dark:invert"
        />
      ),
    },
    {
      id: 7,
      title: "Helpdesk",
      icon: (
        <img
          src={helpdesk}
          alt="helpdesk"
          className="filter brightness-0 saturate-100 dark:invert"
        />
      ),
    },
    {
      id: 8,
      title: "Service Delivery",
      icon: (
        <img
          src={listbox}
          alt="service"
          className="filter brightness-0 saturate-100 dark:invert"
        />
      ),
    },
    {
      id: 9,
      title: "Client Services",
      icon: (
        <img
          src={service}
          alt="client service"
          className="filter brightness-0 saturate-100 dark:invert"
        />
      ),
    },
  ];

  const safeIndex =
    Number.isInteger(serviceIndex) &&
    serviceIndex >= 0 &&
    serviceIndex < categories.length
      ? serviceIndex
      : 0;

  const selectedId = categories[safeIndex]?.id;

  const handlereport = () => {
    const id = selectedId;
    if (id) navigate(`/survey/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-2 py-6 transition-colors sm:px-4 sm:py-10 dark:bg-black">
      <h1 className="mb-6 font-serif text-2xl italic tracking-wide text-center sm:mb-8 sm:text-3xl text-slate-900 dark:text-white">
        Get Straight Answers Fast
      </h1>

      <div className="w-full h-full max-w-2xl p-4 sm:p-6 bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-gray-700 rounded-2xl shadow-lg transition-colors flex flex-col">
        <h1 className="mb-4 font-serif text-xl italic tracking-wide text-center sm:mb-6 sm:text-2xl text-slate-900 dark:text-white">
          Diagnose. Action Plan. Fix.
        </h1>

        <div className="grid grid-cols-1 gap-2 mb-4 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.id}
              onClick={() => setServiceIndex(item.id - 1)}
              className={`relative flex flex-col items-center justify-center gap-1 sm:gap-2 p-2 sm:p-4 cursor-pointer border rounded-xl transition-all
                ${
                  safeIndex === item.id - 1
                    ? "border-blue-500 bg-blue-500/10 ring-1 ring-blue-500"
                    : "border-slate-300 dark:border-gray-700 hover:border-slate-500 dark:hover:border-gray-500"
                }`}
            >
              <input
                type="checkbox"
                checked={safeIndex === item.id - 1}
                readOnly
                className="absolute w-3 h-3 rounded top-2 left-2 sm:top-3 sm:left-3 accent-[#f15a22]"
              />

              {/* Icon with responsive sizes */}
              <span className="text-xl sm:text-2xl md:text-4xl">
                {item.icon}
              </span>

              {/* Text with responsive sizes */}
              <span className="text-[9px] sm:text-[10px] md:text-sm font-medium text-center text-slate-700 dark:text-white">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handlereport}
          disabled={!selectedId}
          className={`w-full py-2 sm:py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all
            ${
              selectedId
                ? "bg-[#f15a22] hover:bg-[#d84e1a] text-white"
                : "bg-slate-300 dark:bg-gray-700 text-slate-500 dark:text-gray-400 cursor-not-allowed"
            }`}
        >
          Run Report →
        </button>
      </div>
    </div>
  );
};

export default DiagnosticTool;
