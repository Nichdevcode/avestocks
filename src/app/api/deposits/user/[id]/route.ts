import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import DepositModel from '@/models/DepositModel';
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

        const deposits = await DepositModel.find({ userId: id }).sort({ createdAt: -1 }).lean();

        if (!deposits) {
          return NextResponse.json({ message: 'deposits not found' }, { status: 400 });
        }
              

        return NextResponse.json(deposits, { status: 200 });
    
        // return res.status(200).json({ users: allUsers });
      } catch (error) {
        console.error(error);
        // return res.status(500).json({ message: 'Internal server error' });
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

      }
}
 
// // export async function HEAD(req: Request) {}
 
// export async function DELETE(req: NextRequest, { params }: { params: { id: string }}) {
//   try {
//     await dbConnect();
//     // const session = await getServerSession(authOptions)
//     // console.log({session})

//     // if (!session) {
//     //   return res.status(401).json({ message: "You must be signed in to access this" });
//     // } 

//     const { id } = params;
//     // console.log('id', id)
//     if (!id) {
//       return NextResponse.json({ message: 'ID is required' }, { status: 400 });
//     }

//     const deposit = await DepositModel.findByIdAndDelete(id).lean();

//     if (!deposit) {
//       return NextResponse.json({ message: 'deposit not found' }, { status: 400 });
//     }
          
//     return NextResponse.json(deposit, { status: 200 });

//     // return res.status(200).json({ users: allUsers });
//   } catch (error) {
//     console.error(error);
//     // return res.status(500).json({ message: 'Internal server error' });
//     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

//   }
// }
 
// export async function PATCH(req: NextRequest, { params }: { params: { id: string }}) {
//   try {
//     await dbConnect();
//     // const session = await getServerSession(authOptions)
//     // console.log({session})

//     // if (!session) {
//     //   return res.status(401).json({ message: "You must be signed in to access this" });
//     // } 

//     const { id } = params;
    
//     if (!id) {
//       return NextResponse.json({ message: 'ID is required' }, { status: 400 });
//     }

//     const body = await req.json()

//     const deposit = await DepositModel.findByIdAndUpdate(id, body, { new: true }).lean();

//     if (!deposit) {
//       return NextResponse.json({ message: 'failed to update' }, { status: 400 });
//     }
          

//     return NextResponse.json(deposit, { status: 200 });

//     // return res.status(200).json({ users: allUsers });
//   } catch (error) {
//     console.error(error);
//     // return res.status(500).json({ message: 'Internal server error' });
//     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

//   }
// }
 
// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// // export async function OPTIONS(req: Request) {}