import Link from "next/link";
import type { Metadata } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import type { User } from "@/interfaces/user";

export const metadata: Metadata = {
  title: "Dashboard",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({
  children,
}: LayoutProps): Promise<JSX.Element> {
  const session = await getSession();
  const user = session?.user as User;

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <header className="flex items-center w-full py-4 bg-gradient-to-b from-slate-50 to-slate-200">
        <div className="container flex items-center justify-between">
          <Link href="/dashboard">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarFallback>
                  <Skeleton className="w-10 h-10 rounded-full" />
                </AvatarFallback>
                <AvatarImage src={user.picture} />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Hi, {user.name}!</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <Link href="/profile">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>
                <Link href="/change-password">
                  <DropdownMenuItem>Change Password</DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <Link href="/api/auth/logout" target="_parent">
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      {children}
    </div>
  );
}
