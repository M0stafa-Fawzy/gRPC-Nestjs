import { Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions = {
    transport: Transport.GRPC,
    options: {
        package: 'product',
        protoPath: join(__dirname, './../product.proto'),
        url: '0.0.0.0:5000',
    },
};