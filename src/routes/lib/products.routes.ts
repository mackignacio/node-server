import { Router, Request, Response } from "express";
import models from "../../models";

class Products {
  router = Router();
  model = models["products"];

  constructor() {
    this.router.get("/", (req: Request, res: Response) => this.getAllProducts(req, res));
  }

  async getAllProducts(req: Request, res: Response) {
    const result = await this.model.find({});
    res.json(result);
  }
}

export const products = new Products().router;
