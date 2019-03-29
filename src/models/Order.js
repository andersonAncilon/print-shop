const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    orderNumber: {
        type: Number,
        
    }
});

module.exports = mongoose.model("Order", OrderSchema);