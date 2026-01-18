import React, { useState } from "react";
import { DollarSign, TrendingUp, Calendar, Eye, X } from "lucide-react";

export const TransactionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const itemsPerPage = 8;

  // Stats Data
  const stats = [
    {
      id: 1,
      icon: DollarSign,
      value: "$120",
      label: "Today",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      icon: TrendingUp,
      value: "$750",
      label: "Week",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      icon: Calendar,
      value: "$28,500",
      label: "Month",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600",
    },
    {
      id: 4,
      icon: DollarSign,
      value: "$50,000",
      label: "Total Revenue",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600",
    },
  ];

  // Transaction Data
  const allTransactions = [
    {
      id: "#20252",
      user: "Albert Flores",
      account: "$125.00",
      credits: "90",
      status: "Paid",
      statusColor: "text-green-600",
      date: "2024-01-15",
      email: "albert.flores@email.com",
      package: "Executive + KPI Blueprint",
    },
    {
      id: "#20252",
      user: "Albert Flores",
      account: "$125.00",
      credits: "90",
      status: "Paid",
      statusColor: "text-green-600",
      date: "2024-01-15",
      email: "albert.flores@email.com",
      package: "Executive + KPI Blueprint",
    },
    {
      id: "#20252",
      user: "Albert Flores",
      account: "$125.00",
      credits: "90",
      status: "Paid",
      statusColor: "text-green-600",
      date: "2024-01-15",
      email: "albert.flores@email.com",
      package: "Executive + KPI Blueprint",
    },
    {
      id: "#20252",
      user: "Albert Flores",
      account: "$125.00",
      credits: "90",
      status: "Failed",
      statusColor: "text-red-600",
      date: "2024-01-14",
      email: "albert.flores@email.com",
      package: "Full Triage Pack",
    },
    {
      id: "#20252",
      user: "Albert Flores",
      account: "$125.00",
      credits: "90",
      status: "Failed",
      statusColor: "text-red-600",
      date: "2024-01-14",
      email: "albert.flores@email.com",
      package: "Full Triage Pack",
    },
    {
      id: "#20252",
      user: "Albert Flores",
      account: "$125.00",
      credits: "90",
      status: "Failed",
      statusColor: "text-red-600",
      date: "2024-01-14",
      email: "albert.flores@email.com",
      package: "Full Triage Pack",
    },
    {
      id: "#20252",
      user: "Albert Flores",
      account: "$125.00",
      credits: "90",
      status: "Failed",
      statusColor: "text-red-600",
      date: "2024-01-13",
      email: "albert.flores@email.com",
      package: "Diagnostic/Root Cause Report",
    },
    {
      id: "#20252",
      user: "Albert Flores",
      account: "$125.00",
      credits: "90",
      status: "Failed",
      statusColor: "text-red-600",
      date: "2024-01-13",
      email: "albert.flores@email.com",
      package: "Diagnostic/Root Cause Report",
    },
  ];

  // Handle View Transaction
  const handleViewTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    setIsViewModalOpen(true);
  };

  // Pagination
  const totalPages = Math.ceil(allTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = allTransactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Cap pagination buttons to a window of 10
  const visiblePages = React.useMemo(() => {
    if (totalPages <= 10) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const windowSize = 10;
    const halfWindow = Math.floor(windowSize / 2);
    let start = currentPage - halfWindow + 1;
    let end = start + windowSize - 1;

    if (start < 1) {
      start = 1;
      end = windowSize;
    }

    if (end > totalPages) {
      end = totalPages;
      start = end - windowSize + 1;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [currentPage, totalPages]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`${stat.bgColor} rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all hover:shadow-lg`}
              >
                {/* Icon */}
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 mb-3">
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>

                {/* Value */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {stat.value}
                </h2>

                {/* Label */}
                <p className={`text-sm font-semibold ${stat.iconColor}`}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transaction History Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              TRANSACTION HISTORY:
            </h3>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50 dark:bg-blue-900/20">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 dark:text-blue-400">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 dark:text-blue-400">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Account
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Credits
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((transaction, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {transaction.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      {transaction.user}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      {transaction.account}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      {transaction.credits}
                    </td>
                    <td className={`px-6 py-4 text-sm font-semibold ${transaction.statusColor}`}>
                      {transaction.status === "Paid" ? "● Paid" : "● Failed"}
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => handleViewTransaction(transaction)}
                        className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 p-6 border-t border-gray-200 dark:border-gray-700">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
              className="px-2 py-1 text-gray-400 disabled:opacity-50"
            >
              ◀
            </button>

            {visiblePages.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${
                  currentPage === page
                    ? "bg-gray-400 dark:bg-gray-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
              className="px-2 py-1 text-gray-400 disabled:opacity-50"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      {/* View Transaction Modal */}
      {isViewModalOpen && selectedTransaction && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 w-full max-w-md shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Transaction Details
              </h3>
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Transaction Details */}
            <div className="space-y-4">
              {/* Transaction ID */}
              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Transaction ID</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {selectedTransaction.id}
                </p>
              </div>

              {/* User */}
              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">User</p>
                <p className="text-gray-900 dark:text-gray-100">{selectedTransaction.user}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{selectedTransaction.email}</p>
              </div>

              {/* Package */}
              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Package</p>
                <p className="text-gray-900 dark:text-gray-100">{selectedTransaction.package}</p>
              </div>

              {/* Account Amount */}
              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Amount</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {selectedTransaction.account}
                </p>
              </div>

              {/* Credits */}
              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Credits</p>
                <p className="text-gray-900 dark:text-gray-100">{selectedTransaction.credits}</p>
              </div>

              {/* Date */}
              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Date</p>
                <p className="text-gray-900 dark:text-gray-100">{selectedTransaction.date}</p>
              </div>

              {/* Status */}
              <div className="pb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Status</p>
                <p className={`text-lg font-semibold ${selectedTransaction.statusColor}`}>
                  {selectedTransaction.status === "Paid" ? "✓ Paid" : "✗ Failed"}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsViewModalOpen(false)}
              className="w-full mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
