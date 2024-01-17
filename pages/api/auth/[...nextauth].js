import GoogleProvider from 'next-auth/providers/google';
import NextAuth from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from '@/lib/prisma';


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        newUser: '/' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}

export default NextAuth(authOptions);
