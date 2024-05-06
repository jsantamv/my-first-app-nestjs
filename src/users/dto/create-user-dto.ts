import { IsString, IsEmail, IsNotEmpty, MinLength, IsNumber, Max } from 'class-validator';

export class CreateUserDto {

    id: number

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    password: string;


    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Max(100)
    age: number;
}