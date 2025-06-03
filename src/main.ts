import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';
import { NestApplicationContextOptions } from '@nestjs/common/interfaces/nest-application-context-options.interface';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcClientOptions as NestApplicationContextOptions,
  );
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen();
  console.log('gRPC microservice is running squash');
}
bootstrap();