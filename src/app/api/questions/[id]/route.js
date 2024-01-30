
import prisma from '@/lib/prisma'
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export const dynamic = 'force-dynamic'
export const revalidate = 0
export async function GET(request, { params }) {

    const session = await getServerSession(authOptions)

    const resources = await prisma.resource.findFirst({ where: { questionId: params.id, languageId: 4 } })

    if (session) {

        const hasUserQuestion = await prisma.userQuestion.findFirst({
            where: { AND: [{ questionId: params.id }, { userId: session.user.id }] }
        });

        const hasQuestionSolution = await prisma.solution.findFirst({
            where: { AND: [{ questionId: params.id }, { userId: session.user.id }] }
        });

        console.log(hasQuestionSolution, hasUserQuestion);

        if (!hasUserQuestion) {
            await prisma.userQuestion.create({
                data: {
                    userId: session.user.id,
                    isComplete: false,
                    questionId: params.id
                }
            });
        }

        if (!hasQuestionSolution) {
            await prisma.solution.create({
                data: {
                    userId: session.user.id,
                    code: resources.templateCode,
                    questionId: params.id
                }
            })
        }
    }

    const question = await prisma.question.findFirst({
        where: { uid: params.id },
        include: { solutions: { where: { OR: [ { userId: null }, { userId: session?.user?.id } ] }},
                   scratchpads: { where: { userId: session ? session?.user?.id : '' }, take: 1 },
                   resources: { where: { questionId: params.id } }
        },
    });

    if (!session) {

        const solution = { userId: 'unregistered user', code: resources.templateCode };

        question.solutions.push(solution);
    }

    return Response.json(question)
}

export async function PUT(request, { params }) {

    const session = await getServerSession(authOptions)

/*
    if (!session)
        return Response.json({ error: "Unauthorized" }, { status: 401 });
*/

    //TODO: add a current language
    const { uid, code, id, language } = await request.json();

    try {

        if (!id) {
            //currently python language id is set to 4
            const resource = await prisma.resource.findFirst({ where: { questionId: uid, language: 4 } });

            await prisma.solution.create({
                data: {
                    code: resource.templateCode,
                    userId: session?.user.id,
                    questionId: uid,
                }
            })
        }
        else {
            await prisma.solution.update({
                where: { id: id },
                data: {
                    code: code
                },
            });
        }

        return Response.json({ status: 'saved successfully' });
    }
    catch (error) {
        console.log(error);
        return Response.json({ error: 'error' }, { status: 500 });
    }
}

