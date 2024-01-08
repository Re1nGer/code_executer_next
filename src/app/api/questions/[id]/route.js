
import { sql } from "@vercel/postgres";


export const dynamic = 'force-dynamic'
export const revalidate = 0
export async function GET(request, { params }) {
    const { rows } = await sql `SELECT * FROM algorithm WHERE uid = ${params.id} LIMIT 1`
    if (rows) return Response.json(rows[0])
    return Response.json([])
}
