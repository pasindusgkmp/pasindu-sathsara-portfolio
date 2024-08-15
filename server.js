const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors"); // Import cors

const app = express();

// Enable CORS
app.use(cors({
    origin: "https://pasindusathsara.netlify.app" // Your frontend URL
}));

const emailRoute = require("./routes/emailRoute"); // Adjust the path to your route file

app.use(express.json());
app.use("/api/emails", emailRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
