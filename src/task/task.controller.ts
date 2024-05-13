import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('task')
@Controller('/task')
export class TaskController {

    constructor(private taskService: TaskService) { }

    @ApiOperation({summary: "create a new task"})
    @ApiResponse({status: 200, description: "get all task"})
    @ApiResponse({status: 400, description: "Forbidden"})
    @Get()
    getAllTask(@Query() query: any) {
        console.log(query);
        return this.taskService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id', ParseIntPipe) id: number) {
        return this.taskService.getTask(id);
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
