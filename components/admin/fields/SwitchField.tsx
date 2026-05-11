"use client";

type Props = {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
  hint?: string;
  disabled?: boolean;
};

export default function SwitchField({ label, value, onChange, hint, disabled }: Props) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-semibold text-[#09263f] uppercase tracking-wide">{label}</span>
        {hint && <span className="text-xs text-gray-400">{hint}</span>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        disabled={disabled}
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          value ? "bg-[#1de5b5]" : "bg-gray-200"
        } disabled:opacity-50`}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
