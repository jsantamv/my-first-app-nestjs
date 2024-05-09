import { Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Query } from '@nestjs/common';
import { ValidateusersPipe } from './pipes/validateusers/validateusers.pipe';


@Controller('hello')
export class HelloController {

    @Get()
    getHello(): string {
        return 'Hello World!';
    }

    /**Esto para parsear el numero como numero */
    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        console.log(typeof num);
        return num + 14;
    }

    @Get('active/:status')
    getActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status);
        return status;
    }

    @Get('greet')
    greet(@Query(ValidateusersPipe) query: { name: string, age: number }) {
        console.log(query);
        return `Hello ${query.name} your age is ${query.age} years old`;
    }
}
