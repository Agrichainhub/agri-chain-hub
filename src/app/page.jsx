import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect("/home");
  return <div>Redirecting to home...</div>;
};

export default page;
