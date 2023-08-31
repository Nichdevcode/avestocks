import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import WithdrawalModel from '@/models/WithdrawalModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { IWithdrawal } from '@/interfaces';
import UserModel from "@/models/UserModel";

// ----------------------------------------------------------------------


export async function GET(req: NextRequest) {
    try {
        await dbConnect();
        // const session = await getServerSession(authOptions)
        // console.log({session})
    
        // if (!session) {
        //   return res.status(401).json({ message: "You must be signed in to access this" });
        // } 
        
        const withdrawal = await WithdrawalModel.find({}).sort({ createdAt: -1 }).lean();
    
        // console.log({withdrawal})

        return NextResponse.json(withdrawal, { status: 200 });
    
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

      // body.email = "nicholasjd12@gmail.com";
      // body.password = "123456";
      // body.username = "nicholasjd12";
      // body.confirm_password = "123456";

      const body: IWithdrawal = await req.json()


      if (!body.userId || !body.email || !body.amount || !body.type) {
          return NextResponse.json({ message: 'Please fill in all fields' }, { status: 400 });
      }

      const user = await UserModel.findById(body.userId ? body.userId : '');

      if (!user) {
          return NextResponse.json({ message: 'User not found' }, { status: 400 });
      }

      if ((user.balance < body.amount) && (user.total_earnings < body.amount)) {
        return NextResponse.json({ message: 'Insufficient balance' }, { status: 400 });
      }
      
      const withdrawal = await WithdrawalModel.create(body)

      if (!withdrawal) throw new Error('Withdrawal Request Failed')

      return NextResponse.json(withdrawal, { status: 200 });

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