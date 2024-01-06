import axios from 'axios';
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
        try{
            const user = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
                username: credentials?.username,
                password: credentials?.password,
            })
                if(user.status === 200){
                    return user.data
                }
                else{
                    return null
                }
        }
        catch(e){
            throw new Error("No user found")
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