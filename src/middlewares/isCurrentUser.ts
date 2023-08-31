import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { CustomRequest } from '@/interfaces/index';
import { authenticate } from './authenticate';



export const isCurrentUser = async (req: NextRequest, id: string) => {
    await authenticate(req)
    if ((req as CustomRequest).user._id === id) {
        return
    } else {
        throw new Error("Unauthorized access: You're Not Authorized to access this resource")
    }
}
