export async function GET(request, { params }) {
    return Response.json(params.id)
}