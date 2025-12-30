"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

export function ModalRoot(props: Dialog.DialogProps) {
  return <Dialog.Root {...props} />;
}

export const ModalTrigger = Dialog.Trigger;

export function ModalContent({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="wl-overlay" />
      <Dialog.Content className="wl-modal">
        <span className="wl-modal__notch" aria-hidden />
        <Dialog.Title className="wl-modal__title">{title}</Dialog.Title>
        <div className="wl-modal__body">{children}</div>
        <Dialog.Close className="wl-modal__close" aria-label="Close">
          x
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
