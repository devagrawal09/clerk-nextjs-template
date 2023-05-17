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
    <div className="p-8">
      {user && (
        <>
          <h1 className="text-3xl text-black">
            Welcome, {user.firstName} {user.lastName}
          </h1>
          <div className="mt-4 grid lg:grid-cols-3 gap-4">
            <UserDetails />
            <SessionDetails />
            <OrgDetails />
          </div>
        </>
      )}
    </div>
  );
}
