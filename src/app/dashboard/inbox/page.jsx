import React from "react";

export const metadata = {
  title: "Inbox Messages",
};
const Inbox = () => {
  return (
    <div className="m-4 flex justify-center items-center h-[50vh] text-center rounded-lg border-2 border-gray-300 border-dashed">
      <p>
        You have no messages yet. You'll get one when you sell or buy a product.
      </p>
    </div>
  );
};

export default Inbox;
