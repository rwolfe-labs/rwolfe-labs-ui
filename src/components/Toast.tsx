"use client";

import * as React from "react";
import * as Toast from "@radix-ui/react-toast";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <Toast.Provider>{children}</Toast.Provider>;
}

export function ToastViewport() {
  return <Toast.Viewport className="wl-toast-viewport" />;
}

export function ToastRoot(props: Toast.ToastProps) {
  return <Toast.Root className="wl-toast" {...props} />;
}

export function ToastContent({ title }: { title: string }) {
  return (
    <>
      <span className="wl-toast__notch" aria-hidden />
      <Toast.Title className="wl-toast__title">{title}</Toast.Title>
    </>
  );
}
