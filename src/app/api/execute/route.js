import {NextResponse} from "next/server";

import fetch from 'node-fetch'
import path from 'path';
import { Blob } from "buffer";

export async function POST(request, res) {

    const { fileLink, userCode } = await request.json();

    const response = await fetch(fileLink);

    if (!response.ok) {
        console.log(`Failed to fetch the blob. Status: ${response.status}`);
    }

    // Read the content as ArrayBuffer
    const contentBuffer = await response.arrayBuffer();

    console.log(response);

    const userCodeBuffer = Buffer.from(userCode);

    // Concatenate the existing content and userCode
    const combinedBuffer = Buffer.concat([Buffer.from(contentBuffer), userCodeBuffer]);

    const file = new File([new Blob([combinedBuffer])], 'test.py');

    return new NextResponse(file, {                                            // Create a new NextResponse for the file with the given stream from the disk
        status: 200,                                                                    //STATUS 200: HTTP - Ok
        headers: new Headers({                                                          //Headers
            "content-disposition": `attachment; filename=${path.basename(fileLink)}`,           //State that this is a file attachment
        }),
    });
}
