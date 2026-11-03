import Image from "next/image";

export type RadioChipOption = {
  value: string;
  label: string;
};

type RadioChipsProps = {
  name: string;
  options: RadioChipOption[];
  value: string;
  onChange: (value: string) => void;
  "aria-label"?: string;
};

// Single-choice group. Each option is a native radio input, so keyboard arrows work.
const RadioChips = ({
  name,
  options,
  value,
  onChange,
  "aria-label": ariaLabel,
}: RadioChipsProps) => {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className="flex flex-wrap gap-x-[7px] gap-y-1.5"
    >
      {options.map((option) => {
        const checked = option.value === value;

        return (
          <label
            key={option.value}
            className="font-display text-title-sm flex cursor-pointer items-center gap-2.5 font-normal"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={checked}
              onChange={() => onChange(option.value)}
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

export default RadioChips;
