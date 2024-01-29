import prisma from '@/lib/prisma'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request, { params }) {
    const questions = await prisma.question.findMany();
    return Response.json(questions);
}

export async function PUT(request, { params }) {
    try {
        console.log('request');
        const session = await getServerSession(authOptions)

        if (!session)
            return Response.json({ error: "Unauthorized" }, { status: 401 });

        const { uid, scratchpad, id } = await request.json();


        await prisma.scratchpad.upsert({
            where: {
                id: id,
                questionId: uid,
                userId: session.user.id
            },
            update: {
                text: scratchpad
            },
            create: {
                questionId: uid,
                userId: session.user.id,
                text: scratchpad
            }
        })
        return Response.json([]);
    }
    catch (error) {
        console.log(error)
        return Response.json("something went wrong", { status: 500 });
    }
}
