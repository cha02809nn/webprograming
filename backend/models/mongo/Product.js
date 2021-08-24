const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema (

    {
        ProductID: string,
        ProductName: string,
        ProductPrice: Number,
        ProductStrock: Number,
        ProductUnit: String
    },
    {
        timestamps: true,
        collection: "Product"
    }
)

module.exports = mongoose.model("Product", schema);