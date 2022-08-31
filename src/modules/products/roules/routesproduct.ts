import { Router } from "express";
import { deflate } from "zlib";
import ProductController from "../controlers/ProdutctController";

const routerProduct = Router()

const controllerProduct = new ProductController()
// estq criada a rota para inserir um produto no banco de dados 
routerProduct.post('/',controllerProduct.create)

routerProduct.get('/', controllerProduct.list)

export default routerProduct