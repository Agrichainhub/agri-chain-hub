import React from "react";
import SettingsDashboardPage from "./SettingsPage";
import { currentUser } from "@/lib/auth";

const Settings = async () => {
  const user = await currentUser();

  return <SettingsDashboardPage user={user} />;
};

export default Settings;
