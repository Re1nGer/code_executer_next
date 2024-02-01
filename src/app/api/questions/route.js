import prisma from '@/lib/prisma'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request, { params }) {

    const session = await getServerSession(authOptions)

    const questions = await prisma.question.findMany({
        include: { userQuestions: { where: { userId: session ? session.user.id : '' } } }
    });

    return Response.json(questions);
}

export async function PUT(request, { params }) {
    try {
        const session = await getServerSession(authOptions)

        if (!session)
            return Response.json({ error: "Unauthorized" }, { status: 401 });

        const { uid, scratchpad, id } = await request.json();

        let newId = '';

        if (!id) {
            const record = await prisma.scratchpad.create({
                data: {
                    questionId: uid,
                    userId: session.user.id,
                    text: scratchpad
                }
            })
            newId = record.id;
        }
        else {
            await prisma.scratchpad.update({
                where: { id: id },
                data: {
                    text: scratchpad
                }
            });
        }

        return Response.json({ id: id ?? newId });
    }
    catch (error) {
        console.log(error)
        return Response.json("something went wrong", { status: 500 });
    }
}
