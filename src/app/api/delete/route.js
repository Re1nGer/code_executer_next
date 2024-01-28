import { del } from '@vercel/blob';

export const runtime = 'edge';

export async function DELETE(request, { params }) {
    const { searchParams } = new URL(request.url);
    const urlToDelete = searchParams.get('url');
    await del(urlToDelete);
    return new Response();
}
