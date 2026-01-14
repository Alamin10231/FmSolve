import { createContext, useContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [serviceIndex, setServiceIndex] = useState(0);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeContext.Provider
        value={{ theme, toggleTheme, serviceIndex, setServiceIndex }}
      >
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
// Note: useTheme is exported from a separate file to keep fast-refresh happy
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
