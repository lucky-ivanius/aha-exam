import { User } from "@/interfaces/user";
import {
  Session,
  handleAuth,
  handleCallback,
  handleLogin,
} from "@auth0/nextjs-auth0";
import { NextRequest } from "next/server";

const afterCallback = async (
  req: NextRequest,
  session: Session
): Promise<Session> => {
  const provider = (session.user.sub as string).split("|")[0];

  const user: User = {
    id: "1234",
    email: session.user.email as string,
    isEmailVerified: session.user.email_verified as boolean,
    name: session.user.name as string,
    givenName: session.user.given_name as string,
    familyName: session.user.family_name as string,
    picture: session.user.picture as string,
    provider,
    accessToken: "1234",
  };

  session.user = user;

  return session;
};

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/dashboard",
  }),
  signup: handleLogin({
    returnTo: "/dashboard",
    authorizationParams: {
      screen_hint: "signup",
    },
  }),
  callback: handleCallback({ afterCallback }),
});
