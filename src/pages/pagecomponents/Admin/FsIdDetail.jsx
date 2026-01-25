import React, { useState } from "react";
// import { X, ArrowLeft } from "lucide-material-react"; // lucide-react
import { useAdminFsid } from "@/features/admin/query";
import { ArrowLeft, X } from "lucide-react";

const statusColors = {
  level1: "bg-blue-100 text-blue-700",
  level2: "bg-orange-100 text-orange-700",
  level3: "bg-emerald-100 text-emerald-700",
};

const Wrapper = ({ children, isModal }) =>
  isModal ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200 dark:border-gray-800">
        {children}
      </div>
    </div>
  ) : (
    <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 shadow-sm dark:bg-gray-900 rounded-xl dark:border-gray-800">
      {children}
    </div>
  );

export const FsIdDetail = ({ onClose, user, isModal = true }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [viewMode, setViewMode] = useState(null); // 'level1', 'level2', 'level3' অথবা 'all'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data: fsidList, isLoading, isError } = useAdminFsid();

  const rows = Array.isArray(fsidList)
    ? fsidList.map((item) => {
        const id = item?.fs_id ?? item?.id ?? "";
        const problem = item?.question ?? "";
        const createdRaw = item?.created_at ?? item?.createdAt ?? "";
        const date = createdRaw ? new Date(createdRaw).toLocaleDateString() : "";
        return { ...item, id, problem, date };
      })
    : [];

  const paginatedRows = rows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleOpenModal = (row, mode) => {
    setSelectedRow(row);
    setViewMode(mode);
  };

  const renderLevelContent = (levelKey, levelData) => {
    if (!levelData) return null;
    return (
      <div key={levelKey} className="p-5 mb-6 border-l-4 border-purple-500 rounded-r-lg bg-gray-50 dark:bg-gray-800/50">
        <span className="inline-block px-2 py-1 mb-3 text-xs font-bold text-purple-700 uppercase bg-purple-100 rounded">
          {levelKey}
        </span>
        <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{levelData.question}</h3>
        
        <div className="grid gap-4 text-sm">
          <div>
            <h4 className="font-bold text-gray-700 dark:text-gray-200">Short Answer:</h4>
            <p className="text-gray-600 dark:text-gray-400">{levelData.shortAnswer}</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 dark:text-gray-200">Detailed Answer:</h4>
            <p className="p-3 mt-1 text-gray-600 whitespace-pre-line bg-white border rounded dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400">
              {levelData.detailedAnswer}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-gray-700 dark:text-gray-200">Value to FM:</h4>
              <p className="text-gray-600 dark:text-gray-400">{levelData.valueToFM}</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 dark:text-gray-200">When to Use:</h4>
              <p className="text-gray-600 dark:text-gray-400">{levelData.whenToUse}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) return <p className="p-10 text-center">Loading...</p>;

  return (
    <Wrapper isModal={isModal}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b dark:bg-gray-900 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
            <ArrowLeft className="w-4 h-4" /> Back Profile
          </button>
          <span className="text-gray-300">|</span>
          <span className="font-semibold text-gray-700 dark:text-gray-300">{user?.name || "User Details"}</span>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 z-20 text-gray-700 bg-purple-50 dark:bg-purple-900/20 dark:text-gray-200">
            <tr>
              <th className="px-6 py-4 font-semibold text-left">FS-ID</th>
              <th className="px-6 py-4 font-semibold text-left">Problem</th>
              <th className="px-6 py-4 font-semibold text-left">Levels (Click to filter)</th>
              <th className="px-6 py-4 font-semibold text-left">Cre. Date</th>
              <th className="px-6 py-4 font-semibold text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {paginatedRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                <td className="px-6 py-4 font-medium">{row.id}</td>
                <td className="max-w-xs px-6 py-4 truncate">{row.problem}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {['level1', 'level2', 'level3'].map(lvl => (
                      row.levels?.[0]?.[lvl] && (
                        <button
                          key={lvl}
                          onClick={() => handleOpenModal(row, lvl)}
                          className={`px-2 py-1 text-[10px] font-bold rounded uppercase transition-transform hover:scale-105 ${statusColors[lvl]}`}
                        >
                          {lvl}
                        </button>
                      )
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{row.date}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleOpenModal(row, "all")}
                    className="px-4 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    View All
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Logic for Modal Content */}
      {selectedRow && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-5 border-b dark:border-gray-800">
              <h2 className="text-xl font-bold dark:text-white">
                {viewMode === "all" ? "Comprehensive Report" : `${viewMode.toUpperCase()} Details`}
              </h2>
              <button onClick={() => setSelectedRow(null)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto">
              {viewMode === "all" ? (
                // View All এ ক্লিক করলে ১, ২, ৩ সব ডাটা ম্যাপ হবে
                ['level1', 'level2', 'level3'].map(lvl => 
                  renderLevelContent(lvl, selectedRow.levels?.[0]?.[lvl])
                )
              ) : (
                // নির্দিষ্ট লেভেলে ক্লিক করলে শুধু সেটি
                renderLevelContent(viewMode, selectedRow.levels?.[0]?.[viewMode])
              )}
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};