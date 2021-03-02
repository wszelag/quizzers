const express = require("express");
const cors = require("cors");
const { json, urlencoded } = require("body-parser");
const connectDB = require("./config/db");
const PORT = 8000;

const app = express();

connectDB();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/register", require("./routes/register"));

app.listen(PORT, () => console.log("server is listening"));
