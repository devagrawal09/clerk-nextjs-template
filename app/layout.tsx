import {
  ClerkProvider,
  OrganizationSwitcher,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#000000" },
        elements: {
          formButtonPrimary:
            "bg-black border border-black border-solid hover:bg-white hover:text-black",
          socialButtonsBlockButton:
            "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
          socialButtonsBlockButtonText: "font-semibold",
          formButtonReset:
            "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
          membersPageInviteButton:
            "bg-black border border-black border-solid hover:bg-white hover:text-black",
          card: "bg-[#fafafa]",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <header className="flex h-20 px-8 gap-4 items-center border-b border-solid border-black border-opacity-20">
            <Link href="/" className="flex h-20 gap-4 items-center">
              <Image
                src="/clerk.svg"
                alt="Clerk Logo"
                width={102}
                height={32}
                priority
              />
              X
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={90}
                height={18}
                priority
              />
            </Link>
            <div className="grow" />
            <SignedIn>
              <OrganizationSwitcher />
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </header>
          {children}
          <footer className="h-20 flex gap-1 px-20 items-center font-medium">
            <Image
              src="/clerk.svg"
              alt="Clerk Logo"
              width={64}
              height={32}
              priority
            />
            <span className="text-sm">© 2023</span>
            <nav className="grow flex gap-8 justify-end">
              <a
                className="text-primary hover:underline"
                href="https://clerk.com"
              >
                clerk.com
              </a>
              <a
                className="text-primary hover:underline"
                href="https://clerk.com"
              >
                Twitter
              </a>
              <a
                className="text-primary hover:underline"
                href="https://clerk.com"
              >
                Discord
              </a>
              <a
                className="text-primary hover:underline"
                href="https://clerk.com"
              >
                Documentation
              </a>
            </nav>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
