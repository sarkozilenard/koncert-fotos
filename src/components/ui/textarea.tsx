import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-36 w-full rounded-md border border-line bg-white px-4 py-3 text-base text-ink transition-colors outline-none placeholder:text-[#8b98ab] focus-visible:border-blue focus-visible:ring-2 focus-visible:ring-blue/30 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
