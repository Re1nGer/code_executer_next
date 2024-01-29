import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function PUT(request, { params }) {
    try {
        const session = await getServerSession(authOptions)

        if (!session)
            return Response.json({ error: "Unauthorized" }, { status: 401 });

        const { uid } = await request.json();

        await prisma.userQuestion.updateMany({
            where: {
                AND: [
                    {
                        userId: session.user.id,
                    },
                    {
                        questionId: uid,
                    },
                ]
            },
            data: {
                isComplete: true
            },
        })
        return Response.json([]);
    }
    catch (error) {
        console.log(error)
        return Response.json("something went wrong", { status: 500 });
    }
}
