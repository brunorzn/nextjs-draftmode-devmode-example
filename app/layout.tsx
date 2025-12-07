"use cache";
import SuspendedDraftMode from "@/components/SuspendedDraftMode";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SuspendedDraftMode>
        <body>{children}</body>
      </SuspendedDraftMode>
    </html>
  );
}
