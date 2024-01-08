
import { sql } from "@vercel/postgres";


export const dynamic = 'force-dynamic'
export const revalidate = 0
export async function GET(request, { params }) {
    const { rows } = await sql `SELECT * FROM algorithm`
    return Response.json(rows);
}
