import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './shared/user.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        UsersModule,
    ],
    controllers: [UsersController],
    providers: [UserService],
    exports: [UserService]
})
export class UsersModule { }
