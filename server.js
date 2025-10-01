const express = require("express");
const cors = require("cors");
const db = require("./db");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(4000, () => console.log("🚀 Servidor corriendo en http://localhost:4000"));

