import { Controller, Get } from '@nestjs/common';


@Controller('task')
export class TaskController {
    
    @Get('/getAllTask')
    getAllTask() {
        return {
            "data":"valor",
            "tarea":234
        }
    }
}
