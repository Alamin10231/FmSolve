import React, { useState } from "react";
import { 
  ArrowLeft, X, ChevronLeft, ChevronRight, 
  Target, Zap, FileText, Tag, Info 
} from "lucide-react";

const statusColors = {
  level1: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200",
  level2: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200",
  level3: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200",
};

export const FsIdDetail = ({ onClose, user, fsidData, isModal = true }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [viewMode, setViewMode] = useState("all"); // "all" or "level1", "level2", "level3"
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const rows = Array.isArray(fsidData) ? fsidData : [];
  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const paginatedRows = rows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // ফুল রিপোর্ট দেখার জন্য
  const handleOpenFullReport = (row) => {
    setSelectedRow(row);
    setViewMode("all");
  };

  // নির্দিষ্ট লেভেলে ক্লিক করলে দেখার জন্য
  const handleOpenLevelReport = (e, row, level) => {
    e.stopPropagation(); // টেবিল রো ক্লিক হ্যান্ডলার আটকাতে
    setSelectedRow(row);
    setViewMode(level);
  };

  const renderLevelContent = (levelKey, levelData) => {
    if (!levelData || typeof levelData !== 'object' || Object.keys(levelData).length === 0) return null;
    
    // যদি মোড "all" না হয় এবং বর্তমান লেভেলটি সিলেক্টেড লেভেল না হয়, তবে কিছু দেখাবে না
    if (viewMode !== "all" && viewMode !== levelKey) return null;

    return (
      <div key={levelKey} className="mb-10 duration-500 last:mb-0 animate-in fade-in slide-in-from-bottom-4">
        <div className="flex items-center gap-2 mb-4">
           <span className={`px-4 py-1 text-xs font-black uppercase rounded-full border ${statusColors[levelKey]}`}>
            {levelKey} Analysis
          </span>
          <div className="h-[1px] flex-1 bg-gray-100 dark:bg-gray-800"></div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <h3 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
            {levelData.question || selectedRow?.question}
          </h3>

          {levelData.shortAnswer && (
            <div className="p-5 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/10 rounded-r-xl">
              <h4 className="text-[10px] font-bold text-blue-600 uppercase mb-1">Quick Insight</h4>
              <p className="text-lg italic leading-relaxed text-gray-700 dark:text-gray-300">
                "{levelData.shortAnswer}"
              </p>
            </div>
          )}

          {levelData.detailedAnswer && (
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400 tracking-widest">
                <FileText className="w-3 h-3" /> Detailed Diagnostic
              </h4>
              <div className="p-5 text-sm leading-loose text-gray-600 whitespace-pre-line border bg-gray-50 dark:bg-gray-900/50 rounded-2xl dark:border-gray-800 dark:text-gray-400">
                {levelData.detailedAnswer}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {levelData.valueToFM && (
              <div className="p-5 bg-white border border-gray-100 shadow-sm dark:bg-gray-900 rounded-2xl dark:border-gray-800">
                <h4 className="flex items-center gap-2 mb-3 text-xs font-bold text-orange-600 uppercase">
                  <Target className="w-4 h-4" /> Strategic Value
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{levelData.valueToFM}</p>
              </div>
            )}
            {levelData.whenToUse && (
              <div className="p-5 bg-white border border-gray-100 shadow-sm dark:bg-gray-900 rounded-2xl dark:border-gray-800">
                <h4 className="flex items-center gap-2 mb-3 text-xs font-bold uppercase text-emerald-600">
                  <Zap className="w-4 h-4" /> Application Context
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{levelData.whenToUse}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 shadow-sm dark:bg-gray-950 rounded-2xl dark:border-gray-800 h-[85vh] flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-800">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="p-2 transition-all rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <ArrowLeft className="w-5 h-5 text-gray-500" />
          </button>
          <div>
            <h2 className="mb-1 font-bold leading-none text-gray-900 dark:text-white">{user?.name}</h2>
            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Submission History • {rows.length} Items</p>
          </div>
        </div>
        <div className="hidden p-1 bg-gray-100 rounded-lg md:flex dark:bg-gray-900">
           <div className="px-3 py-1 text-xs font-bold text-gray-500">UID: {user?.uid}</div>
        </div>
      </div>

      {/* TABLE */}
      <div className="flex-1 px-4 py-2 overflow-auto">
        <table className="w-full text-sm border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-400 text-[11px] uppercase tracking-wider font-bold">
              <th className="px-4 py-2 text-left">FSID</th>
              <th className="px-4 py-2 text-left">Problem Statement</th>
              <th className="px-4 py-2 text-left">Available Levels</th>
              <th className="px-4 py-2 text-right">View</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRows.map((row, idx) => {
              const currentLevels = row.levels?.[0] || {};
              return (
                <tr key={idx} className="transition-all bg-white shadow-sm group dark:bg-gray-900/40 hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                  <td className="px-4 py-4 font-mono text-xs font-bold text-blue-600 border-l rounded-l-xl border-y dark:border-gray-800">
                    #{row.fs_id}
                  </td>
                  <td className="max-w-md px-4 py-4 font-medium text-gray-700 truncate dark:text-gray-300 border-y dark:border-gray-800">
                    {row.question}
                  </td>
                  <td className="px-4 py-4 border-y dark:border-gray-800">
                    <div className="flex gap-2">
                      {["level1", "level2", "level3"].map(lvl => (
                        currentLevels[lvl] && typeof currentLevels[lvl] === 'object' && (
                          <button
                            key={lvl}
                            onClick={(e) => handleOpenLevelReport(e, row, lvl)}
                            className={`px-2.5 py-1 text-[9px] font-black rounded-md uppercase border transition-transform hover:scale-110 active:scale-95 ${statusColors[lvl]}`}
                          >
                            {lvl}
                          </button>
                        )
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right border-r rounded-r-xl border-y dark:border-gray-800">
                    <button
                      onClick={() => handleOpenFullReport(row)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white rounded-lg transition-all"
                    >
                      Report <Info className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {selectedRow && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="w-full max-w-4xl bg-white dark:bg-gray-950 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] border dark:border-gray-800 overflow-hidden">
            <div className="flex items-center justify-between p-6 bg-white border-b dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center gap-3">
                <div className="p-3 text-blue-600 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900 dark:text-white">
                    {viewMode === "all" ? "Comprehensive Report" : `${viewMode.toUpperCase()} Focus View`}
                  </h2>
                  <p className="font-mono text-xs text-gray-400">FSID: {selectedRow.fs_id} • {new Date(selectedRow.created_at).toLocaleDateString()}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedRow(null)}
                className="p-3 text-gray-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto bg-gray-50/30 dark:bg-transparent">
              {["level1", "level2", "level3"].map((lvl) =>
                renderLevelContent(lvl, selectedRow.levels?.[0]?.[lvl] || {})
              )}
            </div>

            <div className="flex items-center justify-between p-6 bg-white border-t dark:border-gray-800 dark:bg-gray-950">
               <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">© Knowledge Diagnostic Engine</p>
               {viewMode !== "all" && (
                 <button 
                  onClick={() => setViewMode("all")}
                  className="text-xs font-bold text-blue-600 hover:underline"
                 >
                   Show Full Report
                 </button>
               )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};