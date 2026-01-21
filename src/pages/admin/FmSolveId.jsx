import React, { useMemo, useState } from "react";
import { Eye, Pencil, ChevronDown, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Static sample data moved outside the component to keep stable identity
const USERS = [
  {
    id: "FS-1201",
    name: "Alex Rivers",
    joinedAt: "October 30, 2017",
    totalFsId: 120,
    reports: 3,
    triagePacks: 2,
    avatar: "https://i.pravatar.cc/80?img=1",
  },
  {
    id: "FS-1202",
    name: "Jamie Cole",
    joinedAt: "September 12, 2018",
    totalFsId: 98,
    reports: 4,
    triagePacks: 1,
    avatar: "https://i.pravatar.cc/80?img=2",
  },
  {
    id: "FS-1203",
    name: "Taylor Howard",
    joinedAt: "January 05, 2019",
    totalFsId: 140,
    reports: 6,
    triagePacks: 4,
    avatar: "https://i.pravatar.cc/80?img=3",
  },
  {
    id: "FS-1204",
    name: "Morgan Blake",
    joinedAt: "March 18, 2020",
    totalFsId: 75,
    reports: 2,
    triagePacks: 0,
    avatar: "https://i.pravatar.cc/80?img=4",
  },
  {
    id: "FS-1205",
    name: "Casey Lin",
    joinedAt: "August 09, 2021",
    totalFsId: 110,
    reports: 5,
    triagePacks: 3,
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    id: "FS-1206",
    name: "Jordan Fox",
    joinedAt: "May 27, 2022",
    totalFsId: 132,
    reports: 7,
    triagePacks: 5,
    avatar: "https://i.pravatar.cc/80?img=6",
  },
  {
    id: "FS-1207",
    name: "Drew Patel",
    joinedAt: "July 14, 2022",
    totalFsId: 60,
    reports: 1,
    triagePacks: 0,
    avatar: "https://i.pravatar.cc/80?img=7",
  },
  {
    id: "FS-1208",
    name: "Riley Chen",
    joinedAt: "December 02, 2023",
    totalFsId: 90,
    reports: 2,
    triagePacks: 1,
    avatar: "https://i.pravatar.cc/80?img=8",
  },
];

export const FmSolveId = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const pageSize = 6;

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    let list = USERS.filter(
      (u) => u.name.toLowerCase().includes(q) || u.id.toLowerCase().includes(q),
    );

    if (sortBy === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "oldest") {
      list = [...list].reverse();
    }
    return list;
  }, [query, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);

  const handleView = (user) => {
    navigate(`/admin/fmsolveid/${user.id}`);
  };

  const handleRemove = (user) => {
    console.log("Remove user", user.id);
  };

  const paginationNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="relative min-h-screen p-6 bg-gray-50 dark:bg-gray-900 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
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
              placeholder="Search user name and fs-id"
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
          {visible.map((user) => (
            <div
              key={user.id}
              className="flex flex-col gap-3 p-4 border border-blue-100 rounded-lg shadow-sm bg-blue-50 dark:bg-gray-800 dark:border-gray-700"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="object-cover w-12 h-12 border border-white rounded-full shadow"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {user.joinedAt}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 text-center bg-white border border-blue-100 rounded-md dark:bg-gray-900 dark:border-gray-700">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Total FS-ID
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {user.totalFsId}
                  </p>
                </div>
                <div className="p-3 text-center bg-white border border-blue-100 rounded-md dark:bg-gray-900 dark:border-gray-700">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Report Purchased
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {user.reports}
                  </p>
                </div>
                <div className="p-3 text-center bg-white border border-blue-100 rounded-md dark:bg-gray-900 dark:border-gray-700">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Full Triage Pack
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {user.triagePacks}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleView(user)}
                  className="flex items-center justify-center flex-1 gap-2 py-2 text-sm font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800"
                >
                  <Eye className="w-4 h-4" /> View FS-ID
                </button>
                <button
                  type="button"
                  onClick={() => handleRemove(user)}
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
