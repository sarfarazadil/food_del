import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import {
  placeOrder,
  placeOrderCod,
  userOrders,
  listOrders,
  updateStatus,
} from "../controllers/orderController.js";

const orderRouter = express.Router();
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);
orderRouter.post("/userOrders", authMiddleware, userOrders);
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/placecod", authMiddleware, placeOrderCod);

export { orderRouter };
