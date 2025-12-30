"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const DropdownRoot = DropdownMenu.Root;
export const DropdownTrigger = DropdownMenu.Trigger;

export function DropdownContent(props: DropdownMenu.DropdownMenuContentProps) {
  const { children, ...rest } = props;
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content className="wl-menu" sideOffset={8} {...rest}>
        <span className="wl-menu__notch" aria-hidden />
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
}

export function DropdownItem(props: DropdownMenu.DropdownMenuItemProps) {
  const { children, ...rest } = props;
  return (
    <DropdownMenu.Item className="wl-menu__item" {...rest}>
      {children}
    </DropdownMenu.Item>
  );
}
