import type { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost";
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5";
  const variants = {
    primary: "bg-wheat text-soil hover:bg-wheat-soft",
    ghost: "border border-parchment/30 text-parchment hover:border-parchment",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
