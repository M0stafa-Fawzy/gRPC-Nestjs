import { IsString, IsNumber, IsNotEmpty, IsMongoId } from 'class-validator';

export class UpdateProductRequest {
    @IsString()
    @IsMongoId()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    price: number;
}