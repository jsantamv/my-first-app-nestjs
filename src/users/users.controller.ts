import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { get } from 'http';
import { X509Certificate } from 'crypto';

@Controller('users')
export class UsersController {

    usersServices : UsersService;

    constructor(usersServices: UsersService){
        this.usersServices = usersServices;
    }

    @Get("/getUsers")
    getUsers(){
        console.log("hola mundo");
        return this.usersServices.getUsers();
    }
}
