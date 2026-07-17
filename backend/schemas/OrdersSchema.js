const {Schema} = require("mongoose");

const OrderSChema = new Schema({
     name:String,
    qty:Number,
    price:Number,
    mode:String
});

module.exports = {OrderSChema};