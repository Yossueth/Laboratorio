const express = require("express");
const cors = require("cors");
const app = express();
const productsRoutes = require("../routes/productsRoutes");

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log("servidor corriendo en http://localhost:${PORT}");
});
