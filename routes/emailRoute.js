const express = require("express");
const router = express.Router();
const EmailService = require("../services/EmailService");

function generateEmailContent(name, email, message) {
    return `
        <html>
            <head>
                <style>
                /* Your CSS styles */
            </style>
            </head>
            <body>
            <div class="container">
                <div class="header">
                <h2>Contact Us Message</h2>
                </div>
                <div class="content">
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
                </div>
            </div>
            </body>
        </html>
    `;
}

router.post("/userMessage", async (req, res) => {
    const { email, name, message } = req.body;

    const emailContent = generateEmailContent(
        name,
        email,
        message
    );

    try {
        await EmailService.sendOTP(emailContent);
        return res.status(200).json({ message: "Mail sended successfully" });
    } catch (error) {
        console.error("Error sending Mail:", error);
        return res.status(500).json({ message: "Error sending Mail" });
    }
});

module.exports = router;
