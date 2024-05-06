import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers() {
        return ["user1","user5","user4","user3","user2"]
    }
}
