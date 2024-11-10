import { currentUser } from "@/lib/auth";

const page = async () => {
  const user = await currentUser();
  console.log(user);

  return (
    <div className="text-center p-4">
      <h1>Hello {user?.username}</h1>
      <p>Welcome to your AgrichainHub Dashboard</p>
    </div>
  );
};

export default page;
