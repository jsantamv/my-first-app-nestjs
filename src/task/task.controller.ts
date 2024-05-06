import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';


@Controller('task')
export class TaskController {

    taskService: TaskService;

    constructor(taskService: TaskService) {
        this.taskService = taskService;
    }

    @Get('/')
    getAllTask(): object {
        return this.taskService.getTask();
    }
}
