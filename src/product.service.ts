import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./product.schema";
import { CreateProductRequest } from './dtos/create-product.dto';
import { UpdateProductRequest } from './dtos/update-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<Product>,
    ) { }

    async create(createProductDto: CreateProductRequest) {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    async findOne(id: string) {
        return this.productModel.findById(id);
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find();
    }

    async update(id: string, updateProductDto: UpdateProductRequest) {
        return this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true });
    }

    async delete(id: string) {
        const result = await this.productModel.deleteOne({ _id: id });
        return { success: result.deletedCount > 0 };
    }
}