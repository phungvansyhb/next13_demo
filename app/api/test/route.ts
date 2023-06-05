import { NextResponse } from 'next/server';

export async function GET() {

    const data = { name: "sy", age: 18 };
    return NextResponse.json({ data });
}