import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import UserModel from '@/models/UserModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { IChangePassword } from "@/interfaces";
const bcrypt = require('bcrypt');


// ----------------------------------------------------------------------

 
export async function POST(req: NextRequest, { params }: { params: { id: string, type: string }}) {
  try {
    await dbConnect();
    // const session = await getServerSession(authOptions)
    // console.log({session})

    // if (!session) {
    //   return res.status(401).json({ message: "You must be signed in to access this" });
    // } 

    const { id, type } = params;

    console.log({id, params})
    
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const body: IChangePassword = await req.json()

    if (type === "change") {
      if (!body.confirm_password || !body.old_password || !body.password) {
        return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
      }

      if (body.confirm_password  != body.password) {
        return NextResponse.json({ message: 'New password must be thesame as confirm password' }, { status: 400 });
      }

      if (body.password.length < 6) {
        return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 });
      }

      const user = await UserModel.findById(id);

      if (!user) {
        return NextResponse.json({ message: 'User Not found' }, { status: 400 });
      }

      const isMatch = await user.comparePassword(body.old_password);
    
      if (!isMatch) {
        return NextResponse.json({ message: 'Incorrect Old Password' }, { status: 400 });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(body.password, salt);

      user.password = hashedPassword
      user.save()

      return NextResponse.json(user, { status: 200 }); 
    }

    return NextResponse.json({ message: 'Not Available' }, { status: 400 });


  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  }
}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: Request) {}