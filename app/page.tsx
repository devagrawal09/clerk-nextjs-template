import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20">
      <div className="gap-10 flex flex-col sm:flex-row p-24 pb-0">
        <Image
          className="relative"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <Image
          className="relative"
          src="/clerk.svg"
          alt="Clerk Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <p className="text-center px-10">
        This is a starter project for building a{" "}
        <a className="underline" href="https://nextjs.org/" target="_blank">
          Next.js
        </a>{" "}
        app with{" "}
        <a className="underline" href="https://clerk.com" target="_blank">
          Clerk
        </a>
        .
        <br />
        <SignedIn>
          You are signed in.{" "}
          <Link className="underline" href="/dashboard">
            Go to dashboard
          </Link>
        </SignedIn>
        <SignedOut>
          <Link className="underline" href="/sign-up">
            Sign up
          </Link>
        </SignedOut>
      </p>
    </main>
  );
}
