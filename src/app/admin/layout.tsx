import "@/app/(public)/globals.css";

import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Admin Panel",
  description: "Admin panel for the scavenger hunt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <div className="max-w-[90%] mx-auto mt-10">{children}</div>
      </body>
    </html>
  );
}
