import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },

       async authorize(credentials, _req) {
        try {
            const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
                }).then((res) => res.json());
                
            if (user) {
              return user;
            } else {
              throw new Error("Invalid credentials");
            }
        } catch (err: any) {
          switch (err.status) {
            case 400:
            case 401:
              throw err;

            case 404:
              throw new Error("User not found");

            default: {
              throw new Error("Something went wrong");
            }
          }
        }
      },
     
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
    signOut: "/signout",
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
    async jwt({ token, user }) {

      if (user) return { ...token, ...user };

      return token;
    },
  },
};