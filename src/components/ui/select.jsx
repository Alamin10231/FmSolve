import * as React from "react";
import { cn } from "@/lib/utils";

const SelectContext = React.createContext(null);

export const Select = ({ children, value, defaultValue, onValueChange }) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(defaultValue ?? null);

  React.useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  const setValue = (val) => {
    setSelected(val);
    onValueChange?.(val);
    setOpen(false);
  };

  const ctx = React.useMemo(
    () => ({ open, setOpen, selected, setValue }),
    [open, selected]
  );

  return (
    <SelectContext.Provider value={ctx}>{children}</SelectContext.Provider>
  );
};

export const SelectTrigger = ({ className, children }) => {
  const { open, setOpen } = React.useContext(SelectContext);
  return (
    <button
      type="button"
      aria-haspopup="listbox"
      aria-expanded={open}
      className={cn(
        "flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm",
        className
      )}
      onClick={() => setOpen(!open)}
    >
      {children}
    </button>
  );
};

export const SelectValue = ({ placeholder }) => {
  const { selected } = React.useContext(SelectContext);
  return (
    <span className={cn("text-slate-400", !selected && "opacity-70")}>
      {selected ?? placeholder}
    </span>
  );
};

export const SelectContent = ({ className, children }) => {
  const { open } = React.useContext(SelectContext);
  if (!open) return null;
  return (
    <div
      role="listbox"
      className={cn("mt-2 w-full rounded-md border p-1", className)}
    >
      {children}
    </div>
  );
};

export const SelectItem = ({ value, children, className }) => {
  const { setValue, selected } = React.useContext(SelectContext);
  return (
    <div
      role="option"
      aria-selected={selected === value}
      onClick={() => setValue(value)}
      className={cn(
        "cursor-pointer rounded-md px-3 py-2 text-sm hover:bg-slate-800",
        selected === value && "bg-slate-800",
        className
      )}
    >
      {children}
    </div>
  );
};
