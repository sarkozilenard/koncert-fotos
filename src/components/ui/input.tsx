import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-line bg-white px-4 text-base text-ink transition-colors outline-none placeholder:text-[#8b98ab] focus-visible:border-blue focus-visible:ring-2 focus-visible:ring-blue/30 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
