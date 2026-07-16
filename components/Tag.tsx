type Tone = "blue" | "slate" | "white";

type Props = {
  tone?: Tone;
  children: string;
};

const TONE_CLASSES: Record<Tone, string> = {
  blue: "bg-blue-100 text-blue-700",
  slate: "bg-slate-100 text-slate-700",
  white: "bg-white text-slate-700 shadow-sm",
};

export default function Tag({ tone = "blue", children }: Props) {
  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-medium ${TONE_CLASSES[tone]}`}
    >
      {children}
    </span>
  );
}
