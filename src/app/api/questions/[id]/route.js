
import prisma from '@/lib/prisma'
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]";
import {getSession} from "next-auth/react";


export const dynamic = 'force-dynamic'
export const revalidate = 0
export async function GET(request, { params }) {

    const session = await getServerSession(authOptions)

    const question = await prisma.question.findFirst({
        where: { uid: params.id },
        include: { solutions: true, scratchpads: { where: { userId: session ? session?.user?.id : '' }, take: 1 } },
    })
    return Response.json(question)
}

