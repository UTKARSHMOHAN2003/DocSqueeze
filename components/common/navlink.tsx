import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
export function Navlink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors text-sm text-gray-600 duration-300 ease-in-out hover:text-blue-600"
      )}
    >
      {children}
    </Link>
  );
}

export default Navlink;
