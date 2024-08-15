// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         type: "login",
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// class EmailService {
//     static async sendOTP(emailContent) {
//         try {
//             const mailOptions = {
//                 from: '"Portfolio" <nodeapp53@gmail.com>',
//                 to: "pasindugunasekara882@gmail.com",
//                 subject: "Contacted you from your Portfolio",
//                 html: emailContent,
//             };

//             const info = await transporter.sendMail(mailOptions);
//             console.log(`Email sent: ${info.response}`);
//             return info.response;
//         } catch (error) {
//             console.error("Error sending email:", error);
//             throw new Error("Error sending email");
//         }
//     }
// }

// module.exports = EmailService;


const nodemailer = require("nodemailer");

class EmailService {
    static async sendEmail(to, subject, htmlContent) {
        // Configure the email transporter
        const transporter = nodemailer.createTransport({
            service: "YourEmailProvider", // e.g., Gmail, SendGrid, etc.
            auth: {
                user: "your-email@example.com", // Your email address
                pass: "your-email-password", // Your email password or app password
            },
        });

        // Define the email options
        const mailOptions = {
            from: "your-email@example.com",
            to,
            subject,
            html: htmlContent,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
    }
}

module.exports = EmailService;




