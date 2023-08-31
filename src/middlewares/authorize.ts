import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { CustomRequest } from '@/interfaces/index';
import { authenticate } from './authenticate';


export const authorizeAdmin =  async (req: NextRequest) => {
    await authenticate(req)

    if ((req as CustomRequest).user?.is_admin) {
        return
    }
    throw new Error("Unauthorized access: You're Not Authorized")
}



export const authorizeUser = async (req: NextRequest, id: string) => {
    await authenticate(req)
    if ((req as CustomRequest).user._id === id) {
        return
    } else {
        throw new Error("Unauthorized access: You're Not Authorized to access this resource")
    }
}
