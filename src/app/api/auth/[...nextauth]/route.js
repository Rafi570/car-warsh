import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      //   Sign in with {}
      name: "Credentials <3",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials, req) {
        // Step 1: working with my DB to find user by email

        console.log(credentials, "credentials");

        const userCollection = await dbConnect("users");
        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return user;
      },
    }),


  ],


};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };