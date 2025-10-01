const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/crudpolleria", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "❌ Error de conexión:"));
db.once("open", () => console.log("✅ Conectado a MongoDB"));

module.exports = db;
