import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


//  ใช้สำหรับ สื่อสาร กับ mongoose
export type ProductDocument = Product & Document;

@Schema() 
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// prop คือ Regulator  กำหนดผ่าน prop 
// บรรทัดที่ 8-9 คือต้องมี name ใส่มาเสมอ