import { IsString, IsMongoId } from 'class-validator';

export class DeleteProductRequest {
    @IsString()
    @IsMongoId()
    id: string;
}