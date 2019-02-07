const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: {
        unique: true,
        type: String
    },
    password: String
})

module.exports = mongoose.model("User", UserSchema);