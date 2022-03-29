import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private readonly UserModel: Model<User>,
    ) { }

    async create(user: User) {
        var token = Math.random().toString(36).substring(7) + user.cpf + Math.random().toString(36).substring(7);

        user.token = token;

        try {
            return await this.UserModel.create(user);
        } catch (error) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

    async login(user: any) {
        try {
            var userAux = await this.UserModel.findOne({ cpf: user.login }).exec();;
            if (userAux != null && userAux.cpf == user.login && userAux.senha == user.password) {
                var token = Math.random().toString(36).substring(7) + userAux.cpf.substring(4) + Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);
                await this.UserModel.findOneAndUpdate({ cpf: user.login }, { token: token });
                return { token: token };
            } else {
                throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
            }
        } catch (error) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

    async getUserByToken(token: string) {
        try {
            var user = await this.UserModel.findOne({ token: token }).exec();
            if (user != null) {
                return user;
            } else {
                throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
            }
        } catch (error) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

}
