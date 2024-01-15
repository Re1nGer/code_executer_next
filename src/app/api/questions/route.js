import prisma from '@/lib/prisma'
import { sql } from "@vercel/postgres";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request, { params }) {
    const questions = await prisma.question.findMany();
    return Response.json(questions);
}

export async function PUT(request, { params }) {
    try {
        const { uid, scratchpad } = await request.json()
        await sql`UPDATE algorithm SET scratchpad = ${scratchpad} WHERE uid = ${uid}`
        return Response.json([]);
    }
    catch (error) {
        console.log(error)
        return Response.json("something went wrong");
    }
}
