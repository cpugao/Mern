const mongoose= require("mongoose");

const ProductSchema =  new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "{PATH} is required."]
        },
        price: {
            type: Number,
            require: [true, "{PATH} is required."]
        },
        description: {
            type: String,
            require: [true, "{PATH} is required."]
        }
    },
    { timpestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;