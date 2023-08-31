import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import InvestModel from '@/models/InvestModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { IHandleInvest, IInvest } from "@/interfaces";
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

    const body: IHandleInvest = await req.json()

    try {
      await authorizeAdmin(req)
    } catch (error: any) {
      return NextResponse.json({ message: error?.message || "Unauthorized access" }, { status: 403 });
    }


    if (!body || !body.status) {
      return NextResponse.json({ message: 'Status is required' }, { status: 400 });
    }
    
    
    if (body.status === 'paused') {
      const start = Date.now();

      const invest = await InvestModel.findById(id);

      if (!invest) {
        return NextResponse.json({ message: 'Investment not found' }, { status: 400 });
      }

      if (invest.status === 'paused') {
        return NextResponse.json({ message: 'Investment already paused' }, { status: 400 });
      } else if (invest.status === 'completed') {
        return NextResponse.json({ message: 'Investment already Completed' }, { status: 400 });
      }

      invest.status =  body.status,
      invest.pause = {
        start,
        status: true,
        total: invest.pause?.total || 0
      }

      const user = await UserModel.findById(invest.userId || '')

        try {       
          await mailerAsync({
            to: user.email,
            subject: "Trade Stopped Running - Avestock",
            message: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Trade Stopped Running</title>
                </head>
                <body>
                    <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
                        <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                            <div style="padding: 24px; padding-top: 24px;">
                                <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                                    We regret to inform you that the trade you were participating in has been stopped running. Please review your account for more information.
                                </p>
                                 <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                                    <p>Best Regards,</p>
                                    <p>The Avestocks Team</p>
                                </div>
                                <p style="height: 1px; background-color: #00000025;"></p>
                                <div>
                                    <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                                        Level 28, One International Tower, 2000 Barangaroo Avenue, 2000 Sydney, AUSTRALIA, NSW. <br /><br />
                                        COPYRIGHT © 2023 AVESTOCKS, ALL RIGHTS RESERVED
                                    </p>
                                </div>
                            </div>
                        </main>
                    </div>
                </body>
                </html>
                `
          })
        } catch (error) {
          console.log({error})
        }
      

     await invest.save()

     return NextResponse.json(invest, { status: 200 });

    } else if (body.status === 'active') {
 
      const invest = await InvestModel.findById(id);

      if (invest.status === 'active') { 
        return NextResponse.json({ message: 'Investment already Active' }, { status: 400 });
      } else if (invest.status === 'completed') {
        return NextResponse.json({ message: 'Investment already Completed' }, { status: 400 });
      }

      if (!invest) {
        return NextResponse.json({ message: 'Investment not found' }, { status: 400 });
      }

      const start = invest.pause?.start
      const total = invest.pause?.total

      if (!start) {
        return NextResponse.json({ message: 'Start Pause Time error' }, { status: 400 });
      }

      const difference =  Date.now() - start

      const newTotal = total ? total + difference : difference

      invest.pause = {
        status: false,
        start: 0,
        total: newTotal
      }

      invest.status = body.status

      const user = await UserModel.findById(invest.userId || '')

      try {       
        await mailerAsync({
          to: user.email,
          subject: "Trade Resumed Running - Avestock",
          message: `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <title>Trade Resumed Running</title>
              </head>
              <body>
                  <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
                      <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                          <div style="padding: 24px; padding-top: 24px;">
                              <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                                  We're pleased to inform you that the trade you were participating in has resumed running. Your trading activity has been reactivated.
                              </p>
                               <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                                  <p>Best Regards,</p>
                                  <p>The Avestocks Team</p>
                              </div>
                              <p style="height: 1px; background-color: #00000025;"></p>
                              <div>
                                  <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                                      Level 28, One International Tower, 2000 Barangaroo Avenue, 2000 Sydney, AUSTRALIA, NSW. <br /><br />
                                      COPYRIGHT © 2023 AVESTOCKS, ALL RIGHTS RESERVED
                                  </p>
                              </div>
                          </div>
                      </main>
                  </div>
              </body>
              </html>
              `
      })
      
      } catch (error) {
        console.log({error})
      }

      await invest.save()
      return NextResponse.json(invest, { status: 200 });

    } else if (body.status === 'completed') {

      const invest = await InvestModel.findById(id);

      const user = await UserModel.findById(invest.userId || '')

      if (!invest) {
        return NextResponse.json({ message: 'Investment not found' }, { status: 400 });
      }

      if (!user) {
        return NextResponse.json({ message: 'Investment User not found' }, { status: 400 });
      }

      if (invest.status === 'completed') {
        return NextResponse.json({ message: 'Investment already Completed' }, { status: 400 });
      }
      
      // remove from total investment and add to balance
      user.total_earnings = user.balance + invest.amount
      user.total_investment = user.total_investment - invest.amount

      // mark investment as completed
      invest.status = body.status

      const [userUpdate, investUpdate] = await Promise.all([user.save(), invest.save()])

      if (!userUpdate || !investUpdate) {
        return NextResponse.json({ message: 'Investment Update Error' }, { status: 400 });
      }

      try {      
        await mailerAsync({
          to: user.email,
          subject: "Trade Completed - Avestock",
          message: `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <title>Trade Completed</title>
              </head>
              <body>
                  <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
                      <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                          <div style="padding: 24px; padding-top: 24px;">
                              <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                                  Congratulations! Your trade has been successfully completed. Thank you for using Avestock.
                              </p>
                              <div style="margin-top: 42px; font-weight: 500; opacity: 0.97; margin-bottom: 42px; font-size: 14px;">
                                  <p>Best Regards,</p>
                                  <p>The Avestocks Team</p>
                              </div>
                              <p style="height: 1px; background-color: #00000025;"></p>
                              <div>
                                  <p style="font-size: 12px; margin-top: 30px; margin-bottom: 30px; color: #444444; max-width: 410px; line-height: 25px; letter-spacing: 0.02em;">
                                      Level 28, One International Tower, 2000 Barangaroo Avenue, 2000 Sydney, AUSTRALIA, NSW. <br /><br />
                                      COPYRIGHT © 2023 AVESTOCKS, ALL RIGHTS RESERVED
                                  </p>
                              </div>
                          </div>
                      </main>
                  </div>
              </body>
              </html>
              `
        })
      } catch (error) {
        console.log({error})
      }
    


      return NextResponse.json(invest, { status: 200 });

    }

    return NextResponse.json({ message: 'Status Error' }, { status: 400 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  }
}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: Request) {}