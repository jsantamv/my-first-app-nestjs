import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

/**Debemos defeinir los services dentro del 
 * modulo el servicio es providers
 */
@Module({
  controllers: [TaskController],
  providers:[TaskService]
})
export class TaskModule {}