import { IsString, IsMongoId } from 'class-validator';

export class FindOneRequest {
    @IsString()
    @IsMongoId()
    id: string;
}