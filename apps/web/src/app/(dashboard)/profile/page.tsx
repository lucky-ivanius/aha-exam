import { getSession } from "@auth0/nextjs-auth0";
import type { User } from "@/interfaces/user";

export default async function ProfilePage(): Promise<JSX.Element> {
  const session = await getSession();
  const user = session?.user as User;

  return (
    <div className="flex items-center w-full py-4 bg-slate-50">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-2xl">Profile, {user.name}</h1>
      </div>
    </div>
  );
}
