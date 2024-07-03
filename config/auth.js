import { NextAuthOptions, getServerSession } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

import TwitterProvider, { TwitterProfile } from "next-auth/providers/twitter";
import GitHubProvider from "next-auth/providers/github";

import { initializeAccount } from "@/lib/contract";
import { encrypt } from "@/lib/security";
import { GithubAuthProvider } from "firebase/auth";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubAuthProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  //   callbacks: {
  //     async session({ session, user }) {
  //       return {
  //         ...session,
  //         user: {
  //           id: user.id,
  //           name: user.name,
  //           username: user.username,
  //           address: user.address,
  //           image: user.image,
  //           created_at: user.created_at,
  //           privateKey: user.privateKey,
  //           password: user.password,
  //         },
  //       };
  //     },
  //   },
  // events: {
  //   async signIn({ user, account }) {
  //     const aptosAccount = new AptosAccount(undefined, user.address);
  //     await initializeAccount(aptosAccount);
  //   },
  // },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
