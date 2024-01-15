
import prisma from '@/lib/prisma'


export const dynamic = 'force-dynamic'
export const revalidate = 0
export async function GET(request, { params }) {
    const question = await prisma.question.findFirst({
        where: { uid: params.id }
    })
    return Response.json(question)
}

