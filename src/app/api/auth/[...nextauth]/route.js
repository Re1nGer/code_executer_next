import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/prisma';
import NextAuth from "next-auth";


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    callbacks: {
        session: async ({session, user}) => {
            session.user.id = user.id;
            return Promise.resolve(session);
        }
    }
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
