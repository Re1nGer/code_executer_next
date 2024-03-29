import prisma from "@/lib/prisma";
import fetch from "node-fetch";
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request, { params }) {
    
    const token = request.nextUrl.searchParams.get("token")

    //when adding more languages we should indicate language used to properly parse out test output
    const language = request.nextUrl.searchParams.get('language');

    const url = `https://judge0-ce.p.rapidapi.com/submissions/${token}?fields=*`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': process.env.JUDGE_KEY,
        },
    });

    const result = await response.json();
    console.log(result);

    const formattedTestOutput = language === 'python' ?  parseTestCasesOutputPython(result.stdout) : parseTestCasesOutputGoLang(result.stdout);

    return Response.json({ time: result.time,
            memory: result.memory,
            exitCode: result.exit_code,
            languageId: result.language_id,
            testOutput: formattedTestOutput
    });
}


function parseTestCasesOutputGoLang(testOutput) {
    const testCases = []

    const blocks = testOutput.split('\n')

    //Build fail | for now we don't know how many test cases each problem has
    if (!testOutput.includes('RUN')) {
        for (let i = 0; i < 5; i++) {
            const testCase = {
                id: i,
                data: blocks[1],
                passed: false,
                error: blocks[1]
            }
            testCases.push(testCase);
        }
        return testCases;
    }

    for (let i = 1; i < blocks.length; i++) {
        // line contains information about test case
        if (blocks[i].includes('.go')) {
            const testCase = {
                id: i,
                data: blocks[i],
                passed: blocks[i].includes('Passed'),
                error: ''
            }
            testCases.push(testCase);
        }
    }

    return testCases;
}

function parseTestCasesOutputPython(testOutput) {
    const testCases = [];
    console.log(testOutput);

    const blocks = testOutput.split('\n');

    let i = 0;

    const failedBlocks = [];

    //while it doesn't encounter first empty block
    while (blocks[i] !== '' && i < blocks.length) {
        const testCase = {
            id: i,
            data: blocks[i],
            passed: blocks[i].includes('ok'),
            error: ''
        }
        testCases.push(testCase);
        i++;
    }

    //right afterwards there come blocks with AssertionError
    while (i < blocks.length) {
        if (blocks[i].includes('AssertionError'))
            failedBlocks.push(blocks[i])
        i++;
    }

    let errIdx = 0
    for(const block of testCases) {
        if (!block.passed) {
            block.error = failedBlocks[errIdx];
            errIdx++;
        }
    }

    return testCases;
}
