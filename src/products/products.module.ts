import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from 'src/users/shared/user.service';
import { UsersModule } from 'src/users/users.module';
import { ProductsController } from './products.controller';
import { ProductSchema } from './schemas/products.schema';
import { ProductService } from './shared/products.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
        ProductsModule,
        UsersModule,
        HttpModule
    ],
    controllers: [ProductsController],
    providers: [ProductService]
})
export class ProductsModule { }
