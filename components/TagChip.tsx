import type { ReactNode } from "react";

type TagChipProps = {
  children: ReactNode;
  selected?: boolean;
  // Pass onClick to make the tag a toggle (e.g. hashtag filter). Without it, it's a plain label.
  onClick?: () => void;
};

const TagChip = ({ children, selected = false, onClick }: TagChipProps) => {
  const className = `font-display text-body-sm border-primary flex h-[27px] shrink-0 items-center justify-center rounded-full border px-2.5 whitespace-nowrap ${
    selected ? "bg-primary text-white" : "text-primary bg-white"
  }`;

  if (!onClick) {
    return <span className={className}>{children}</span>;
  }

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`${className} cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default TagChip;
