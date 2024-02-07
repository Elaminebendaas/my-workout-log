import GoogleProvider from "next-auth/providers/google";
import db from "@/lib/db.";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(profile: any) {
      try {
        const user = await db.user.findUnique({
          where: {
            email: profile.user.email,
          },
        });
        if (user) {
          return true;
        }
      } catch (error) {
        return false;
      }
      try {
        const newUser = await db.user.create({
          data: {
            name: profile.user.name,
            email: profile.user.email,
            image: profile.user.image,
          },
        });
      } catch (error) {
        return false;
      }
      return true;
    },
  },
};

export { authOptions };
