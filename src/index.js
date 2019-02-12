const express = require("express");
const app = express();

const { conection } = require("./helpers/DataBase");

const cors = require("cors");

//const server = require("http").Server(app);
//const io = require("socket.io")(server);

conection();

app.get("/", function(req, res) {
    res.send("Bem vindo ao PrintShop API!");
})

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

app.listen(process.env.PORT || 3000, () => {
    console.log("Server start on port 3000");
});

