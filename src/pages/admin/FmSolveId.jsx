import React, { useMemo, useState } from "react";
import { Eye, Trash2, ChevronDown, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FmSolveId = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const pageSize = 6;

  const users = [
    {
      id: "FS-1201",
      name: "Alex Rivers",
      joinedAt: "October 30, 2017",
      status: "Active",
      totalFsId: 120,
      reports: 3,
      triagePacks: 2,
      avatar: "https://i.pravatar.cc/80?img=1",
    },
    {
      id: "FS-1202",
      name: "Jamie Cole",
      joinedAt: "September 12, 2018",
      status: "Active",
      totalFsId: 98,
      reports: 4,
      triagePacks: 1,
      avatar: "https://i.pravatar.cc/80?img=2",
    },
    {
      id: "FS-1203",
      name: "Taylor Howard",
      joinedAt: "January 05, 2019",
      status: "Active",
      totalFsId: 140,
      reports: 6,
      triagePacks: 4,
      avatar: "https://i.pravatar.cc/80?img=3",
    },
    {
      id: "FS-1204",
      name: "Morgan Blake",
      joinedAt: "March 18, 2020",
      status: "Inactive",
      totalFsId: 75,
      reports: 2,
      triagePacks: 0,
      avatar: "https://i.pravatar.cc/80?img=4",
    },
    {
      id: "FS-1205",
      name: "Casey Lin",
      joinedAt: "August 09, 2021",
      status: "Active",
      totalFsId: 110,
      reports: 5,
      triagePacks: 3,
      avatar: "https://i.pravatar.cc/80?img=5",
    },
    {
      id: "FS-1206",
      name: "Jordan Fox",
      joinedAt: "May 27, 2022",
      status: "Active",
      totalFsId: 132,
      reports: 7,
      triagePacks: 5,
      avatar: "https://i.pravatar.cc/80?img=6",
    },
    {
      id: "FS-1207",
      name: "Drew Patel",
      joinedAt: "July 14, 2022",
      status: "Inactive",
      totalFsId: 60,
      reports: 1,
      triagePacks: 0,
      avatar: "https://i.pravatar.cc/80?img=7",
    },
    {
      id: "FS-1208",
      name: "Riley Chen",
      joinedAt: "December 02, 2023",
      status: "Active",
      totalFsId: 90,
      reports: 2,
      triagePacks: 1,
      avatar: "https://i.pravatar.cc/80?img=8",
    },
  ];

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    let list = users.filter(
      (u) => u.name.toLowerCase().includes(q) || u.id.toLowerCase().includes(q)
    );

    if (sortBy === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "oldest") {
      list = [...list].reverse();
    }
    return list;
  }, [query, sortBy, users]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);

  const statusBadge = (status) =>
    status === "Active"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-gray-200 text-gray-700";

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
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center w-full md:max-w-xl gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search user name and fs-id"
              className="w-full text-sm text-gray-700 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none bg-transparent"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-300">Sort by</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-blue-600 text-white text-sm font-semibold px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none"
              >
                <option value="newest">Newest</option>
                <option value="name">Name</option>
                <option value="oldest">Oldest</option>
              </select>
              <ChevronDown className="w-4 h-4 text-white absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visible.map((user) => (
            <div
              key={user.id}
              className="bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-gray-700 shadow-sm p-4 flex flex-col gap-3"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover border border-white shadow"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{user.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{user.joinedAt}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusBadge(user.status)} dark:brightness-90`}>
                  {user.status}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white dark:bg-gray-900 rounded-md border border-blue-100 dark:border-gray-700 p-3 text-center">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Total FS-ID</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{user.totalFsId}</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-md border border-blue-100 dark:border-gray-700 p-3 text-center">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Report Purchased</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{user.reports}</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-md border border-blue-100 dark:border-gray-700 p-3 text-center">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Full Triage Pack</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{user.triagePacks}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleView(user)}
                  className="flex-1 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-2 rounded-md flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" /> View FS-ID
                </button>
                <button
                  type="button"
                  onClick={() => handleRemove(user)}
                  className="flex-1 bg-white dark:bg-gray-900 border border-red-200 dark:border-red-300/60 text-red-600 text-sm font-semibold py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-50 dark:hover:bg-red-50/10"
                >
                  <Trash2 className="w-4 h-4" /> Remove
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
