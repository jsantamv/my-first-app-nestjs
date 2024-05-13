import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor(private usersServices: UsersService) {}

    @ApiTags('users')
    @Get()
    getUsers() {        
        return this.usersServices.getUsers();
    }

    @ApiTags('users')
    @Post()
    createUser(@Body() user: CreateUserDto){
        return this.usersServices.createUser(user);
    }


}
