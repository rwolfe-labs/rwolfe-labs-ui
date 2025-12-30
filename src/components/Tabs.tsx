"use client";

import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";

export function TabsRoot(props: Tabs.TabsProps) {
  return <Tabs.Root {...props} />;
}

export function TabsList(props: Tabs.TabsListProps) {
  return <Tabs.List className="wl-tabs" {...props} />;
}

export function TabsTrigger(props: Tabs.TabsTriggerProps) {
  return <Tabs.Trigger className="wl-tabs__trigger" {...props} />;
}

export function TabsContent(props: Tabs.TabsContentProps) {
  return <Tabs.Content className="wl-tabs__content" {...props} />;
}
