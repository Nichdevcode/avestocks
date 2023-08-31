import nodemailer from 'nodemailer';

// ----------------------------------------------------------------------

export const mailer =  async ({ subject, message, to }: { subject: string, message: string, to: string }) => {
  // try {
      const transporter = nodemailer.createTransport({
        service: 'zoho',
        // host: "smtp.zoho.com",
        host: 'smtp.zoho.com',
        // host: 'smtppro.zoho.com',
        authMethod: "LOGIN",
        // port: 587,
        // secure: false,
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "support@avestocks.com",
          pass: "Avestocks1@#",
        },
      });


      const mailOptions = {
        from: "support@avestocks.com",
        to,
        // to: "nicholasduadei14@gmail.com",
        subject: subject || "Avestocks",
        // text: "New  message from Avestock",
        html: message
      };


      // Send the email
    try {
      const email =  await transporter.sendMail(mailOptions)  
      console.log('Email sent successfully!');
      console.log({email})
      return
    } catch (error: any) {
      console.log({ error })
      throw new Error(`An error occurred while sending the email. ${error.message || ''}`);
    }
}

export const mailerAsync =  async ({ subject, message, to }: { subject: string, message: string, to: string }) => {
  // try {
      const transporter = nodemailer.createTransport({
        service: 'zoho',
        // host: "smtp.zoho.com",
        host: 'smtp.zoho.com',
        // host: 'smtppro.zoho.com',
        authMethod: "LOGIN",
        // port: 587,
        // secure: false,
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "avestocks@avestocks.com",
          pass: "Avestocks1@#",
        },
      });


      const mailOptions = {
        from: "avestocks@avestocks.com",
        to,
        // to: "nicholasduadei14@gmail.com",
        subject: subject || "Avestocks",
        // text: "New  message from Avestock",
        html: message
      };


      // Send the email
    transporter.sendMail(mailOptions, function(error: any, info) {
        if (error) {
            console.log('Error occurred:', error.message);

            throw new Error('An error occurred while sending the email');
        } else {
          console.log({
            to,
            subject
          })
            console.log('Email sent successfully!');
            return 
        }
    });   
    
}
 