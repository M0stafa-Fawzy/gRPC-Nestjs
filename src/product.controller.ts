import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { CreateProductRequest, UpdateProductRequest, FindOneRequest, DeleteProductRequest } from './dtos/index';

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @GrpcMethod('ProductService', 'CreateProduct')
    async createProduct(data: CreateProductRequest) {
        return this.productService.create(data);
    }

    @GrpcMethod('ProductService', 'FindOne')
    async findOne(data: FindOneRequest) {
        return this.productService.findOne(data.id);
    }

    @GrpcMethod('ProductService', 'GetAllProducts')
    async getAllProducts() {
        const products = await this.productService.findAll();
        return { products };
    }

    @GrpcMethod('ProductService', 'UpdateProduct')
    async updateProduct(data: UpdateProductRequest) {
        return this.productService.update(data.id, data);
    }

    @GrpcMethod('ProductService', 'DeleteProduct')
    async deleteProduct(data: DeleteProductRequest) {
        return this.productService.delete(data.id);
    }
}