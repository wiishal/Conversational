"use client";
import { useUser } from "@clerk/nextjs";
import Loading from "@/app/components/ui/Loading";
import LoginAlert from "@/app/components/ui/LoginAlert";
import SideBarRes from "../components/ui/SideBarRes";
import Sidebar from "../components/ui/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex lg:flex-row  flex-col">
      {/* Sidebar Stays Fixed */}
      <Sidebar />

      {/* Right-hand content changes */}
      <div className="lg:hidden flex  w-full">
        {" "}
        <SideBarRes />
      </div>
      <div className="flex-grow border p-4 overflow-auto">{children}</div>
    </div>
  );
}
