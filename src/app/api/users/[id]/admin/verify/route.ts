import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnection';
import UserModel from '@/models/UserModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/configs/authOptions"
import { authorizeAdmin } from "@/middlewares/authorize";
import { mailerAsync } from "@/lib/mailer";


// ----------------------------------------------------------------------

export async function PATCH(req: NextRequest, { params }: { params: { id: string }}) {
  try {
    await dbConnect();

    const { id } = params;
    
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const body: {
        status: string
    } = await req.json()

    try {
      await authorizeAdmin(req)
    } catch (error: any) {
      return NextResponse.json({ message: error?.message || "Unauthorized access" }, { status: 403 });
    }


    

    const user = await UserModel.findByIdAndUpdate(id, body, { new: true });

    if (!user) {
      return NextResponse.json({ message: 'failed to verify user' }, { status: 400 });
    }

    if (body.status == "verified") {
      try {          
        await mailerAsync({
            subject: "KYC Approved - Avestock",
            to: user.email,
            message: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>KYC Approved</title>
            </head>
            <body>
                <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
                    <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                        <div style="padding: 24px; padding-top: 24px;">
                            <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                                Your KYC request has been approved. You can continue trading on Avestock.
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
    } else if (body.status == "failed") {
      try {          
        await mailerAsync({
          to: user.email,
          subject: "KYC Declined - Avestock",
          message: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>KYC Declined</title>
            </head>
            <body>
                <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
                    <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                        <div style="padding: 24px; padding-top: 24px;">
                            <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                                Your KYC request has been declined. Please contact support for more information.
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

    }
          

    return NextResponse.json(user, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  }
}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(req: Request) {}