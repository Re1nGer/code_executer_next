
import { sql } from "@vercel/postgres";
export async function GET(request, { params }) {
    const { rows } = await sql `SELECT * FROM algorithm`
    return Response.json(rows);
}
