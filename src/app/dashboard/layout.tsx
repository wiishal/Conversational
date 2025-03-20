"use client";
import { useUser } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar"; // Adjust the path based on your structure
import Loading from "@/components/Loading";
import LoginAlert from "@/components/LoginAlert";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
      <div className="h-screen w-screen flex flex-row">
        {/* Sidebar Stays Fixed */}
        <Sidebar/>

        {/* Right-hand content changes */}
        <div className="flex-grow border p-4">{children}</div>
      </div>
    );
}
