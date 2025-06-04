"use client";

import { ReactNode } from "react";

interface ScrollButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  targetId: string;
  children: ReactNode;
  offset?: number;
}

export default function ScrollButton({
  targetId,
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
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
