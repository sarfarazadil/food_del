import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { foodRouter } from "./routes/foodRoutes.js";
import { cartRouter } from "./routes/cartRoutes.js";
import { userRouter } from "./routes/userRoute.js";
import { orderRouter } from "./routes/orderRoutes.js";
import "dotenv/config.js";
// app config
const app = express();
const PORT = 4000;

// middleware

app.use(express.json()); // using this middleware whenever we get a request from frontend it parse through json
app.use(cors()); // using this we can access backend from any frontend
//de connection
connectDB();

//api end point
app.use("/api/order", orderRouter);
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.use("/images", express.static("./uploads"));
app.get("/", (req, res) => {
  res.send("API working");
});

// http://localhost:4000/
// username -
// sarfarazadil18
// password  -
// 6AOkJJwOfzaKCaot

//   mongodb+srv://sarfarazadil18:6AOkJJwOfzaKCaot@cluster01.nm57z.mongodb
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
