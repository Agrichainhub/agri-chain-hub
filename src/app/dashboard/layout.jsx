import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./app-sidebar";
import { currentUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { logout } from "@/actions/logout";
import LogoutButton from "@/components/auth/logout-button";

export const metadata = {
  title: {
    template: "Agrichainhub | Dashboard - %s",
  },
};

const DashboardLayout = async ({ children }) => {
  const user = await currentUser();

  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <main className="grow">
        <header className="flex justify-between p-2 border-b border-gray-300 bg-sidebar sticky top-0 ">
          <Button variant="outline" size="icon" asChild>
            <SidebarTrigger />
          </Button>
          <LogoutButton />
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
