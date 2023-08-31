import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import DepositModel from '@/models/DepositModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { IApproveDeposit, IDeposit } from "@/interfaces";
import UserModel from "@/models/UserModel";
import { authorizeAdmin } from "@/middlewares/authorize";
import { mailerAsync } from "@/lib/mailer";


// ----------------------------------------------------------------------

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

    try {
      await authorizeAdmin(req)
    } catch (error: any) {
      return NextResponse.json({ message: error?.message || "Unauthorized access" }, { status: 403 });
    }


    const body: IApproveDeposit = await req.json()

    if (!body || !body.status) {
      return NextResponse.json({ message: 'Status is required' }, { status: 400 });
    }
    
    if (body.status === 'denied') {

      // const deposit = await DepositModel.findByIdAndUpdate(id, body, { new: true }).lean();
      const deposit = await DepositModel.findById(id);

      if (!deposit) {
        return NextResponse.json({ message: 'Deposit not found' }, { status: 400 });
      }

      if (deposit.status === 'approved') {
        return NextResponse.json({ message: 'Deposit already approved' }, { status: 400 });
      } else if (deposit.status === 'denied') {
        return NextResponse.json({ message: 'Deposit already denied' }, { status: 400 });
      }

      deposit.status = 'denied';
      await deposit.save();

      const user = await UserModel.findById(deposit.userId || "")

      try {          
        await mailerAsync({
          to: user.email,
          subject: "Deposit Declined - Avestock",
          message: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <title>Deposit Declined</title>
          </head>
          <body>
              <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
                  <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                      <div style="padding: 24px; padding-top: 24px;">
                          <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                              Your deposit request has been declined. Please contact support for more information.
                          </p>
                          <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                              <p>Best Regards,</p>
                              <p>The Avestocks Team</p>
                          </div>
                          <p style="height: 1px; background-color: #00000025;"></p>
                          <div>
                              <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                                  Level 28, One International Tower, 2000 Barangaroo Avenue, 2000 Sydney, AUSTRALIA, NSW. <br /><br />
                                  COPYRIGHT © 2023 AVESTOCKS, ALL RIGHTS RESERVE
                              </p>
                          </div>
                      </div>
                  </main>
              </div>
          </body>
          </html>
          `
        })
      } catch (error: any) {
        console.log({ error })
      }
  

      return NextResponse.json(deposit, { status: 200 });

    } else if (body.status === 'approved') {

      const deposit = await DepositModel.findById(id);

      if (!deposit) {
        return NextResponse.json({ message: 'Deposit not found' }, { status: 400 });
      }

      if (deposit.status === 'approved') {
        return NextResponse.json({ message: 'Deposit already approved' }, { status: 400 });
      } else if (deposit.status === 'denied') {
        return NextResponse.json({ message: 'Deposit already denied' }, { status: 400 });
      }

      const user = await UserModel.findById(deposit.userId || '');

      if (!user) {
        return NextResponse.json({ message: 'User Not Found.. Failed to update user balance' }, { status: 400 });
      }

      user.balance += deposit.amount;
      user.total_deposit = user.total_deposit + 1;
      deposit.status = 'approved';

      // perform two mongoose operations at once

      const [updatedUser, updatedDeposit] = await Promise.all([
        user.save(),
        deposit.save()
      ]);

      if (!updatedUser || !updatedDeposit) {
        return NextResponse.json({ message: 'Failed to update user balance' }, { status: 400 });
      }

      
      try {          
        await mailerAsync({
            subject: "Deposit Approved - Avestock",
            to: user.email,
            message: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Deposit Approved</title>
            </head>
            <body>
                <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
                    <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                        <div style="padding: 24px; padding-top: 24px;">
                            <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                                Your deposit request has been approved. Your funds have been credited to your account.
                            </p>
                             <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                                <p>Best Regards,</p>
                                <p>The Avestocks Team</p>
                            </div>
                            <p style="height: 1px; background-color: #00000025;"></p>
                            <div>
                                <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                                    Level 28, One International Tower, 2000 Barangaroo Avenue, 2000 Sydney, AUSTRALIA, NSW. <br /><br />
                                    COPYRIGHT © 2023 AVESTOCKS, ALL RIGHTS RESERVE
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
            </html>
            `
        })
      } catch (error: any) {
        console.log({ error })
      }

  
      return NextResponse.json(updatedDeposit, { status: 200 });
    }

    return NextResponse.json({ message: 'Invalid status' }, { status: 400 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  }
}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: Request) {}