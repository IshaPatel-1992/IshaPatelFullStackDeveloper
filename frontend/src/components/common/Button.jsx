import React from "react";

export default function Button({ href, onClick, variant = "primary", children }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white";

  const styles =
    variant === "primary"
      ? "bg-[#1C4D87] text-white hover:bg-[#163d6c] focus:ring-[#1C4D87]/40 shadow-sm"
      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:ring-slate-400";

  const Comp = href ? "a" : "button";

  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`${base} ${styles}`}
      {...(href ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </Comp>
  );
}