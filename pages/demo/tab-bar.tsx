import { useState } from "react";
import TabBar, { type Tab } from "@/components/TabBar";

// Temporary playground for FRO-97. Recreates the subject detail / review tabs.
const tabs: Tab[] = [
  { value: "detail", label: "รายละเอียดวิชา" },
  { value: "review", label: "รีวิว" },
];

const TabBarDemoPage = () => {
  const [activeTab, setActiveTab] = useState("detail");

  return (
    <div className="flex min-h-screen max-w-[440px] flex-col gap-4 px-[33px] py-4">
      <TabBar
        aria-label="ข้อมูลรายวิชา"
        tabs={tabs}
        value={activeTab}
        onChange={setActiveTab}
      />
      <p className="font-display text-body-md">
        {activeTab === "detail" ? "รายละเอียดวิชา…" : "รีวิวจากรุ่นพี่…"}
      </p>
    </div>
  );
};

export default TabBarDemoPage;
