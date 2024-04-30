import Profile from "@/components/Profile";
import { User } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js</h1>

      <Profile
        className="w-20 h-20  "
        fallback={<User />}
        image="https://github.com/shadcn.png"
        status="ACTIVE"
        alt="image"
      />
    </main>
  );
}
