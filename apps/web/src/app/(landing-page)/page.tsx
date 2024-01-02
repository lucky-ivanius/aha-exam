import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";
import { Button } from "@/components/ui/button";

export default async function LandingPage(): Promise<JSX.Element> {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {user ? (
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
          <Link href="/api/auth/logout" target="_parent">
            <Button variant="link">Logout</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center w-full gap-2">
          <Link href="/api/auth/signup" target="_parent">
            <Button variant="secondary">Sign up</Button>
          </Link>
          <Link href="/api/auth/login" target="_parent">
            <Button>Login</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
