import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import UserModel from '@/models/UserModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { IVerifyKYC } from "@/interfaces";


// ----------------------------------------------------------------------

 
export async function POST(req: NextRequest, { params }: { params: { id: string }}) {
  try {
    await dbConnect();
    // const session = await getServerSession(authOptions)
    // console.log({session})

    // if (!session) {
    //   return res.status(401).json({ message: "You must be signed in to access this" });
    // } 

    const { id } = params;

    console.log({id, params})
    
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const body: IVerifyKYC = await req.json()

    if (!body.front || !body.back) {
      return NextResponse.json({ message: 'front and back are required' }, { status: 400 });
    }

    const user = await UserModel.findByIdAndUpdate(id, {
      document: {
        front: body.front,
        back: body.back
      },
      status: 'pending'
    }, { new: true }).lean();

    if (!user) {
      return NextResponse.json({ message: 'failed to update' }, { status: 400 });
    }
          

    return NextResponse.json(user, { status: 200 });

    // return res.status(200).json({ users: allUsers });
  } catch (error) {
    console.error(error);
    // return res.status(500).json({ message: 'Internal server error' });
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  }
}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: Request) {}