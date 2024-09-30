import {
  type DefaultUser,
  type NextAuthOptions,
  getServerSession,
} from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import prisma from './db';

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & {
      id: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    uid: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Check if user exists in DB
      const exist = await prisma.user.findUnique({
        where: { email: user.email! },
      });

      // If user exists, return true
      if (exist) return true;

      // If user does not exist, create a new one
      await prisma.user.create({
        data: {
          name: user.name!,
          email: user.email!,
          image: user.image!,
        },
      });

      return true;
    },
    async session({ session, token }) {
      if (session?.user) {
        // Attach the user's Prisma ID to the session object
        session.user.id = token.uid;
      }
      return session;
    },
    async jwt({ token, user }) {
      // When user is signed in, attach the Prisma user ID to the token
      if (user) {
        const userFromDb = await prisma.user.findUnique({
          where: { email: user.email! },
        });
        if (userFromDb) {
          token.uid = userFromDb.id; // Use the Prisma ID
        }
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getUserSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
