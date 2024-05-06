import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from './dto';

@Controller('/task')
export class TaskController {

    constructor(private taskService: TaskService) { }

    @Get()
    getAllTask(@Query() query: any) {
        console.log(query);
        return this.taskService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        return this.taskService.getTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task: CreateTaskDto) {
        return this.taskService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto): string {
        return this.taskService.updateTask(task);
    }

    @Delete()
    deleteTask(): string {
        return this.taskService.deleteTask();
    }

    @Patch()
    updateTaskPatch(): string {
        return this.taskService.patchTask()
    }
}
