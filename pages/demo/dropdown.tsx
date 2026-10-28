import { useState } from "react";
import Dropdown, { type DropdownOption } from "@/components/Dropdown";

// Temporary playground for FRO-89. Recreates the two dropdown examples from the ticket.
const years: DropdownOption[] = ["2567", "2568", "2569"].map((year) => ({
  value: year,
  label: year,
}));

const terms: DropdownOption[] = [
  { value: "1", label: "เทอมต้น" },
  { value: "2", label: "เทอมปลาย" },
  { value: "3", label: "ภาคฤดูร้อน" },
];

const times: DropdownOption[] = Array.from({ length: 17 }, (_, i) => {
  const time = `${String(i + 6).padStart(2, "0")}:00`;
  return { value: time, label: time };
});

const DropdownDemoPage = () => {
  const [year, setYear] = useState("2569");
  const [term, setTerm] = useState("1");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // The last slot can't be a start time: there's nothing after it to end on.
  const startOptions = times.map((time, i) => ({
    ...time,
    disabled: i === times.length - 1,
  }));
  // Times are zero-padded "HH:00", so plain string comparison orders them correctly.
  const endOptions = times.map((time) => ({
    ...time,
    disabled: startTime !== "" && time.value <= startTime,
  }));

  // If the new start isn't before the end anymore, push the end to one hour after it.
  const handleStartTimeChange = (value: string) => {
    setStartTime(value);
    if (endTime !== "" && value >= endTime) {
      const startIndex = times.findIndex((time) => time.value === value);
      setEndTime(times[startIndex + 1].value);
    }
  };

  return (
    <div className="flex min-h-screen flex-col gap-8 p-4">
      <div className="flex gap-2">
        <Dropdown
          aria-label="ปีการศึกษา"
          options={years}
          value={year}
          onChange={setYear}
        />
        <Dropdown
          aria-label="ภาคการศึกษา"
          options={terms}
          value={term}
          onChange={setTerm}
        />
      </div>

      <div className="flex flex-col gap-[7px]">
        <div className="flex items-center gap-[5px]">
          <p className="font-display text-body-sm text-muted">เวลาเรียน</p>
          <hr className="border-muted flex-1" />
        </div>
        <div className="flex items-center">
          <Dropdown
            aria-label="เวลาเริ่ม"
            variant="primary"
            placeholder="06:00"
            options={startOptions}
            value={startTime}
            onChange={handleStartTimeChange}
          />
          <p className="font-display text-title-sm text-primary w-5 text-center font-normal">
            -
          </p>
          <Dropdown
            aria-label="เวลาสิ้นสุด"
            variant="primary"
            placeholder="22:00"
            options={endOptions}
            value={endTime}
            onChange={setEndTime}
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownDemoPage;
