import React from "react";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import EditProfileForm from "./profile-form";

export const metadata = {
  title: "Edit Profile",
};

const EditProfile = async () => {
  const user = await currentUser();
  const dbUser = await db.user.findUnique({ where: { id: user.id } });

  if (!dbUser) {
    return <div>User not found</div>;
  }

  const existingProfile = await db.profile.findUnique({
    where: { userId: user.id },
  });

  return <EditProfileForm user={dbUser} profile={existingProfile} />;
};

export default EditProfile;
