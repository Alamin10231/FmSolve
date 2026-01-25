import React, { useMemo, useState } from "react";
import { Eye, Pencil, ChevronDown, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAdminFsidStatsWithoutUid } from "@/features/admin/query";

export const FmSolveId = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const pageSize = 6;

  // Fetch API data
  const { data, isLoading, isError } = useAdminFsidStatsWithoutUid() || {};
  console.log("fmiddata", data);

  // Filter & sort data for new API structure
  const filtered = useMemo(() => {
    if (!data) return [];

    const q = query.toLowerCase();

    let list = data.filter(
      (item) =>
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.email && item.email.toLowerCase().includes(q)) ||
        (item.status && item.status.toLowerCase().includes(q)),
    );

    if (sortBy === "name") {
      list = [...list].sort((a, b) =>
        (a.name || "").localeCompare(b.name || ""),
      );
    } else if (sortBy === "oldest") {
      list = [...list].reverse();
    }

    return list;
  }, [data, query, sortBy]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);

  const handleView = (item) => {
    navigate(`/admin/fmsolveid/${item.fs_id}`);
  };

  const handleRemove = (item) => {
    console.log("Remove user", item.fs_id);
  };

  const paginationNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  };

  // Loading & error states
  if (isLoading) return <p className="mt-10 text-center">Loading...</p>;
  if (isError)
    return (
      <p className="mt-10 text-center text-red-500">Failed to load data</p>
    );

  return (
    <div className="relative min-h-screen p-6 bg-gray-50 dark:bg-gray-900 sm:p-8">
      <div className="mx-auto space-y-6 max-w-7xl">
        {/* Search + Sort */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center w-full gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm md:max-w-xl dark:bg-gray-800 dark:border-gray-700">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search user name, fs-id or question"
              className="w-full text-sm text-gray-700 bg-transparent dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Sort by
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 pr-8 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm appearance-none focus:outline-none"
              >
                <option value="newest">Newest</option>
                <option value="name">Name</option>
                <option value="oldest">Oldest</option>
              </select>
              <ChevronDown className="absolute w-4 h-4 text-white -translate-y-1/2 pointer-events-none right-2 top-1/2" />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {visible.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-3 p-4 border border-blue-100 rounded-lg shadow-sm bg-blue-50 dark:bg-gray-800 dark:border-gray-700"
            >
              {/* Header */}
           <div className="flex items-start justify-between p-3 bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <div className="flex flex-col gap-1">
    {/* Name or placeholder */}
    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
      {item.name || "No Name Provided"}
    </p>

    {/* Email */}
    <p className="w-64 text-xs text-gray-500 truncate dark:text-gray-400">
      {item.email}
    </p>

    {/* Joined Date */}
    {item.date_joined && (
      <p className="text-xs font-medium text-gray-400 dark:text-gray-500">
        Joined: {new Date(item.date_joined).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    )}
  </div>

  {/* Optional: Action buttons or avatar */}
  <div className="flex items-center gap-2">
    {/* Example: Avatar placeholder */}
    <div className="flex items-center justify-center w-10 h-10 font-bold text-gray-500 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
      {item.name ? item.name.charAt(0).toUpperCase() : "?"}
    </div>
  </div>
</div>


              {/* Stats */}
              <div className="grid grid-cols-4 gap-2">
                <div className="p-3 text-center bg-white border border-blue-100 rounded-md dark:bg-gray-900 dark:border-gray-700">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Total FS
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {item.total_fs}
                  </p>
                </div>
                <div className="p-3 text-center bg-white border border-blue-100 rounded-md dark:bg-gray-900 dark:border-gray-700">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Level 1
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {item.level1}
                  </p>
                </div>
                <div className="p-3 text-center bg-white border border-blue-100 rounded-md dark:bg-gray-900 dark:border-gray-700">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Level 2
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {item.level2}
                  </p>
                </div>
                <div className="p-3 text-center bg-white border border-blue-100 rounded-md dark:bg-gray-900 dark:border-gray-700">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Level 3
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {item.level3}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleView(item)}
                  className="flex items-center justify-center flex-1 gap-2 py-2 text-sm font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800"
                >
                  <Eye className="w-4 h-4" /> View
                </button>
                <button
                  type="button"
                  onClick={() => handleRemove(item)}
                  className="flex items-center justify-center flex-1 gap-2 py-2 text-sm font-semibold text-red-600 bg-white border border-red-200 rounded-md dark:bg-gray-900 dark:border-red-300/60 hover:bg-red-50 dark:hover:bg-red-50/10"
                >
                  <Pencil className="w-4 h-4" /> Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 pt-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="w-6 h-6 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            ‹
          </button>

          {paginationNumbers().map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-6 h-6 text-[11px] rounded border ${
                num === currentPage
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="w-6 h-6 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
