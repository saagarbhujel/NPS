import { User } from "lucide-react";
import Avatar from "./ui/Avatar/Avatar";
import AvatarFallback from "./ui/Avatar/AvatarFallback";
import AvatarImage from "./ui/Avatar/AvatarImage";
// interface ProfileProps {
//   image?: string;
//   fallback?: React.ReactNode;
//   alt?: string;
//   status: "ACTIVE" | "INACTIVE";
//   className?: string;
// }

const Profile = () => {
  return (
    <div className="flex gap-6">
      <Avatar
        size={"xs"}
        status={"ONLINE"}
        state={"HOVER"}
        src={"https://github.com/shadcn.png"}
      />

      <Avatar
        size={"sm"}
        status={"ONLINE"}
        state={"FOCUSED"}
        src={"https://github.com/shadcn.png"}
      />
      <Avatar
        size={"md"}
        status={"ONLINE"}
        state={"FOCUSED"}
        src={"https://github.com/shadcn.png"}
      />

      <Avatar
        size={"lg"}
        status={"ONLINE"}
        state={"FOCUSED"}
        placeholder={<User />}
      />

      <Avatar
        size={"xl"}
        status={"ONLINE"}
        state={"HOVER"}
        src={"https://github.com/shadcn.png"}
      />

      <Avatar
        size={"2xl"}
        status={"ONLINE"}
        state={"FOCUSED"}
        placeholder="+5"
      />

      <Avatar
        size={"3xl"}
        status={"ONLINE"}
        state={"FOCUSED"}
        placeholder={<User />}
      />
    </div>
  );
};

export default Profile;
