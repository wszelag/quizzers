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

app.use("/users", require("./routes/users/router"));
app.use("/question", require("./routes/question/router"));

app.listen(PORT, () => console.log("server is listening"));
