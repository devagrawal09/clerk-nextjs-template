import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { OrgDetails, SessionDetails, UserDetails } from "./details";
import Link from "next/link";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const user = await clerkClient.users.getUser(userId);

  return (
    <div className="py-16 px-20">
      {user && (
        <>
          <h1 className="text-3xl text-black font-semibold">
            👋 Hi, {user.firstName}
          </h1>
          <div className="mt-8 grid lg:grid-cols-3 gap-4">
            <UserDetails />
            <SessionDetails />
            <OrgDetails />
          </div>
          <h2 className="text-3xl text-black font-semibold mt-16 mb-4">
            What's next?
          </h2>
          <Link
            className="text-primary font-medium hover:underline"
            href="https://clerk.com/docs"
            target="_blank"
          >
            Read documentation --&gt;
          </Link>
        </>
      )}
    </div>
  );
}
