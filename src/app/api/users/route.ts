import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import UserModel from '@/models/UserModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { authorizeAdmin } from '@/middlewares/authorize';

// ----------------------------------------------------------------------


export async function GET(req: NextRequest) {
    try {
        await dbConnect();
        // const session = await getServerSession(authOptions)
        // console.log({session})
    
        // if (!session) {
        //   return res.status(401).json({ message: "You must be signed in to access this" });
        // } 
        try {
          await authorizeAdmin(req)
        } catch (error: any) {
          return NextResponse.json({ message: error?.message || "Unauthorized access" }, { status: 403 });
        }
  
        
        const users = await UserModel.find({}).sort({ createdAt: -1 }).lean();
    
        // console.log({users})

        return NextResponse.json(users, { status: 200 });
    
        // return res.status(200).json({ users: allUsers });
      } catch (error) {
        console.error(error);
        // return res.status(500).json({ message: 'Internal server error' });
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

      }
}
 
// export async function HEAD(request: Request) {}
 
// export async function POST(request: Request) {}
 
// export async function PUT(request: Request) {}
 
// export async function DELETE(request: Request) {}
 
// export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request: Request) {}