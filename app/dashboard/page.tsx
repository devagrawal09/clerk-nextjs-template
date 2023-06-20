import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { OrgDetails, SessionDetails, UserDetails } from "./details";

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
        </>
      )}
    </div>
  );
}
