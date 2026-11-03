import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  description?: ReactNode;
  showCloseButton?: boolean;
  children?: ReactNode;
};

const Dialog = ({
  open,
  onClose,
  title,
  description,
  showCloseButton = false,
  children,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Keep the native <dialog> in sync with the `open` prop.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="dialog-title"
      onCancel={(e) => {
        // Let the parent decide whether Esc actually closes it.
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        // A click on the <dialog> itself (not its content) is a backdrop click.
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto w-[347px] max-w-[calc(100%-2rem)] overflow-visible rounded-[9px] bg-white backdrop:bg-black/30"
    >
      <div className="relative flex flex-col items-center gap-3 px-2 py-5">
        {showCloseButton && (
          <button
            type="button"
            aria-label="ปิด"
            onClick={onClose}
            className="absolute top-2.5 right-2.5 cursor-pointer"
          >
            <Image
              src="/icons/close-circle.svg"
              alt=""
              width={27}
              height={26}
              unoptimized
            />
          </button>
        )}

        <div className="font-display flex flex-col items-center gap-1 text-center">
          {/* Not an <h2>: the global heading styles would override the size and color. */}
          <p id="dialog-title" className="text-body-lg font-bold">
            {title}
          </p>
          {description && <p className="text-body-md">{description}</p>}
        </div>

        {children}
      </div>
    </dialog>
  );
};

export default Dialog;
