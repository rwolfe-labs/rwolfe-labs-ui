"use client";

import * as React from "react";
import clsx from "clsx";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  notched?: boolean;
};

export function Card({ notched = true, className, children, ...props }: CardProps) {
  return (
    <div className={clsx("wl-card", className)} {...props}>
      {notched ? <span className="wl-card__notch" aria-hidden /> : null}
      {children}
    </div>
  );
}
