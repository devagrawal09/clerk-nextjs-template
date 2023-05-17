import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Clerk Starter",
  description:
    "This is a starter project for building a Next.js app with Clerk.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-radial from-white to-gray-300 bg-fixed`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
