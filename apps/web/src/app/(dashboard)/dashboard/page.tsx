import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { User } from "@/interfaces/user";

async function DashboardPage(): Promise<JSX.Element> {
  const session = await getSession();
  const user = session?.user as User;

  return (
    <div className="flex items-center w-full py-4 bg-slate-50">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-2xl">Welcome, {user.name}</h1>
      </div>
    </div>
  );
}

export default withPageAuthRequired(DashboardPage);
