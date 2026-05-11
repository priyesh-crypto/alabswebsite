"use client";

type Props = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  hint?: string;
  disabled?: boolean;
};

export default function NumberField({ label, value, onChange, min, max, hint, disabled }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-[#09263f] uppercase tracking-wide">{label}</label>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        disabled={disabled}
        onChange={e => onChange(Number(e.target.value))}
        className="border border-gray-300 rounded-md h-9 px-3 text-sm outline-none focus:border-[#1de5b5] w-36 disabled:bg-gray-50"
      />
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}
