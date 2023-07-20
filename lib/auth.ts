import { AuthOptions, User, getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import Credentials from "next-auth/providers/credentials";
import * as argon from "argon2";
import { db } from "./prisma";
type DBUser = Record<string, string>;
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID as string,
      clientSecret: process.env.APPLE_SECRET as string,
    }),
    Credentials({
      async authorize(credentials: DBUser, _req) {
        const { username, password } = credentials;
        const hashedPassword = await argon.hash(password!);
        const existedUser = await db.user.findFirst({
          where: {
            username,
          },
        });
        if (
          existedUser &&
          (await argon.verify(hashedPassword, existedUser.password!))
        ) {
          return existedUser;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({ user, token }) {
      const dbUser = await db.user.findUnique({
        where: {
          email: token.email!,
        },
      });
      if (!dbUser) {
        token.id = user.id;
        return token;
      }
      if (!dbUser?.username) {
        await db.user.update({
          data: {
            username: crypto.randomUUID(),
          },
          where: {
            id: dbUser.id,
          },
        });
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        username: dbUser.username,
      };
    },
    redirect() {
      return "/";
    },
  },
};
export const getAuthSession = async () => await getServerSession(authOptions);
