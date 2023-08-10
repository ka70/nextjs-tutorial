import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    const headersList = headers();
    const cookieStore = cookies();

    // console.log('headersList', headersList);
    // console.log('cookieStore', cookieStore);

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const res = await request.json();
    return NextResponse.json({ res });
}
