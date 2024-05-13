import { IsString, IsEmail, IsNotEmpty, MinLength, IsNumber, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    id: number

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ example: 'hi@history.com', description: 'Email' })
    email: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    @ApiProperty({ example: "123456", description: 'The Password' })
    password: string;


    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: "my name", description: 'The name' })
    name: string;

    @IsNumber()
    @Max(100)
    @ApiProperty({ example: 35, description: 'The age' })
    age: number;
}