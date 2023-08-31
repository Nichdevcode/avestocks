import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import { NextResponse } from 'next/server';
import { IConfirmResetPassword, IUser, IUserLogin } from '@/interfaces';
import UserModel from '@/models/UserModel';
import { createToken } from '@/utils/createToken';
import { mailer } from '@/lib/mailer';
import { nanoid } from 'nanoid'

const bcrypt = require('bcrypt');

// ----------------------------------------------------------------------
 
 
export async function POST(req: Request) {
    try {
        await dbConnect();

        const credentials: IConfirmResetPassword = await req.json()


        if (!credentials || !credentials.email || !credentials.code) {
            return NextResponse.json({ message: 'Invalid Details' }, { status: 400 });
        }

        const user = await UserModel.findOne({
              email: credentials.email ? credentials.email : '' ,
        });

        if (!user) {
            return NextResponse.json({ message: 'Invalid User' }, { status: 400 });
        }

        if (user.reset.code != credentials.code) {
            console.log({
                reset: user.reset.code,
                code: credentials.code
            })
            return NextResponse.json({ message: 'Invalid Reset Code' }, { status: 400 });
        }

        if (credentials.new_password.length < 6) {
            return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 });
        }
        if (credentials.new_password != credentials.confirm_password) {
            return NextResponse.json({ message: 'Password and confirm password must be thesame' }, { status: 400 });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(credentials.new_password, salt);

        user.password = hashedPassword

        await user.save()
        
        try {          
            await mailer({
                subject: "Password Reset Successful - Avestock",
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
                                        You have successfully reset your password
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