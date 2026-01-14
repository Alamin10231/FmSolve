import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-200 ring-offset-slate-950 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
