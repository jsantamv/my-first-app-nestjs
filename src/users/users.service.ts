import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    private users: CreateUserDto[] = [];

    getUsers() {
        return this.prisma.user.findMany();
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({
            data,
        });
    }
}
