import React, { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { useAdminFsidStats } from "@/features/admin/query";
import { useSearchParams } from "react-router-dom";

const statusColors = {
  "Level 01": "bg-blue-100 text-blue-700",
  "Level 02": "bg-orange-100 text-orange-700",
  "Level 03": "bg-emerald-100 text-emerald-700",
};

// Wrapper moved outside render to avoid component creation during render
const Wrapper = ({ children, isModal }) =>
  isModal ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 ">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200 dark:border-gray-800">
        {children}
      </div>
    </div>
  ) : (
    <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 shadow-sm dark:bg-gray-900 rounded-xl dark:border-gray-800">
      {children}
    </div>
  );

const detailContent = {
  summary:
    "The helpdesk team is receiving more tickets than they can handle daily.",
  causes: [
    "Increased customer inquiries due to new product launch",
    "Insufficient ticket routing",
    "Limited staffing during peak hours",
  ],
  levelDetail: "Level 02 - Q&A Answer (Free)",
};

const sampleRows = [
  {
    id: "12453",
    problem: "Helpdesk overwhelmed with tickets buy alamin",
    status: "Level 02",
    date: "May 9, 2014",
    ...detailContent,
  },
  {
    id: "12454",
    problem: "Helpdesk overwhelmed with tickets",
    status: "Level 03",
    date: "May 9, 2014",
    ...detailContent,
  },
  {
    id: "12455",
    problem: "Helpdesk overwhelmed with tickets",
    status: "Level 01",
    date: "May 9, 2014",
    ...detailContent,
  },
  {
    id: "12456",
    problem: "Helpdesk overwhelmed with tickets",
    status: "Level 02",
    date: "May 9, 2014",
    ...detailContent,
  },
  {
    id: "12457",
    problem: "Helpdesk overwhelmed with tickets",
    status: "Level 03",
    date: "May 9, 2014",
    ...detailContent,
  },
  {
    id: "12458",
    problem: "Helpdesk overwhelmed with tickets",
    status: "Level 02",
    date: "May 9, 2014",
    ...detailContent,
  },
  {
    id: "12459",
    problem: "Helpdesk overwhelmed with tickets",
    status: "Level 01",
    date: "May 9, 2014",
    ...detailContent,
  },
  {
    id: "12460",
    problem: "Helpdesk overwhelmed with tickets",
    status: "Level 02",
    date: "May 9, 2014",
    ...detailContent,
  },
  {
    id: "12461",
    problem: "Helpdesk overwhelmed with tickets",
    status: "Level 01",
    date: "May 9, 2014",
    ...detailContent,
  },
  {
    id: "12462",
    problem: "Helpdesk overwhelmed with tickets",
    status: "Level 03",
    date: "May 9, 2014",
    ...detailContent,
  },
  {
    id: "12463",
    problem: "Helpdesk overwhelmed with tickets",
    status: "Level 02",
    date: "May 9, 2014",
    ...detailContent,
  },
  {
    id: "12464",
    problem: "Helpdesk overwhelmed with tickets",
    status: "Level 03",
    date: "May 9, 2014",
    ...detailContent,
  },
];

export const FsIdDetail = ({ onClose, user, isModal = true }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchParams] = useSearchParams();

  // Determine effective uid: prop -> query ?uid= -> prop id fallback
  const effectiveUid = user?.uid || searchParams.get("uid") || user?.id;

  // Fetch dataset via hook (enabled only when uid exists in hook implementation)
  const { data: fsidStats } = useAdminFsidStats(effectiveUid);

  // Normalize API items to table rows; fallback to sampleRows when empty
  const normalizedRows = Array.isArray(fsidStats)
    ? fsidStats.map((item) => {
        const id = item?.fs_id ?? item?.id ?? "";
        const problem = item?.question ?? "";
        const s = item?.status || {};
        const status = s?.level3
          ? "Level 03"
          : s?.level2
            ? "Level 02"
            : s?.level1
              ? "Level 01"
              : "Level 01";
        const createdRaw = item?.created_at ?? item?.createdAt ?? "";
        const date = createdRaw
          ? new Date(createdRaw).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : "";
        return { id, problem, status, date, ...detailContent };
      })
    : [];

  const rows = normalizedRows.length ? normalizedRows : sampleRows;

  // Pagination logic
  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRows = rows.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  // Wrapper declared above

  const closeAction = onClose || (() => {});

  return (
    <Wrapper isModal={isModal}>
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between w-full px-5 py-4 bg-white border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-700 dark:text-gray-200">
          <button
            type="button"
            onClick={closeAction}
            className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <ArrowLeft className="w-4 h-4" /> Back Profile
          </button>
          <span className="text-gray-300">|</span>
          <span className="text-gray-600 dark:text-gray-300">
            {user?.name || "Alex Rivers"}
          </span>
        </div>
        {isModal && (
          <button
            type="button"
            onClick={closeAction}
            className="text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-700 bg-purple-100 dark:bg-purple-900/40 dark:text-gray-100">
            <tr>
              <th className="px-6 py-3 font-semibold text-left">FS-ID</th>
              <th className="px-6 py-3 font-semibold text-left">Problem</th>
              <th className="px-6 py-3 font-semibold text-left">Status</th>
              <th className="px-6 py-3 font-semibold text-left">Cre. Date</th>
              <th className="px-6 py-3 font-semibold text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRows.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                <td className="px-6 py-3 text-gray-700 dark:text-gray-200">
                  {row.id}
                </td>
                <td className="px-6 py-3 text-gray-700 dark:text-gray-200">
                  {row.problem}
                </td>
                <td className="px-6 py-3">
                  <span
                    className={`px-3 py-1 rounded text-xs font-semibold ${statusColors[row.status] || "bg-gray-100 text-gray-700"} dark:brightness-90`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-gray-700 dark:text-gray-200">
                  {row.date}
                </td>
                <td className="px-6 py-3">
                  <button
                    type="button"
                    onClick={() => setSelectedRow(row)}
                    className="flex items-center gap-1 px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded dark:bg-blue-900/30"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1 py-3 bg-white border-t border-gray-200 dark:border-gray-800 dark:bg-gray-900">
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-6 h-6 text-xs text-gray-600 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ‹
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => handlePageChange(num)}
            className={`w-6 h-6 text-[11px] rounded border transition-colors ${
              num === currentPage
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {num}
          </button>
        ))}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-6 h-6 text-xs text-gray-600 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ›
        </button>
      </div>

      {/* Row Detail Modal */}
      {selectedRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/60">
          <div className="relative w-full max-w-2xl bg-white border border-gray-100 shadow-2xl dark:bg-gray-900 rounded-xl dark:border-gray-800">
            <button
              type="button"
              onClick={() => setSelectedRow(null)}
              className="absolute text-gray-400 top-3 right-3 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
              aria-label="Close detail"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 space-y-5">
              <div className="p-4 space-y-1 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-100">
                  FS-ID: {selectedRow.id}
                </p>
                <p className="text-lg font-bold text-blue-900 dark:text-blue-50">
                  Problem: {selectedRow.problem}
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-200">
                  {selectedRow.levelDetail}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Summary:
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                  {selectedRow.summary}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Likely causes:
                </h3>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside dark:text-gray-200">
                  {selectedRow.causes?.map((cause, idx) => (
                    <li key={idx}>{cause}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};
