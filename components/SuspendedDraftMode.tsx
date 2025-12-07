import { draftMode } from "next/headers";
import { Suspense } from "react";

interface SuspendedDraftModeProps {
  children: React.ReactNode;
}

export default async function SuspendedDraftMode({
  children,
}: SuspendedDraftModeProps) {
  const draftModeInstance = await draftMode();
  if (draftModeInstance.isEnabled) {
    return <Suspense fallback={null}>{children}</Suspense>;
  }
  return children;
}
