import type { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

export const OPTIONS: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

      profile(profile: GoogleProfile) {
        console.log("Profile Google: ", profile);

        let userRole = "Google User";
        if (profile?.email === process.env.NEXT_PUBLIC_EMAIL_ADDRESS) {
          userRole = "admin";
        }
        return { ...profile, id: profile.sub, role: userRole };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    // async session(params) {
    //   let { session, token } = params;
    //   session.user = token;
    //   return session;
    // },
    session({ session, token, user }) {
      return session
    },
  },
};
