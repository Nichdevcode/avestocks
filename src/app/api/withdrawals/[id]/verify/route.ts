import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import WithdrawalModel from '@/models/WithdrawalModel';
import { IApproveWithdrawal, IUser } from "@/interfaces";
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


    const body: IApproveWithdrawal = await req.json()

    if (!body || !body.status) {
      return NextResponse.json({ message: 'Status is required' }, { status: 400 });
    }

    if (body.status === 'denied') {
      const withdrawal = await WithdrawalModel.findById(id);

      if (!withdrawal) {
        return NextResponse.json({ message: 'Withdrawal not found' }, { status: 400 });
      }

      if (withdrawal.status == 'approved') {
        return NextResponse.json({ message: 'Withdrawal already approved' }, { status: 400 });
      } else if (withdrawal.status == 'denied') {
        return NextResponse.json({ message: 'Withdrawal already denied' }, { status: 400 });
      }

      if (!withdrawal) {
        return NextResponse.json({ message: 'failed to perform withdrawal operation' }, { status: 400 });
      }

      withdrawal.status = 'denied';
      await withdrawal.save();

      const user: any = UserModel.findById(withdrawal.userId || "")

      try {          
        await mailerAsync({
            subject: "Withdrawal Denied - Avestock",
            to: user.email,
            message: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Withdrawal Denied</title>
            </head>
            <body>
                <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
                    <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                        <div style="padding: 24px; padding-top: 24px;">
                            <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                                Your withdrawal request has been denied.
                              </p>
                            <p style="margin-top: 5px;">If you have any questions or need further assistance, please don't hesitate to reach out to our support team at <a href="mailto:support@avestocks.com">support@avestocks.com</a></p>
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
    
      

      return NextResponse.json(withdrawal, { status: 200 });

    } else if (body.status === 'approved') {

      const withdrawal = await WithdrawalModel.findById(id);

      if (!withdrawal) {
        return NextResponse.json({ message: 'Withdrawal not found' }, { status: 400 });
      }

      if (withdrawal.status == 'approved') {
        return NextResponse.json({ message: 'Withdrawal already approved' }, { status: 400 });
      } else if (withdrawal.status == 'denied') {
        return NextResponse.json({ message: 'Withdrawal already denied' }, { status: 400 });
      }

      const user = await UserModel.findById(withdrawal.userId || '');

      if (!user) {
        return NextResponse.json({ message: 'User not found.. Failed to update User Balance' }, { status: 400 });
      }

      if (user.total_earnings >= withdrawal.amount) {
        user.total_earnings -= withdrawal.amount;
      } 
      else if (user.balance >= withdrawal.amount) {
        user.balance -= withdrawal.amount;
      } else {
        return NextResponse.json({ message: 'Insufficient Balance' }, { status: 400 });
      }

      withdrawal.status = 'approved';
      user.total_withdrawal = user.total_withdrawal + 1;

         // perform two mongoose operations at once

         const [updatedUser, updatedWithdrawal] = await Promise.all([
          user.save(),
          withdrawal.save()
        ]);

        if (!updatedUser || !updatedWithdrawal) {
          return NextResponse.json({ message: 'Failed to update user balance' }, { status: 400 });
        }

        try {          
          await mailerAsync({
              subject: "Withdrawal Approved - Avestock",
              to: user.email,
              message: `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <title>Withdrawal Approved</title>
              </head>
              <body>
                  <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
                      <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                          <div style="padding: 24px; padding-top: 24px;">
                              <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                                  Your withdrawal request has been approved. You will receive your funds shortly.
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


        return NextResponse.json(updatedWithdrawal, { status: 200 });

    }
    
    return NextResponse.json({ message: 'Invalid status' }, { status: 400 });


  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

