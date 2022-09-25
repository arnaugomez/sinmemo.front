import { AppShell } from "@mantine/core";
import { PropsWithChildren } from "react";
import { MainHeader } from "./MainHeader";

export function MainShell({ children }: PropsWithChildren) {
  return (
    <AppShell header={<MainHeader />}>
      {children}
    </AppShell>
  );
}
