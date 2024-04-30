import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ProfileProps {
  image?: string;
  fallBack: string;
  alt?: string;
  status: "ACTIVE" | "INACTIVE";
  className?: string;
}

const Profile = ({ image, fallBack, alt, status, className }: ProfileProps) => {
  return (
    <div className={`${className}, relative`}>
      <Avatar className="w-full h-full ">
        {image ? (
          <AvatarImage src={image} alt={alt || "alt"} />
        ) : (
          <AvatarFallback>{fallBack}</AvatarFallback>
        )}
      </Avatar>
      {status === "ACTIVE" && (
        <div className="w-5 h-5 bg-green-500 absolute bottom-2 left-16 border-2 border-white rounded-full" />
      )}
    </div>
  );
};

export default Profile;
