const express = require("express");
const router = express.Router();
const EmailService = require("../services/EmailService");

// Function to generate the HTML content for the email
function generateEmailContent(name, email, message) {
    return `
        <html>
            <head>
                <style>
                    .container {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    .header {
                        background-color: #f2f2f2;
                        padding: 10px;
                    }
                    .content {
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>Contact Us Message</h2>
                    </div>
                    <div class="content">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong> ${message}</p>
                    </div>
                </div>
            </body>
        </html>
    `;
}

// POST endpoint to receive user messages
router.post("/userMessage", async (req, res) => {
    const { email, name, message } = req.body;

    // Generate the HTML content for the email
    const emailContent = generateEmailContent(name, email, message);

    try {
        // Use the EmailService to send the email
        await EmailService.sendEmail(email, "New Contact Us Message", emailContent);
        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email" });
    }
});

module.exports = router;





