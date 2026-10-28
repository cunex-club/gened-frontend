import Image from "next/image";
import type { SelectHTMLAttributes } from "react";

type DropdownVariant = "default" | "primary";

export type DropdownOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type DropdownProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "value" | "onChange"
> & {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: DropdownVariant;
};

const variantClasses: Record<DropdownVariant, string> = {
  default: "border-foreground",
  primary: "border-primary",
};

const chevronIcons: Record<DropdownVariant, string> = {
  default: "/icons/expand-right.svg",
  primary: "/icons/expand-right-primary.svg",
};

// Uses a native <select> so phones get their built-in picker.
const Dropdown = ({
  options,
  value,
  onChange,
  placeholder,
  variant = "default",
  className = "",
  ...props
}: DropdownProps) => {
  const isEmpty = value === "";

  return (
    <div className={`relative inline-flex ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`font-display text-title-sm h-[43px] w-full cursor-pointer appearance-none rounded-full border bg-white pr-11 pl-3.5 font-normal ${variantClasses[variant]} ${isEmpty ? "text-muted" : "text-foreground"}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      <Image
        src={chevronIcons[variant]}
        alt=""
        width={24}
        height={24}
        unoptimized
        className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 rotate-90"
      />
    </div>
  );
};

export default Dropdown;
