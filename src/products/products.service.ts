import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { promises } from 'dns';


@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const result = new this.productModel(createProductDto)
    return result.save();
  }
  // find exec เป็นคำสั่งของ mongoose
  async findAll() {
    return this.productModel.find().exec();
  }
// คล้ายๆตัวที่เคยทำใน CRUD ถอยไถ แต่ใน nestjs สั้นมาก กำหนดใน return อันเดียวไปเลย ให้สังเกตุจาก async ด้วย
  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
