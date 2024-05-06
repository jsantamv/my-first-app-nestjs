import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersServices: UsersService) {}

    @Get("/")
    getUsers() {
        console.log("hola mundo");
        return this.usersServices.getUsers();
    }
}
