import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  FiSearch,
  FiEye,
  FiEdit3,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const sampleUsers = [
  {
    fsid: "123564",
    name: "Albert Flores",
    email: "lawson@gmail.com",
    status: "active",
    joinedAt: "2014-05-09",
  },
  {
    fsid: "123564",
    name: "Cody Fisher",
    email: "lawson@gmail.com",
    status: "active",
    joinedAt: "2018-03-06",
  },
  {
    fsid: "123564",
    name: "Floyd Miles",
    email: "lawson@gmail.com",
    status: "active",
    joinedAt: "2013-03-23",
  },
  {
    fsid: "123564",
    name: "Robert Fox",
    email: "lawson@gmail.com",
    status: "active",
    joinedAt: "2017-05-29",
  },
  {
    fsid: "123564",
    name: "Jane Cooper",
    email: "lawson@gmail.com",
    status: "inactive",
    joinedAt: "2015-07-14",
  },
  {
    fsid: "123564",
    name: "Jerome Bell",
    email: "lawson@gmail.com",
    status: "inactive",
    joinedAt: "2014-03-13",
  },
  {
    fsid: "123564",
    name: "Jerome Bell",
    email: "lawson@gmail.com",
    status: "pending",
    joinedAt: "2014-03-13",
  },
  {
    fsid: "123564",
    name: "Jerome Bell",
    email: "lawson@gmail.com",
    status: "pending",
    joinedAt: "2014-03-13",
  },
  {
    fsid: "123564",
    name: "Jerome Bell",
    email: "lawson@gmail.com",
    status: "pending",
    joinedAt: "2014-03-13",
  },
  {
    fsid: "123564",
    name: "Jerome Bell",
    email: "lawson@gmail.com",
    status: "pending",
    joinedAt: "2014-03-13",
  },
];

const statusClass = (s) =>
  s === "active"
    ? "text-green-600"
    : s === "inactive"
    ? "text-red-600"
    : "text-orange-500";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Chip = ({ label, count, className, onClick }) => (
  <button
    className={`px-4 py-2 rounded-md text-white text-sm ${className}`}
    onClick={onClick}
  >
    {label} ({count})
  </button>
);

const UserManagment = () => {
  const [users] = useState(sampleUsers);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("recent");
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const totals = useMemo(() => {
    const all = users.length;
    const active = users.filter((u) => u.status === "active").length;
    const inactive = users.filter((u) => u.status === "inactive").length;
    const pending = users.filter((u) => u.status === "pending").length;
    return { all, active, inactive, pending };
  }, [users]);

  const filtered = useMemo(() => {
    let list = [...users];
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.fsid.toLowerCase().includes(q)
      );
    }
    if (status !== "all") list = list.filter((u) => u.status === status);
    if (sort === "recent") {
      list.sort((a, b) => new Date(b.joinedAt) - new Date(a.joinedAt));
    } else if (sort === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "status") {
      const order = { active: 0, pending: 1, inactive: 2 };
      list.sort((a, b) => order[a.status] - order[b.status]);
    }
    return list;
  }, [users, query, status, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const start = (currentPage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  const setPageSafe = (p) => setPage(Math.min(Math.max(1, p), pageCount));

  return (
    <div className="flex flex-col w-full gap-6 mx-auto ">
      <div className="flex flex-wrap gap-3">
        <Chip
          label="All Users"
          count={totals.all}
          className="bg-blue-600"
          onClick={() => setStatus("all")}
        />
        <Chip
          label="Active"
          count={totals.active}
          className="bg-green-600"
          onClick={() => setStatus("active")}
        />
        <Chip
          label="Inactive"
          count={totals.inactive}
          className="bg-red-600"
          onClick={() => setStatus("inactive")}
        />
        <Chip
          label="Pending"
          count={totals.pending}
          className="bg-orange-500"
          onClick={() => setStatus("pending")}
        />
      </div>

      {/* Search and sort */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center w-full max-w-xl gap-2 px-3 py-2 bg-white border rounded-md">
          <FiSearch className="text-slate-400" />
          <Input
            className="h-8 p-0 text-sm bg-white border-none text-slate-700 placeholder:text-slate-400 focus:ring-0 focus:ring-offset-0"
            placeholder="User and scenario............."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="px-3 py-2 text-sm bg-white border rounded-md">
            Short ▾
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem onClick={() => setSort("recent")}>
              Recent
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSort("name")}>
              Name
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSort("status")}>
              Status
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white border rounded-lg border-slate-200">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left">FS-ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Join Date</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((u, idx) => (
              <tr
                key={`${u.fsid}-${idx}`}
                className="border-t border-slate-200"
              >
                <td className="px-4 py-3 text-slate-700">{u.fsid}</td>
                <td className="px-4 py-3 text-slate-700">{u.name}</td>
                <td className="px-4 py-3 text-slate-700">{u.email}</td>
                <td
                  className={`px-4 py-3 font-medium ${statusClass(u.status)}`}
                >
                  {u.status.charAt(0).toUpperCase() + u.status.slice(1)}
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {formatDate(u.joinedAt)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <button
                      className="p-1 text-blue-600 rounded hover:bg-blue-50"
                      aria-label="View"
                    >
                      <FiEye />
                    </button>
                    <button
                      className="p-1 text-orange-500 rounded hover:bg-orange-50"
                      aria-label="Edit"
                    >
                      <FiEdit3 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {pageItems.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-6 text-center text-slate-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          className="flex items-center justify-center w-8 h-8 border rounded"
          onClick={() => setPageSafe(page - 1)}
          aria-label="Previous"
        >
          <FiChevronLeft />
        </button>

        {pageCount <= 6 ? (
          Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              className={`h-8 w-8 rounded border text-sm ${
                n === currentPage ? "bg-slate-900 text-white" : "bg-gray-500"
              }`}
              onClick={() => setPageSafe(n)}
            >
              {n}
            </button>
          ))
        ) : (
          <>
            <button
              className={`h-8 w-8 rounded border text-sm ${
                currentPage === 1 ? "bg-slate-900 text-white" : "bg-white"
              }`}
              onClick={() => setPageSafe(1)}
            >
              1
            </button>
            <button
              className={`h-8 w-8 rounded border text-sm ${
                currentPage === 2 ? "bg-slate-900 text-white" : "bg-white"
              }`}
              onClick={() => setPageSafe(2)}
            >
              2
            </button>
            <span className="flex items-center justify-center w-8 h-8">…</span>
            <button
              className={`h-8 w-8 rounded border text-sm ${
                currentPage === pageCount - 1
                  ? "bg-slate-900 text-white"
                  : "bg-white"
              }`}
              onClick={() => setPageSafe(pageCount - 1)}
            >
              {pageCount - 1}
            </button>
            <button
              className={`h-8 w-8 rounded border text-sm ${
                currentPage === pageCount
                  ? "bg-slate-900 text-white"
                  : "bg-white"
              }`}
              onClick={() => setPageSafe(pageCount)}
            >
              {pageCount}
            </button>
          </>
        )}
        <button
          className="flex items-center justify-center w-8 h-8 border rounded"
          onClick={() => setPageSafe(page + 1)}
          aria-label="Next"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default UserManagment;
