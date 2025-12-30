"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
  notched?: boolean;
};

export function Button({
  variant = "primary",
  asChild = false,
  notched = true,
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp: any = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx("wl-button", `wl-button--${variant}`, className)}
      {...props}
    >
      {children}
      {notched ? <span className="wl-button__notch" aria-hidden /> : null}
    </Comp>
  );
}
