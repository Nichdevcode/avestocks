import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import PlanModel from '@/models/PlanModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { IPlan } from '@/interfaces';
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
      
        
        const plan = await PlanModel.find({}).lean();
    
        // console.log({plan})

        return NextResponse.json(plan, { status: 200 });
    
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

      const body: IPlan = await req.json()
      try {
        await authorizeAdmin(req)
      } catch (error: any) {
        return NextResponse.json({ message: error?.message || "Unauthorized access" }, { status: 403 });
      }


      if (!body.maximum || !body.name || !body.minimum || !body.roi) {
          return NextResponse.json({ message: 'Please fill in all fields' }, { status: 400 });
      }

      const planExists = await PlanModel.findOne({
               name: body.name ? body.name : '',
      });

      if (planExists) {
          return NextResponse.json({ message: 'plan already exists' }, { status: 400 });
      
      }

      const plan = await PlanModel.create(body);

      if (!plan) throw new Error('Post Failed')

      return NextResponse.json(plan, { status: 200 });

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