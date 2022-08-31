import { Response,Request } from "express";
import CreateProductService from "../services/createProductServices";
import ListProductService from "../services/ListProductService";

class ProductController {
    // não se trata regra de negocio aqui!
    public async create(request: Request, reponse:Response): Promise<Response>{
        // obter ps dados do navegador
        let {name,quantity,price} = request.body
        //vamos criar objeto de classe CreateProductService
       const object =  new CreateProductService()
       const newProduct = await object.execute({name, quantity,price})
       //retorna ao reponder este novo produto criando em Formulario Json
       return reponse.json(newProduct)
    }

    public async list(request:Request,response:Response):Promise<Response>{

        let listService = new ListProductService()
        let products = await listService.execute()
        return response.json(products)
    }

        
}
export default ProductController