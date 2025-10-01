const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    nombre: { type: String, required: true, index: true }, // índice para búsquedas rápidas
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    stock: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);

