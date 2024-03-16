import { UserProfile } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex items-center justify-center">
      <UserProfile />
    </div>
  );
};

export default page;
