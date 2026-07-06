import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-sm transition-colors";
  const styles =
    variant === "primary"
      ? "bg-navy text-stone hover:bg-navy/90"
      : "bg-transparent text-navy border border-navy/30 hover:border-navy";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}
