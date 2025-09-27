import express from "express";
import OrderController from "../controllers/orderControllers.js";

const router = express.Router();
const orderController = new OrderController();

router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);
router.post("/", orderController.create);
router.put("/:id", orderController.update);
router.delete("/:id", orderController.delete);

export default router;