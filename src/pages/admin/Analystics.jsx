import React, { useMemo, useState } from "react";
import { Users, Package, CreditCard, Search, ChevronDown } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useTheme } from "@/context/ThemeContext";

const baseData = [
  { label: "May 1", fsId: 20, users: 40 },
  { label: "May 5", fsId: 90, users: 180 },
  { label: "May 10", fsId: 200, users: 380 },
  { label: "May 15", fsId: 260, users: 450 },
  { label: "May 20", fsId: 340, users: 620 },
  { label: "May 25", fsId: 420, users: 780 },
  { label: "May 30", fsId: 510, users: 930 },
];

const stats = [
  { id: 1, label: "Total User", value: "1,234", icon: Users },
  { id: 2, label: "Total Pack", value: "1205", icon: Package },
  { id: 3, label: "Total Revenue", value: "$11,500", icon: CreditCard },
];

export const Analystics = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("User Growth & Activity");
  const [range, setRange] = useState("30 Day");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All status");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");

  const chartData = useMemo(() => {
    if (range === "7 Day") return baseData.slice(0, 3);
    if (range === "90 Day") {
      return [
        ...baseData,
        { label: "Jun 15", fsId: 680, users: 1200 },
        { label: "Jun 30", fsId: 820, users: 1450 },
        { label: "Jul 15", fsId: 980, users: 1700 },
      ];
    }
    return baseData;
  }, [range]);

  const transactions = useMemo(() => {
    const seed = [
      { date: "5/19/12", user: "Richards", amount: 129, method: "stripe", credits: 120 },
      { date: "5/19/12", user: "Richards", amount: 129, method: "stripe", credits: 120 },
      { date: "5/19/12", user: "Richards", amount: 129, method: "stripe", credits: 120 },
      { date: "5/19/12", user: "Richards", amount: 129, method: "stripe", credits: 120 },
      { date: "5/19/12", user: "Richards", amount: 129, method: "stripe", credits: 120 },
      { date: "5/19/12", user: "Richards", amount: 129, method: "stripe", credits: 120 },
    ];

    return Array.from({ length: 24 }, (_, i) => {
      const base = seed[i % seed.length];
      const isPaid = i % 2 === 0;
      return {
        ...base,
        id: `#22158${(i + 1).toString().padStart(2, "0")}`,
        status: isPaid ? "Paid" : "Failed",
      };
    });
  }, []);

  const filteredTx = useMemo(() => {
    const min = minAmount ? parseFloat(minAmount) : -Infinity;
    const max = maxAmount ? parseFloat(maxAmount) : Infinity;
    return transactions.filter((tx) => {
      const matchesSearch = `${tx.id} ${tx.user}`
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus =
        status === "All status" ? true : tx.status.toLowerCase() === status.toLowerCase();
      const amt = tx.amount;
      const matchesAmount = amt >= min && amt <= max;
      return matchesSearch && matchesStatus && matchesAmount;
    });
  }, [transactions, search, status, minAmount, maxAmount]);

  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(filteredTx.length / itemsPerPage));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * itemsPerPage;
  const visibleTx = filteredTx.slice(start, start + itemsPerPage);

  const paginationWindow = useMemo(() => {
    const maxButtons = 10;
    const half = Math.floor(maxButtons / 2);
    let begin = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, begin + maxButtons - 1);
    if (end - begin + 1 < maxButtons) begin = Math.max(1, end - maxButtons + 1);
    return Array.from({ length: end - begin + 1 }, (_, i) => begin + i);
  }, [currentPage, totalPages]);

  const cardBg = theme === "dark" ? "bg-blue-900/30" : "bg-blue-100";
  const panelBg = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textPrimary = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const textSecondary = theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Top stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`${cardBg} rounded-xl p-4 sm:p-6 border border-blue-100 dark:border-blue-900/50 shadow-sm flex items-center gap-4`}
            >
              <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold">{item.label}</p>
                <p className={`text-2xl font-bold ${textPrimary}`}>{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg w-full sm:w-auto">
        {["User Growth & Activity", "Transaction History", "Credit Pack Sales"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-2 rounded-md text-sm font-semibold transition-colors ${activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-gray-600 dark:text-gray-300"
                }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Content panel */}
      <div className={`${panelBg} rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-800`}>
        {activeTab === "User Growth & Activity" ? (
          <>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
              <div>
                <h2 className={`text-lg sm:text-xl font-semibold ${textPrimary}`}>
                  User Growth Timeline
                </h2>
                <p className={`text-xs sm:text-sm ${textSecondary}`}>
                  Real-time tracking registration vs activity
                </p>
              </div>

              <div className="flex gap-2 flex-wrap">
                {["7 Day", "30 Day", "90 Day"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setRange(option)}
                    className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors border ${range === option
                        ? "bg-blue-600 text-white border-blue-600"
                        : theme === "dark"
                          ? "bg-gray-800 text-gray-200 border-gray-700"
                          : "bg-gray-100 text-gray-700 border-gray-200"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className={`text-sm ${textSecondary}`}>FS-ID</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className={`text-sm ${textSecondary}`}>User</span>
              </div>
            </div>

            <div className="h-[320px] sm:h-[420px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ left: -20, right: 10, top: 10 }}>
                  <CartesianGrid
                    strokeDasharray="4 4"
                    stroke={theme === "dark" ? "#374151" : "#e5e7eb"}
                  />
                  <XAxis
                    dataKey="label"
                    tick={{ fill: theme === "dark" ? "#e5e7eb" : "#4b5563", fontSize: 11 }}
                    axisLine={{ stroke: theme === "dark" ? "#4b5563" : "#e5e7eb" }}
                  />
                  <YAxis
                    tick={{ fill: theme === "dark" ? "#e5e7eb" : "#4b5563", fontSize: 11 }}
                    axisLine={{ stroke: theme === "dark" ? "#4b5563" : "#e5e7eb" }}
                  />
                  <Tooltip
                    cursor={{ stroke: "#cbd5e1" }}
                    contentStyle={{
                      background: theme === "dark" ? "#111827" : "#fff",
                      border: theme === "dark" ? "1px solid #1f2937" : "1px solid #e5e7eb",
                      borderRadius: 8,
                      color: theme === "dark" ? "#f9fafb" : "#111827",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="fsId"
                    stroke="#16a34a"
                    strokeWidth={3}
                    dot={{ r: 5, strokeWidth: 0, fill: "#16a34a" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ r: 5, strokeWidth: 0, fill: "#2563eb" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {activeTab === "Transaction History" ? (
              <>
                {/* Filters */}
                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="relative flex-1 min-w-[200px]">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                      }}
                      placeholder="Search"
                      className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <select
                        value={status}
                        onChange={(e) => {
                          setStatus(e.target.value);
                          setPage(1);
                        }}
                        className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-100 pr-8"
                      >
                        <option>All status</option>
                        <option>Paid</option>
                        <option>Failed</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">Amount Range:</span>
                      <input
                        value={minAmount}
                        onChange={(e) => {
                          setMinAmount(e.target.value);
                          setPage(1);
                        }}
                        type="number"
                        placeholder="$__"
                        className="w-20 bg-transparent text-sm text-gray-700 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded px-2 py-1"
                      />
                      <span className="text-xs text-gray-400">to</span>
                      <input
                        value={maxAmount}
                        onChange={(e) => {
                          setMaxAmount(e.target.value);
                          setPage(1);
                        }}
                        type="number"
                        placeholder="$__"
                        className="w-20 bg-transparent text-sm text-gray-700 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded px-2 py-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-100">
                      <tr>
                        {["Date", "ID", "User", "Amount", "Method", "Credits", "Status"].map((col) => (
                          <th key={col} className="text-left px-4 py-3 font-semibold">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {visibleTx.map((tx) => (
                        <tr
                          key={tx.id}
                          className="border-b border-gray-200 dark:border-gray-800"
                        >
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-200">{tx.date}</td>
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-200">{tx.id}</td>
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-200">{tx.user}</td>
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-200">${tx.amount.toFixed(2)}</td>
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-200">{tx.method}</td>
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-200">{tx.credits}</td>
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex items-center gap-1 text-sm font-semibold ${tx.status === "Paid" ? "text-green-600" : "text-red-600"
                                }`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${tx.status === "Paid" ? "bg-green-500" : "bg-red-500"
                                  }`}
                              ></span>
                              {tx.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 pt-4">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-6 h-6 text-xs rounded border border-gray-200 dark:border-gray-700 text-gray-500 disabled:opacity-50"
                  >
                    ‹
                  </button>
                  {paginationWindow.map((pNum) => (
                    <button
                      key={pNum}
                      onClick={() => setPage(pNum)}
                      className={`w-7 h-7 text-xs rounded border transition-colors ${pNum === currentPage
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                    >
                      {pNum}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-6 h-6 text-xs rounded border border-gray-200 dark:border-gray-700 text-gray-500 disabled:opacity-50"
                  >
                    ›
                  </button>
                </div>
              </>
            ) : activeTab === "Credit Pack Sales" ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-100">
                    <tr>
                      {["Pack", "Sales", "Revenue", "Conversation", "Total FS-ID"].map((col) => (
                        <th key={col} className="text-left px-4 py-3 font-semibold">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">Level 02</td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">123</td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">$5999</td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">13%</td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">2354</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">
                        <div className="flex items-center gap-3">
                          <span>Level 02</span>
                          <span className="flex -space-x-2">

                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">98</td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">$4850</td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">18%</td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">1890</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">Level 03</td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">156</td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">$7200</td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">22%</td>
                      <td className="px-4 py-4 text-gray-800 dark:text-gray-100">3120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className={`text-sm ${textSecondary}`}>
                Simple placeholder for {activeTab}. Add content as needed.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
