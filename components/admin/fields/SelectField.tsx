"use client";

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  hint?: string;
  disabled?: boolean;
};

export default function SelectField({ label, value, onChange, options, required, hint, disabled }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-[#09263f] uppercase tracking-wide">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        className="border border-gray-300 rounded-md h-9 px-3 text-sm outline-none focus:border-[#1de5b5] bg-white disabled:bg-gray-50"
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}
