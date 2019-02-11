const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("User", UserSchema);