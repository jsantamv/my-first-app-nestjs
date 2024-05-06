import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto, UpdateTaskDto } from './dto';

@Injectable()
export class TaskService {

    private tasks: CreateTaskDto[] = [];

    getTasks(): CreateTaskDto[] {
        return this.tasks;
    }

    getTask(id: number): any {
        const task = this.tasks.find(task => task.id === id)
        
        if (!task){
            return new NotFoundException(`task id ${id} not found`);
        }

        return task;
    }

    createTask(task: CreateTaskDto): CreateTaskDto {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task;
    }

    updateTask(task: UpdateTaskDto) {
        return 'Update tareas'
    }

    deleteTask() {
        return 'delete tareas'
    }

    putTask() {
        return 'update tareas'
    }

    patchTask() {
        return 'partial update tareas'
    }
}