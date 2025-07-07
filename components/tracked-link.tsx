"use client";

import { trackEvent } from "fathom-client";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  children: ReactNode;
}

export default function TrackedLink({
  eventName,
  children,
  onClick,
  ...rest
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName);
    if (onClick) onClick(e);
  };

  return (
    <a onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
