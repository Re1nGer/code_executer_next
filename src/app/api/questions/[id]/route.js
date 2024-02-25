import prisma from '@/lib/prisma'
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export const dynamic = 'force-dynamic'
export const revalidate = 0
export async function GET(request, { params }) {

    const session = await getServerSession(authOptions)

    const resources = await prisma.resource.findMany({ where: { questionId: params.id } });

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
            await saveAllTemplateCodeForQuestion(params.id, resources, session)
        }
    }

    const question = await prisma.question.findFirst({
        where: { uid: params.id },
        include: { scratchpads: { where: { userId: session ? session?.user?.id : '' }, take: 1 },
            resources: { where: { questionId: params.id } },
            solutions: { where: { OR: [{ userId: null }, { userId: session?.user?.id }] } },
            userQuestions: { where: { AND: [{ questionId: params.id }, { userId: session?.user?.id ?? '' }] } }
        },
    });

    if (!session) {

        const solutions = resources.map(item => ({ userId: 'unregistered user', code: item.templateCode, languageId: item.languageId })); //for now default is python

        question.solutions.push(...solutions);
    }

    return Response.json(question)
}



const saveAllTemplateCodeForQuestion = async (id, resources, session) => {
    for (const resource of resources) {
        await prisma.solution.create({
            data: {
                userId: session.user.id,
                code: resource.templateCode,
                questionId: id,
                languageId: resource.languageId
            }
        });
    }
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

        const solution = await prisma.solution.findFirst({ where: { AND:[{ questionId: uid }, { languageId: language }, { userId: session?.user?.id }] }})

        console.log('solution', solution);

        if (!solution) {
            //currently python language id is set to 4
            const resource = await prisma.resource.findFirst({ where: { questionId: uid, languageId: language } });

            await prisma.solution.create({
                data: {
                    code: code ? code : resource.templateCode,
                    userId: session?.user.id,
                    questionId: uid,
                    languageId: language
                }
            })
        }
        else {
            await prisma.solution.update({
                where: { id: id },
                data: {
                    code: code
                }
            });
        }

        return Response.json({ status: 'saved successfully' });
    }
    catch (error) {
        console.log(error);
        return Response.json({ error: 'error' }, { status: 500 });
    }
}

