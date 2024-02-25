import { NextResponse } from "next/server";
const JSZip = require('jszip');
import fetch from 'node-fetch'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function POST(request) {

    const { fileLink, userCode, language } = await request.json();

    const url = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*';

    const existingZipData = await fetch(fileLink).then(res => res.arrayBuffer());

    // Create a JSZip instance and load the existing zip data
    const zip = new JSZip();

    await zip.loadAsync(existingZipData);

    // Fetch the content of the file to add
    const fileToAddData = Buffer.from(userCode);

    // Add the file to the zip archive
    //depending on language there has to be different file extension

    if (language === 'python') {
        zip.file('solution.py', fileToAddData);
    } else if (language === 'go') {
        zip.file('solution.go', fileToAddData)
    }


    // Generate the updated zip file
    const updatedZipData = await zip.generateAsync({ type: 'base64' });

    //const archive = await zip.generateAsync({ type: 'base64' });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': process.env.JUDGE_KEY,
            },
            body: JSON.stringify({
                language_id: 89,
                additional_files: updatedZipData,
                max_processes_and_or_threads: 120,
                memory_limit: 256000,
                max_file_size: 5000,
                redirect_stderr_to_stdout: true
            }),
        });

        const result = await response.json();

        return NextResponse.json({ submissionToken: result.token });

    } catch (error) {
        return NextResponse.error();
    }
}
