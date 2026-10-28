import { useState } from "react";
import FilterChips, { type FilterChipOption } from "@/components/FilterChips";

// Temporary playground for FRO-88. Recreates the weekday filter from the design.
const days: FilterChipOption[] = [
  { value: "mon", label: "จันทร์" },
  { value: "tue", label: "อังคาร" },
  { value: "wed", label: "พุธ" },
  { value: "thu", label: "พฤหัสบดี" },
  { value: "fri", label: "ศุกร์" },
  { value: "sat", label: "เสาร์" },
  { value: "sun", label: "อาทิตย์" },
];

const FilterChipsDemoPage = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>(["mon", "tue"]);

  return (
    <div className="flex min-h-screen max-w-[402px] flex-col gap-[7px] p-4">
      <div className="flex items-center gap-1.5">
        <p className="font-display text-body-sm text-muted">วันในสัปดาห์</p>
        <hr className="border-muted flex-1" />
      </div>
      <FilterChips
        aria-label="วันในสัปดาห์"
        options={days}
        value={selectedDays}
        onChange={setSelectedDays}
      />
    </div>
  );
};

export default FilterChipsDemoPage;
