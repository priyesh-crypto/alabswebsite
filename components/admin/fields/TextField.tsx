"use client";

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  hint?: string;
  type?: "text" | "url" | "email";
  disabled?: boolean;
};

export default function TextField({
  label, value, onChange, placeholder, required, hint, type = "text", disabled,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-[#09263f] uppercase tracking-wide">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="border border-gray-300 rounded-md h-9 px-3 text-sm outline-none focus:border-[#1de5b5] disabled:bg-gray-50 disabled:text-gray-400"
      />
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}
