import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //limpia la data que no esta validada
      forbidNonWhitelisted: true, //envia un msg error con las propiedades que no existen
    })
  );
  await app.listen(3000);
}
bootstrap();
