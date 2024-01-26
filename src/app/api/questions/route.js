import prisma from '@/lib/prisma'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";

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

        const { uid, scratchpad } = await request.json();

        await prisma.scratchpad.update({
            where: {
                questionId: uid,
                userId: session.user.id
            },
            data: {
                text: scratchpad
            },
        })
        return Response.json([]);
    }
    catch (error) {
        console.log(error)
        return Response.json("something went wrong");
    }
}
