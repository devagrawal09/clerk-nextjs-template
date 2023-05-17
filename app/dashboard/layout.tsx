import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed flex gap-5 w-full items-center justify-between bg-white px-5 text-black shadow">
        <h1 className="h-full py-4 font-bold tracking-tight flex-grow">
          Clerk Next.js Template
        </h1>
        <OrganizationSwitcher />
        <UserButton afterSignOutUrl="/" />
      </nav>
      <main className="pt-16 h-full">{children}</main>
    </>
  );
}
