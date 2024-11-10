"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={async () => {
        await logout();
      }}
    >
      <LogOut />
    </Button>
  );
};
export default LogoutButton;
