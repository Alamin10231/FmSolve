import React from "react";
import { useTheme } from "@/context/ThemeContext";

const auditLogs = [
  { timestamp: "2024-01-16 10:30:12", user: "example@gmail.com", action: "Login", ip: "192.162.10.16.00" },
  { timestamp: "2024-01-16 10:30:12", user: "example@gmail.com", action: "Generated report", ip: "192.162.10.16.00" },
  { timestamp: "2024-01-16 10:30:12", user: "example@gmail.com", action: "Database backup", ip: "192.162.10.16.00" },
  { timestamp: "2024-01-16 10:30:12", user: "example@gmail.com", action: "Login", ip: "192.162.10.16.00" },
  { timestamp: "2024-01-16 10:30:12", user: "example@gmail.com", action: "Login", ip: "192.162.10.16.00" },
  { timestamp: "2024-01-16 10:30:12", user: "example@gmail.com", action: "Login", ip: "192.162.10.16.00" },
];

export const Security = () => {
  const { theme } = useTheme();

  const bgPrimary = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textPrimary = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <div className="p-4 sm:p-6">
      <div className={`${bgPrimary} rounded-lg shadow-sm border ${borderColor} overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-100">
              <tr>
                {["Timestamp", "User", "Action", "IP"].map((col) => (
                  <th key={col} className="text-left px-6 py-3 font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 dark:border-gray-800 last:border-0"
                >
                  <td className="px-6 py-3 text-gray-700 dark:text-gray-200">{log.timestamp}</td>
                  <td className="px-6 py-3 text-gray-700 dark:text-gray-200">{log.user}</td>
                  <td className="px-6 py-3 text-gray-700 dark:text-gray-200">{log.action}</td>
                  <td className="px-6 py-3 text-gray-700 dark:text-gray-200">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
