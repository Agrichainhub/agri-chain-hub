"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const updateProfile = async (data) => {
  console.log("Starting account update");

  const user = await currentUser();

  if (!user) {
    return { error: "User not authenticated" };
  }

  const { firstname, lastname, username } = data;

  try {
    // Check if user exists
    const existingUser = await db.user.findUnique({
      where: { id: user.id },
    });

    if (!existingUser) {
      return { error: "User not found" };
    }

    // Prepare updated data object
    const updatedData = {};
    if (firstname) updatedData.firstname = firstname;
    if (lastname) updatedData.lastname = lastname;
    if (username) updatedData.username = username;

    // Perform the update
    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: updatedData,
    });

    console.log("Account updated successfully:", updatedUser);

    return { success: "Account updated successfully", data: updatedUser };
  } catch (error) {
    console.error("Failed to update account:", error);
    return { error: "Failed to update account" };
  }
};
