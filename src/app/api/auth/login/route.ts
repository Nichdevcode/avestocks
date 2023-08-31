import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import { NextResponse } from 'next/server';
import { IUserLogin } from '@/interfaces';
import UserModel from '@/models/UserModel';
import { createToken } from '@/utils/createToken';

// ----------------------------------------------------------------------
 
 
export async function POST(req: Request, res: NextApiResponse) {
    try {
        await dbConnect();

        // body.email = "nicholasjd12@gmail.com";
        // body.password = "123456";
        // body.username = "nicholasjd12";
        // body.confirm_password = "123456";

        const credentials: IUserLogin = await req.json()

        console.log({ server: credentials })

        if (!credentials || !credentials.email || !credentials.password) {
            return NextResponse.json({ message: 'Email and Password is required' }, { status: 400 });
        }

        const user = await UserModel.findOne({
              email: credentials.email ? credentials.email : '' ,
        });

        if (!user) {
            return NextResponse.json({ message: 'Invalid User' }, { status: 400 });
        }

        const isMatch = await user.comparePassword(credentials.password);

        if (!isMatch) {
            return NextResponse.json({ message: 'Incorrect Username or Password' }, { status: 400 });
        }

        const token = await createToken(user._id);

        if (!token) return NextResponse.json({ message: 'Token activation Failed' }, { status: 500 });
        
        return NextResponse.json({ user, token }, { status: 200 });

    } catch (error: any) {
        console.error({error});
        return NextResponse.json({ message: error?.message || 'Internal server error' }, { status: 500 });
    }
}
 
// export async function PUT(req: NextApiRequest, res: NextApiResponse) {}
 
// export async function DELETE(req: NextApiRequest, res: NextApiResponse) {}
 
// export async function PATCH(req: NextApiRequest, res: NextApiResponse) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: NextApiRequest, res: NextApiResponse) {}