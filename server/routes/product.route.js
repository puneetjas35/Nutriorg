import { Router } from "express";
import {
  createProductController,
  getProductController,
  getSingleProductController
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post("/create", createProductController);
productRouter.get("/get", getProductController);
productRouter.get("/:slug", getSingleProductController);

export default productRouter;