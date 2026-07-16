import type { ReactNode } from "react";

type Props = {
  id?: string;
  maxWidth?: "4xl" | "5xl" | "6xl" | "7xl";
  className?: string;
  children: ReactNode;
};

const MAX_WIDTH_CLASSES: Record<NonNullable<Props["maxWidth"]>, string> = {
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export default function Section({
  id,
  maxWidth = "6xl",
  className = "",
  children,
}: Props) {
  return (
    <section id={id} className={className}>
      <div className={`mx-auto ${MAX_WIDTH_CLASSES[maxWidth]} px-6`}>
        {children}
      </div>
    </section>
  );
}
