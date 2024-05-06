import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    usersServices: UsersService;

    constructor(usersServices: UsersService) {
        this.usersServices = usersServices;
    }

    @Get("/getUsers")
    getUsers() {
        console.log("hola mundo");
        return this.usersServices.getUsers();
    }
}
