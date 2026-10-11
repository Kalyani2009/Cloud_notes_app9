
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cloud Notes | Your Personal Workspace",
  description:
    "Create, organize, search, and manage your notes with Cloud Notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        backgroundColor: "#ffffff",
        color: "#1f2937",
        fontFamily: "Arial, sans-serif"
      }}>
        {children}
      </body>
    </html>
  );
}
