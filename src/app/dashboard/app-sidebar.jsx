"use client";
import {
  CircleDollarSign,
  Home,
  Inbox,
  Settings,
  User,
  Wallet,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Sell",
    url: "/dashboard/sell",
    icon: CircleDollarSign,
    roles: ["FARMER"], // Only accessible by FARMER
  },
  {
    title: "Buy",
    url: "/dashboard/buy",
    icon: Wallet,
  },
  {
    title: "Inbox",
    url: "/dashboard/inbox",
    icon: Inbox,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

const AppSidebar = ({ user }) => {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href="/dashboard/settings">
          <Card className="flex gap-2 p-2">
            <Avatar>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div className="user-info">
              <h3 className="font-bold">{user?.username}</h3>
              <p className="text-xs text-foreground/60">{user?.role}</p>
            </div>
          </Card>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items
                .filter(
                  (item) => !item.roles || item.roles.includes(user?.role)
                )
                .map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
