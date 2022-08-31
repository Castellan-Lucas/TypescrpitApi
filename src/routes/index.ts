import { Router } from "express";
import routerProduct from "../modules/products/roules/routesproduct";

const router = Router()
// quem reponde a rota /product é routerProduct
router.use('/product',routerProduct)

export default router