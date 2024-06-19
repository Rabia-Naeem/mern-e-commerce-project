import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

import connectDB from "./config/DB.js";

connectDB(); //Connect to MongoDB
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoutes);

app.listen(port, () => console.log("listening on port ", port));
