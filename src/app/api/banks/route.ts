import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import BankModel from '@/models/BankModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { IBank } from '@/interfaces';
import { authorizeAdmin } from "@/middlewares/authorize";

// ----------------------------------------------------------------------


export async function GET(req: NextRequest) {
    try {
        await dbConnect();
        // const session = await getServerSession(authOptions)
        // console.log({session})
    
        // if (!session) {
        //   return res.status(401).json({ message: "You must be signed in to access this" });
        // } 
      
        
        const bank = await BankModel.find({}).lean();
    
        // console.log({bank})

        return NextResponse.json(bank, { status: 200 });
    
        // return res.status(200).json({ users: allUsers });
      } catch (error) {
        console.error(error);
        // return res.status(500).json({ message: 'Internal server error' });
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

      }
}
 
// export async function HEAD(req: NextRequest) {}
 

export async function POST(req: NextRequest) {
  try {
      await dbConnect();


      const body: IBank = await req.json()

      try {
        await authorizeAdmin(req)
      } catch (error: any) {
        return NextResponse.json({ message: error?.message || "Unauthorized access" }, { status: 403 });
      }



      if (!body.name || !body.number || !body.branch || !body.reference || !body.recipient || !body.type) {
          return NextResponse.json({ message: 'Please fill in all fields' }, { status: 400 });
      }

      const bankExists = await BankModel.findOne({
               name: body.name ? body.name : '',
      });

      if (bankExists) {
          return NextResponse.json({ message: 'Bank name already exists' }, { status: 400 });
      
      }

      const bank = await BankModel.create(body);

      if (!bank) throw new Error('Post Failed')

      return NextResponse.json(bank, { status: 200 });

  } catch (error: any) {
      console.error({error});
      return NextResponse.json({ message: error.message || 'Internal server error' }, { status: 500 });

  }
}
 
// export async function PUT(req: NextRequest) {}
 
// export async function DELETE(req: NextRequest) {}
 
// export async function PATCH(req: NextRequest) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: NextRequest) {}