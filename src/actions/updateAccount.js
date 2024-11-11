"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const updateAcount = async (data) => {
  console.log("account update");

  const user = await currentUser();
  console.log(user);

  const { firstname, lastname, username } = data;

  try {
    const dbUser = await db.user.findUnique({ where: { id: user.id } });

    // console.log(dbUser);

    const updatedData = {};

    // Conditionally add fields to updatedData if they are provided
    if (firstname) updatedData.firstname = firstname;
    if (lastname) updatedData.lastname = lastname;
    if (username) updatedData.username = username;

    console.log(dbUser);

    if (!dbUser) {
      return { error: "User not found" };
    }

    const newInfo = await db.user.update({
      where: { userId: user.id },
      data: {
        firstname: updatedData.firstname,
        lastname: updatedData.lastname,
        username: updatedData.username,
      },
    });
    console.log(newInfo);

    return { success: "Account updated successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update account" };
  }
};
