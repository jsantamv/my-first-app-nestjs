import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            "name": "Juan Carlos",
            "id":123,
            "phone":"8706-4086"
        },
        {
            "name": "Juan Doe",
            "id":124,
            "phone":"8706-4085"
        },
        {
            "name": "Jhon Doe",
            "id":125,
            "phone":"8706-4084"
        },
    ]

    getUsers() {
        return this.users;
    }
}
