import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  // เชื่อมขออนุญาติแบบ ที่ 1
  //imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017/MyKeeSongz?authSource=admin')], 
  // เชื่อมขออนุญาติแบบ ที่2
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017`, {
      user: 'root',
      pass: 'example',
      dbName: 'MyKeeSongz',
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
