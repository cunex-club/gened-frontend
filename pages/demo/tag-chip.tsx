import { useState } from "react";
import TagChip from "@/components/TagChip";

// Temporary playground for FRO-92. Shows tags as plain labels and as a hashtag filter.
const hashtags = [
  "#ออนไลน์",
  "#งานกลุ่ม",
  "#มีสอบ",
  "#ไม่มีสอบ",
  "#สอบล้วน",
  "#ออนไซต์",
  "#ไฮบริด",
];

const TagChipDemoPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(["#ออนไลน์"]);

  const toggleTag = (tag: string) => {
    setSelectedTags((tags) =>
      tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag],
    );
  };

  return (
    <div className="flex min-h-screen max-w-[402px] flex-col gap-8 p-4">
      <div className="flex gap-1.5">
        <TagChip>#ออนไลน์</TagChip>
        <TagChip>#งานเดี่ยว</TagChip>
        <TagChip>#มีสอบ</TagChip>
      </div>

      <div className="flex flex-col gap-[7px]">
        <div className="flex items-center gap-[5px]">
          <p className="font-display text-body-sm text-muted">แฮชแท็ก</p>
          <hr className="border-muted flex-1" />
        </div>
        <div className="flex flex-wrap gap-x-1.5 gap-y-2">
          {hashtags.map((tag) => (
            <TagChip
              key={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </TagChip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagChipDemoPage;
