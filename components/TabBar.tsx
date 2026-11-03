import { useRef, type KeyboardEvent } from "react";

export type Tab = {
  value: string;
  label: string;
};

type TabBarProps = {
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  "aria-label"?: string;
};

// Equal-width tabs. Left/Right arrow keys move between tabs, like a native tab list.
const TabBar = ({
  tabs,
  value,
  onChange,
  "aria-label": ariaLabel,
}: TabBarProps) => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

    const step = e.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + step + tabs.length) % tabs.length;
    onChange(tabs[nextIndex].value);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div role="tablist" aria-label={ariaLabel} className="flex w-full">
      {tabs.map((tab, index) => {
        const selected = tab.value === value;

        return (
          <button
            key={tab.value}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`font-display text-body-lg text-primary h-[47px] flex-1 cursor-pointer border-b-4 ${
              selected ? "border-primary font-bold" : "border-transparent"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;
