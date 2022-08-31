import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product.";
import ProductRepository from "../typeorm/repositories/ProductRepository";

// vamos criar um tipo de dado em TS com interface
interface IRequest {
    name:string;
    quantity:number;
    price:number;
}

class CreateProductService {
// Criando um metodo assincrono que executa a inserção 
// Metodo precisa prometer que ira retornar um produto
    public async execute({name,quantity,price}: IRequest): Promise<Product>{

        //obter p repositorio de product

       const productRepository =  getCustomRepository(ProductRepository)
       // criando uma regra de negocio, que é realizada dentro do service
       const productExist = await productRepository.findByName(name);

       if(productExist){
            //lançando uma exeção
            throw new AppError('Já existe um produto com este nome')
       }
       // ele só chega nesta area se nao tiver nenhum produto com nome criado
       const novo = productRepository.create({
        name,quantity,price
       })
       //Efetivamente salvamos no banco 
       await productRepository.save(novo)
       return novo
    }
}
export default CreateProductService 