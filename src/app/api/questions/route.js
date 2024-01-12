
import { sql } from "@vercel/postgres";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request, { params }) {
    const { rows } = await sql `SELECT * FROM algorithm`
    return Response.json(rows);
}

export async function PUT(request, { params }) {
    try {
        const { uid, scratchpad } = await request.json()
        console.log(uid, scratchpad)
        await sql`UPDATE algorithm SET scratchpad = ${scratchpad} WHERE uid = ${uid}`
        return Response.json([]);
    }
    catch (error) {
        console.log(error)
        return Response.json("something went wrong");
    }
}
