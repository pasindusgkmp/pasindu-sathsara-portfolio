const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "login",
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
    },
});

class EmailService {
    static async sendOTP(emailContent) {
        try {
            const mailOptions = {
                from: '"Portfolio" <nodeapp53@gmail.com>',
                to: "kaveen.dinethma@gmail.com",
                subject: "Contacted you from your Portfolio",
                html: emailContent,
            };

            const info = await transporter.sendMail(mailOptions);
            console.log(`OTP code sent to kaveen.dinethma@gmail.com: ${info.response}`);
        } catch (error) {
            console.error("Error Email code:", error);
        }
    }
}

module.exports = EmailService;
