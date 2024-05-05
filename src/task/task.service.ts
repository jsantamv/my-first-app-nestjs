import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
    getTask() {
        return [
            {
                "dato":1,
                "llave":"llave"
            },
            {
                "dato":2,
                "llave":"llave2"
            }
        ]
    }
}