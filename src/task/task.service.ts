import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
    getTask() {
        return ['task1','task4','task3','task2']
    }
}