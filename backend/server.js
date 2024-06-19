import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/erroraMiddleware.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

import connectDB from "./config/DB.js";

connectDB(); //Connect to MongoDB
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log("listening on port ", port));
