import { useState } from "react";
import RadioChips, { type RadioChipOption } from "@/components/RadioChips";

// Temporary playground for FRO-87. Recreates the category picker from the design.
const subjectTypes: RadioChipOption[] = [
  { value: "required", label: "วิชาบังคับ" },
  { value: "elective", label: "วิชาบังคับเลือก" },
];

const genEdCategories: RadioChipOption[] = [
  { value: "sci", label: "หมวดวิทย์" },
  { value: "inter", label: "หมวดสหฯ" },
  { value: "social", label: "หมวดสังคม" },
  { value: "human", label: "หมวดมนุษย์" },
];

const RadioChipsDemoPage = () => {
  const [subjectType, setSubjectType] = useState("");
  const [genEdCategory, setGenEdCategory] = useState("inter");

  return (
    <div className="flex min-h-screen max-w-[402px] flex-col gap-[7px] p-4">
      <div className="flex items-center gap-2.5">
        <p className="font-display text-body-sm text-muted">หมวดหมู่</p>
        <hr className="border-muted flex-1" />
      </div>
      <RadioChips
        name="subject-type"
        aria-label="ประเภทวิชา"
        options={subjectTypes}
        value={subjectType}
        onChange={setSubjectType}
      />

      <p className="font-display text-body-sm text-muted mt-1">GenEd</p>
      <RadioChips
        name="gened-category"
        aria-label="หมวด GenEd"
        options={genEdCategories}
        value={genEdCategory}
        onChange={setGenEdCategory}
      />
    </div>
  );
};

export default RadioChipsDemoPage;
