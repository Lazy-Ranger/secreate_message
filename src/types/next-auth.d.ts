import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    _id?: string;
    isVerified?: boolean;
    username?: string;
    isAcceptingMessages?: boolean;
  }

  interface Session {
    user: {
      _id?: string;
      isVerified?: boolean;
      username?: string;
      isAcceptingMessages?: boolean;
    } & DefaultSession["user"];
  }
}


declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    isVerified?: boolean;
    username?: string;
    isAcceptingMessages?: boolean;
  }
}
