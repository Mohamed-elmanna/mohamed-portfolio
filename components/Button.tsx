import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline-dark";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",
  secondary:
    "border border-slate-300 text-slate-700 hover:bg-slate-100",
  "outline-dark":
    "border border-slate-600 text-white hover:bg-slate-700",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  target,
  rel,
  ...rest
}: Props) {
  const isExternal = target === "_blank";

  return (
    <a
      target={target}
      rel={isExternal ? rel ?? "noopener noreferrer" : rel}
      className={`inline-block rounded-xl px-6 py-3 text-center font-semibold transition ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
