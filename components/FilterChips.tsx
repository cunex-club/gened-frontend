import Image from "next/image";

export type FilterChipOption = {
  value: string;
  label: string;
};

type FilterChipsProps = {
  options: FilterChipOption[];
  value: string[];
  onChange: (value: string[]) => void;
  "aria-label"?: string;
};

// Multi-choice group laid out in 3 columns. Each option is a native checkbox.
const FilterChips = ({
  options,
  value,
  onChange,
  "aria-label": ariaLabel,
}: FilterChipsProps) => {
  const toggle = (optionValue: string) => {
    onChange(
      value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue],
    );
  };

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="grid grid-cols-[repeat(3,110px)] gap-x-[7px] gap-y-1.5"
    >
      {options.map((option) => {
        const checked = value.includes(option.value);

        return (
          <label
            key={option.value}
            className="font-display text-title-sm flex cursor-pointer items-center gap-2.5 font-normal"
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => toggle(option.value)}
              className="peer sr-only"
            />
            <Image
              src={
                checked
                  ? "/icons/radio-checked.svg"
                  : "/icons/radio-unchecked.svg"
              }
              alt=""
              width={21}
              height={21}
              unoptimized
              className="peer-focus-visible:outline-primary rounded-full peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2"
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
};

export default FilterChips;
