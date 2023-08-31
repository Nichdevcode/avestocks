import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import { NextResponse } from 'next/server';
import { IUser, IUserLogin } from '@/interfaces';
import UserModel from '@/models/UserModel';
import { createToken } from '@/utils/createToken';
import { mailer } from '@/lib/mailer';
import { nanoid } from 'nanoid'

// ----------------------------------------------------------------------
 
 
export async function POST(req: Request) {
    try {
        await dbConnect();

        // body.email = "nicholasjd12@gmail.com";
        // body.password = "123456";
        // body.username = "nicholasjd12";
        // body.confirm_password = "123456";

        const credentials: {
            email: string
        }= await req.json()


        if (!credentials || !credentials.email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        const user = await UserModel.findOne({
              email: credentials.email ? credentials.email : '' ,
        });

        if (!user) {
            return NextResponse.json({ message: 'Invalid User' }, { status: 400 });
        }

        const code = nanoid(10)
        const time = Date.now()

        


        user.reset = {
           code,
           time
        }

        await user.save()
        
        try {          
            await mailer({
                subject: "Password Reset - Avestock",
                to: credentials.email,
                message: `
                <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Reset Password</title>
                    </head>
                    <body>
                        <div style="background-color: #F5F5F5; font-family: 'Montserrat', sans-serif;">
                            <main style="background-color: white; color: #1C1C1C; max-width: 507px; margin-inline: auto; ">
                                <div style="padding: 24px; padding-top: 24px;">
                                    <p style="font-size: 14px; max-width: 410px; line-height: 25px; letter-spacing: 0.02em; font-weight: 500; opacity: 0.95;">
                                        Dear ${user.first_name}, <br /><br />
                                        We received a request to reset your password for your Avestocks account. If you didn't initiate this request, you can safely ignore this email
                                    </p>
                                    <p style="margin-top: 5px;">To reset your password, please click the link below:</p>
                                    <p><a href="https://avestocks.com/reset?email=${credentials.email}&code=${code}">Reset Password</a></p>
                                    <p>If the above link doesn't work, you can copy and paste the following URL into your web browser:</p>
                                    <p style="margin-top: 5px;">https://avestocks.com/reset?email=${credentials.email}&code=${code}</p>
                                    <p>This link will expire in 20 munites, so make sure to reset your password promptly.</p>
                                    <p style="margin-top: 5px;">If you have any questions or need further assistance, please don't hesitate to reach out to our support team at <a href="mailto:support@avestocks.com">support@avestocks.com</a></p>
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
        } catch (error: any) {
            return NextResponse.json({ message: error?.message || 'An error occured' }, { status: 500 });
            
        }
        
        return NextResponse.json({ "message": "Password Reset Email Sent" }, { status: 200 });

    } catch (error: any) {
        console.error({error});
        return NextResponse.json({ message: error?.message || 'Internal server error' }, { status: 500 });
    }
}
 

// export async function OPTIONS(req: NextApiRequest, res: NextApiResponse) {}