"use client";

import * as React from "react";
import clsx from "clsx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return <input className={clsx("wl-input", className)} {...props} />;
}
