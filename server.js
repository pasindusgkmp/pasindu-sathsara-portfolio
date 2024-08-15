const express = require("express");
const app = express();
const router = require("./routes/emailRoute"); // Adjust the path based on your file structure

const cors = require('cors');
app.use(cors());


app.use(express.json()); // To parse JSON bodies

// Use the router
app.use("/", router); // Make sure this is set up correctly

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
