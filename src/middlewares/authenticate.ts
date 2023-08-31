import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/UserModel';
import { IUser } from '@/interfaces';
import { CustomRequest } from '@/interfaces/index';
import { headers } from 'next/headers'

const { JWT_SECRET } = process.env

interface JwtPayload {
    _id: string
}

export const authenticate =  async (req: NextRequest) => {
    const headersList = headers()
    const authorize = headersList.get('authorization')
    // const authorize = req.headers?.authorization || req.headers?.Authorization || '' as string
    if (!authorize) throw new Error("Unauthorized access: You're Not Authenticated");

    const [, token] = typeof authorize === "string" ? authorize?.split(' ') : ['', '']
    if (!token) throw new Error("Unauthorized access: You're Not Authenticated");
    // console.log({ aa: authorize, JWT_SECRET })
    
    const decoded = await jwt.verify(token, JWT_SECRET!) as JwtPayload
    // console.log({ decoded })
    
    const user: IUser | null  = await User.findById(decoded._id).lean()
    // console.log({ user })

    if (!user) throw new Error("Unauthorized access: User does not exist");

    (req as CustomRequest).user = user
    return
}
