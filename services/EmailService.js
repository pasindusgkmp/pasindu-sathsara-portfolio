const nodemailer = require("nodemailer");

class EmailService {
    static async sendEmail(to, subject, htmlContent) {
        try {
            // Configure the email transporter
            const transporter = nodemailer.createTransport({
                service: "gmail", // or any other email service like SendGrid, Outlook, etc.
                auth: {
                    user: "pasindugunasekara889@gmail.com", // Your email address
                    pass: "phhn kofg aiej jtce", // Your email password or app password
                },
            });

            // Define the email options
            const mailOptions = {
                from: "pasindugunasekara882@gmail.com",
                to: "pasindugunasekara889@gmail.com",
                subject: "Contacted you from your Portfolio",
                html: htmlContent,
            };

            // Send the email
            await transporter.sendMail(mailOptions);
        } catch (error) {
            console.error("Error in EmailService:", error);
            throw new Error("Failed to send email"); // This will trigger the error message in your route
        }
    }
}

module.exports = EmailService;
