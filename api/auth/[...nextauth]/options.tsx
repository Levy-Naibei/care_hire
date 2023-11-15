import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile: GoogleProfile) {
        console.log("Profile Google: ", profile);

        let userRole = "Google User";
        if (profile?.email === process.env.NEXT_PUBLIC_EMAIL_ADDRESS) {
          userRole = "admin";
        }
        return { ...profile, id: profile.sub, role: userRole };
      },
      clientId: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET}`,
    }),
  ],

  callback: {
    async jwt(token: any, user: any) {
      if (user) token.role = user.role;
      return token;
    },

    async session(session: any, token: any) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
