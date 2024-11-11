import React from "react";
import SettingsDashboardPage from "./SettingsPage";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const metadata = {
  title: "Settings",
};

const Settings = async () => {
  const user = await currentUser();
  const dbUser = await db.user.findUnique({ where: { id: user.id } });

  if (!dbUser) {
    return <div>User not found</div>;
  }

  const existingProfile = await db.profile.findUnique({
    where: { userId: user.id },
  });

  return <SettingsDashboardPage user={dbUser} profile={existingProfile} />;
};

export default Settings;
