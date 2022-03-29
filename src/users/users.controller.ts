import { Body, Controller, Delete, Get, Head, Header, Headers, HttpException, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { User } from './shared/user';
import { UserService } from './shared/user.service';

@Controller('help/users')
export class UsersController {
    
    constructor(private UserService: UserService) { }

    @Post('register')
    async create(@Body() User: User) : Promise<User> {
        return this.UserService.create(User);
    }

    @Post('login')
    async login(@Body() User: any) : Promise<any> {
        return this.UserService.login(User);
    }

    @Get()
    async getUserByToken(@Headers() header: any) : Promise<User> {
        let userAux = await this.UserService.getUserByToken(header.token);
        userAux.senha = undefined;
        return userAux;
    }

}
