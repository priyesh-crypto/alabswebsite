"use client";

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  hint?: string;
  rows?: number;
  disabled?: boolean;
};

export default function TextareaField({
  label, value, onChange, placeholder, required, hint, rows = 4, disabled,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-[#09263f] uppercase tracking-wide">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#1de5b5] resize-y disabled:bg-gray-50 disabled:text-gray-400"
      />
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}
