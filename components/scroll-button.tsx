"use client";

import { trackEvent } from "fathom-client";
import { ReactNode } from "react";

interface ScrollButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  targetId: string;
  children: ReactNode;
  offset?: number;
  fathomEvent?: string;
}

export default function ScrollButton({
  targetId,
  fathomEvent,
  offset = 0,
  children,
  ...props
}: ScrollButtonProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: "smooth" });

      history.pushState(null, "", `#${targetId}`);

      if (fathomEvent) {
        trackEvent(fathomEvent);
      }
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
