import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { map } from 'rxjs';
import { UserService } from 'src/users/shared/user.service';
import { Product } from './products';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel('Product') private readonly ProductModel: Model<Product>,
        private UserService: UserService,
        public http: HttpService
    ) { }

    async create(product: Product) {

        var user = await this.UserService.getUserByToken(product.token);
        product.user = user._id;

        try {
            return await this.ProductModel.create(product);
        } catch (error) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

    async findAll() {
        return await this.ProductModel.find().exec();
    }

    async getById(id: string) {
        var mongoose = require('mongoose');
        var _id = mongoose.Types.ObjectId(id);
        return await this.ProductModel.findById(_id).exec();
    }

    async postPhoto(img) {
        

        try {
            var data = await this.http.post('https://api.imgbb.com/1/upload?key=fdfdcc59379077648edd9520453d9f34&image=' + img, {image: img}).pipe(
                map(response => response.data)
            );
        } catch (e) {
            console.log(e)
        }

        console.log(data);

        return null;
    }

}
