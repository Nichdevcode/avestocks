import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from '@/lib/dbConnection';
import UserModel from '@/models/UserModel';


export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.AUTH_SECRET || "my-secret",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: '/',
    // signOut: '/auth/signout',
    // error: '/', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async jwt({ token, account, user }: any) {
        // Persist the OAuth access_token to the token right after signin
        if (user) {
          token.user = user
        }
        return token
      },
    async session({ session, token, user }: any) {
      // Send properties to the client, like an access_token from a provider.
        // console.log({ token, session, user })
      // console.log('session: ', token)
      const { password, ...rest } = token.user

      session.user = rest
      // console.log({ session })
      return session
    },    
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "" },
        email: { label: "Email", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // console.log({ credentials, req })
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        
          console.log({ credentials })


            if (!credentials || !credentials.email || !credentials.password) {
                return null;
            }

        

            await dbConnect();
          
            if (!req?.body?.password || (!req?.body?.email && !req.body?.username)) {
                throw new Error('Please fill in all fields');
            }
    
            const user = await UserModel.findOne({
                  email: req.body.email ? req.body.email : '' ,
            });
    
            if (!user) {
                throw new Error('User not found');
                // return null;
            }
            const isMatch = await user.comparePassword(req.body.password);
    
            if (!isMatch) {
              throw new Error('Invalid credentials');
                // return null;
            }
    
            return user;
          
        
      },
    }),
  ],
};


