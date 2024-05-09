import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    TaskModule,
    ProjectsModule,
    AuthModule,
    UsersModule,
    PaymentsModule
  ],
  controllers: [HelloController],
})
export class AppModule {}
