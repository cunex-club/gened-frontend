import Image from "next/image";
import { useState } from "react";
import Button from "@/components/Button";
import Dialog from "@/components/Dialog";

// Temporary playground for FRO-90. Recreates the two dialogs from the ticket.
const schedules = ["ปี 2 เทอม 2"];

const DialogDemoPage = () => {
  const [conflictOpen, setConflictOpen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen flex-col items-start gap-3 p-4">
      <Button onClick={() => setConflictOpen(true)} className="w-[191px]">
        ตารางเรียนมีวิชาชนกัน
      </Button>
      <Button onClick={() => setPickerOpen(true)} className="w-[191px]">
        เลือกตาราง
      </Button>

      <Dialog
        open={conflictOpen}
        onClose={() => setConflictOpen(false)}
        title="ตารางเรียนมีวิชาชนกัน"
        description="รายวิชานี้มีเวลาเรียนชนกับวิชาในตารางปัจจุบัน ต้องการเพิ่มวิชานี้อยู่หรือไม่?"
      >
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() => setConflictOpen(false)}
            className="w-[149px]"
          >
            ยกเลิก
          </Button>
          <Button onClick={() => setConflictOpen(false)} className="w-[155px]">
            เพิ่มเข้าตาราง
          </Button>
        </div>
      </Dialog>

      <Dialog
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        title="เลือกตารางที่ต้องการจะเพิ่ม"
        description="แสดงเฉพาะตารางเรียนที่สามารถเพิ่มรายวิชานี้ได้"
        showCloseButton
      >
        <div className="font-display text-title-sm flex w-[267px] flex-col gap-[7px] p-2.5 font-normal">
          {schedules.map((schedule) => (
            <label
              key={schedule}
              className="flex cursor-pointer items-center gap-2.5"
            >
              <input
                type="radio"
                name="schedule"
                checked={selected === schedule}
                onChange={() => setSelected(schedule)}
                className="peer sr-only"
              />
              <span className="border-primary peer-checked:bg-primary flex size-[21px] items-center justify-center rounded-full border peer-checked:shadow-[inset_0_0_0_4px_white] peer-focus-visible:outline-2" />
              {schedule}
            </label>
          ))}
          <button
            type="button"
            className="text-primary flex cursor-pointer items-center gap-2.5"
          >
            <Image
              src="/icons/add-ring.svg"
              alt=""
              width={21}
              height={21}
              unoptimized
            />
            เพิ่มตารางใหม่
          </button>
        </div>
        <Button
          disabled={!selected}
          onClick={() => setPickerOpen(false)}
          className="text-body-lg h-[43px] w-[191px]"
        >
          เพิ่มลงตารางเรียน
        </Button>
      </Dialog>
    </div>
  );
};

export default DialogDemoPage;
