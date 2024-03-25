import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientProvider from "./CliendProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meetings 4 Us",
  description: "A video calling app built with Next.js and Stream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClientProvider>
            <Navbar />
            <main className="mx-auto max-w-5xl px-3 py-3">{children}</main>
          </ClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
