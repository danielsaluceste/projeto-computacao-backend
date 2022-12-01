import { Body, Controller, Delete, Get, Head, Header, Headers, HttpException, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { get } from 'http';
import { Product } from './shared/products';
import { ProductService } from './shared/products.service';

@Controller('help/products')
export class ProductsController {
    
    constructor(private ProductService: ProductService) { }

    @Post()
    async create(@Body() Product: Product) : Promise<Product> {
        return this.ProductService.create(Product);
    }

    @Get()
    async findAll() : Promise<Product[]> {
        return this.ProductService.findAll();
    }

    @Get('/:id')
    async getById(@Param() id: string) : Promise<Product> {
        return this.ProductService.getById(id);
    }

    @Delete('/:id')
    async delete(@Param() id: string) : Promise<Product> {
        return this.ProductService.delete(id);
    }

    @Post('photo')
    async postPhoto(@Body() photo: any) {
        return this.ProductService.postPhoto(photo);
    }

}
