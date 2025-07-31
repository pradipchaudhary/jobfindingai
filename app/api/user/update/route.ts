import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import User from '@/models/User';
import { authOptions } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db';

export async function PUT(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    const data = await req.json();

    await connectToDatabase();

    await User.findByIdAndUpdate(session.user.id, data);

    return NextResponse.json({ message: 'User updated' });
}
