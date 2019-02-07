const express = require("express");
const app = express();

const mongoose = require("mongoose");

const cors = require("cors");

const server = require("http").Server(app);
const io = require("socket.io")(server);

const userName = "adm";
const pswd = "adm123";

mongoose.connect(`mongodb://${userName}:${pswd}@ds225205.mlab.com:25205/printshop`, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

app.listen(3000, () => {
    console.log("Server start on port 3000");
});

