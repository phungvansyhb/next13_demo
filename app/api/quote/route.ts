import { NextResponse, NextRequest } from 'next/server';
import dummyData from '@/shared/data/quote.json'
import { WriteFile } from '@/shared/utils/filteUtil';

export async function GET() {
    return NextResponse.json(dummyData);
}
type Quote = { content: string, author: string }
export async function POST(request: NextRequest) {
    try {
        const res = await request.json();
        WriteFile(res);
        return NextResponse.json({ status: 204, msg: 'Success' });
    } catch (e) {
        return NextResponse.json({ status: 500, msg: 'Fail' });

    }
}