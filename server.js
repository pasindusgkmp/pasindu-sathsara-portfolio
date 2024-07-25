const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();

const emailRoute = require("./routes/emailRoute");

app.use(express.json());

app.use("/api/emails", emailRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
