import React, { useMemo, useState } from "react";
import { Users, Zap, CreditCard, DollarSign } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@/context/ThemeContext";
import { useAdminBrief, useAdminGraphData } from "@/features/admin/query";
// import { useAdminBrief } from "@/hooks/useAdminBrief";

export const Dashboard = () => {
  const { theme } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState("30 Day");

  // 🔹 API data
  const { data: briefData, isLoading: isBriefLoading } = useAdminBrief();
  const daysMap = { "7 Day": 7, "30 Day": 30, "90 Day": 90 };
  const { data: graphData } = useAdminGraphData({
    days: daysMap[selectedFilter] ?? 30,
  });

  // Default chart data (fallback)
  const chartDataFallback = useMemo(
    () => [
      { date: "May 1", users: 50, fs: 50 },
      { date: "May 5", users: 200, fs: 180 },
      { date: "May 10", users: 510, fs: 380 },
      { date: "May 15", users: 650, fs: 520 },
      { date: "May 20", users: 750, fs: 600 },
      { date: "May 25", users: 850, fs: 720 },
      { date: "May 30", users: 950, fs: 920 },
    ],
    [],
  );

  // Normalize API graph data to chart-friendly shape
  const normalizedChartData = useMemo(() => {
    if (Array.isArray(graphData) && graphData.length) {
      return graphData.map((d) => ({
        date: d.date ?? d.day ?? d.label ?? "",
        users: Number(d.users ?? d.total_users ?? 0),
        fs: Number(d.fs ?? d.total_fs ?? 0),
      }));
    }
    return chartDataFallback;
  }, [graphData, chartDataFallback]);

  // 🔹 Stats cards (ONLY required fields wired)
  const statsData = [
    {
      id: 1,
      icon: Users,
      value: isBriefLoading ? "—" : (briefData?.total_users ?? 0),
      label: "Total User",
      bgColor: theme === "dark" ? "bg-blue-900/30" : "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      icon: Zap,
      value: isBriefLoading ? "—" : (briefData?.total_fs ?? 0),
      label: "Total FS",
      bgColor: theme === "dark" ? "bg-blue-900/30" : "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      icon: CreditCard,
      value: "1205",
      label: "Credits Used",
      bgColor: theme === "dark" ? "bg-blue-900/30" : "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 4,
      icon: DollarSign,
      value: "$11,500",
      label: "Total Revenue",
      bgColor: theme === "dark" ? "bg-blue-900/30" : "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <div className="p-4 sm:p-6">
      {/* ================= Stats Cards ================= */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {statsData.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className={`${stat.bgColor} border-2 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center transition-all hover:shadow-lg`}
            >
              {/* Icon */}
              <div
                className={`${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } rounded-full p-3 mb-4`}
              >
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.iconColor}`} />
              </div>

              {/* Value */}
              <h2
                className={`text-2xl sm:text-3xl font-bold ${
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                } mb-2`}
              >
                {stat.value}
              </h2>

              {/* Label */}
              <p
                className={`${stat.iconColor} text-xs sm:text-sm font-semibold`}
              >
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* ================= User Growth Timeline ================= */}
      <div
        className={`mt-6 md:mt-8 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } rounded-2xl p-4 sm:p-6 shadow-sm`}
      >
        {/* Header */}
        <div className="flex flex-col gap-4 mb-4 md:flex-row md:items-center md:justify-between sm:mb-6">
          <div>
            <h2
              className={`text-lg sm:text-xl font-bold ${
                theme === "dark" ? "text-gray-100" : "text-gray-900"
              } mb-1`}
            >
              User Growth Timeline
            </h2>
            <p
              className={`text-xs sm:text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Real-time tracking registration vs activity
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {["7 Day", "30 Day", "90 Day"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? "bg-blue-600 text-white"
                    : theme === "dark"
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4 sm:justify-end sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span
              className={`text-xs sm:text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Total User
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span
              className={`text-xs sm:text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Total FS
            </span>
          </div>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={300} className="sm:h-[400px]">
          <AreaChart
            data={normalizedChartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme === "dark" ? "#374151" : "#f0f0f0"}
            />
            <XAxis
              dataKey="date"
              tick={{
                fill: theme === "dark" ? "#9ca3af" : "#666",
                fontSize: 11,
              }}
              axisLine={{
                stroke: theme === "dark" ? "#4b5563" : "#e0e0e0",
              }}
            />
            <YAxis
              tick={{
                fill: theme === "dark" ? "#9ca3af" : "#666",
                fontSize: 11,
              }}
              axisLine={{
                stroke: theme === "dark" ? "#4b5563" : "#e0e0e0",
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme === "dark" ? "#1f2937" : "#fff",
                border:
                  theme === "dark" ? "1px solid #374151" : "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "10px",
              }}
            />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#22c55e"
              fill="#22c55e20"
              strokeWidth={2}
              dot={{ fill: "#22c55e", r: 3 }}
            />
            <Area
              type="monotone"
              dataKey="fs"
              stroke="#3b82f6"
              fill="#3b82f620"
              strokeWidth={2}
              dot={{ fill: "#3b82f6", r: 3 }}
              strokeDasharray="5 5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
