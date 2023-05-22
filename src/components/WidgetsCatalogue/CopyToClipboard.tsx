"use client";

import React, { useCallback } from "react";
import * as Toast from "@radix-ui/react-toast";
import { useClipboard } from "@/utils/useClipboard";

interface CopyToClipboardProps {
  children: React.ReactNode;
  url: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ children, url }) => {
  const { onCopy, hasCopied, setHasCopied } = useClipboard(url, 0);

  const onClick: React.MouseEventHandler<HTMLAnchorElement> = useCallback(
    (e) => {
      e.preventDefault();
      onCopy();
    },
    [onCopy]
  );

  return (
    <Toast.Provider swipeDirection="right">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center relative rounded-3xl transition duration-300 hover:scale-[1.02] focus-visible:scale-[1.02] active:scale-[.98] transform-gpu [&>*]:select-none"
        onClick={onClick}
      >
        {children}
      </a>

      {/* TODO: Make pretty */}
      <Toast.Root
        className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={hasCopied}
        onOpenChange={setHasCopied}
      >
        <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
          Widget&apos;s{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            link
          </a>{" "}
          copied to clipboard
        </Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  );
};

export default CopyToClipboard;
