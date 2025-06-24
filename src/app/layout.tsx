// src/app/layout.tsx
export const metadata = {
  // ← This text shows up in the browser tab, bookmarks, and search-results snippets
  title: "Kongwell.com",
  description: "Kongwell Energy Trading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
