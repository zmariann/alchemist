import { JWt } from "next-auth/jwt";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      emailVerified: string;
      image: string;
      role: string;
      accessToken: string;
    };
  }
}

/*
declare module "next-auth/jwt" {
  type JWT = User;
}
*/