import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import InvestModel from '@/models/InvestModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"


// ----------------------------------------------------------------------


export async function GET(req: NextRequest, { params }: { params: { id: string }}) {
    try {
        await dbConnect();
        // const session = await getServerSession(authOptions)
        // console.log({session})
    
        // if (!session) {
        //   return res.status(401).json({ message: "You must be signed in to access this" });
        // } 

        const { id } = params;
        // console.log('id', id)
        if (!id) {
          return NextResponse.json({ message: 'ID is required' }, { status: 400 });
        }

        const invest = await InvestModel.findById(id).lean();

        if (!invest) {
          return NextResponse.json({ message: 'investment not found' }, { status: 400 });
        }
              

        return NextResponse.json(invest, { status: 200 });
    
        // return res.status(200).json({ users: allUsers });
      } catch (error) {
        console.error(error);
        // return res.status(500).json({ message: 'Internal server error' });
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

      }
}
 
// export async function HEAD(req: Request) {}
 
export async function DELETE(req: NextRequest, { params }: { params: { id: string }}) {
  try {
    await dbConnect();
    // const session = await getServerSession(authOptions)
    // console.log({session})

    // if (!session) {
    //   return res.status(401).json({ message: "You must be signed in to access this" });
    // } 

    const { id } = params;
    // console.log('id', id)
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const invest = await InvestModel.findByIdAndDelete(id).lean();

    if (!invest) {
      return NextResponse.json({ message: 'investment not found' }, { status: 400 });
    }
          
    return NextResponse.json(invest, { status: 200 });

    // return res.status(200).json({ users: allUsers });
  } catch (error) {
    console.error(error);
    // return res.status(500).json({ message: 'Internal server error' });
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  }
}
 
export async function PATCH(req: NextRequest, { params }: { params: { id: string }}) {
  try {
    await dbConnect();
    // const session = await getServerSession(authOptions)
    // console.log({session})

    // if (!session) {
    //   return res.status(401).json({ message: "You must be signed in to access this" });
    // } 

    const { id } = params;
    
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const body = await req.json()

    const invest = await InvestModel.findByIdAndUpdate(id, body, { new: true }).lean();

    if (!invest) {
      return NextResponse.json({ message: 'failed to update' }, { status: 400 });
    }
          

    return NextResponse.json(invest, { status: 200 });

    // return res.status(200).json({ users: allUsers });
  } catch (error) {
    console.error(error);
    // return res.status(500).json({ message: 'Internal server error' });
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  }
}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: Request) {}