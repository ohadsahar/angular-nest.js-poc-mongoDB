import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { taskSchema } from './models/task.model';
import { TaskService } from './services/task.service';
import { TaskController } from './task.controller';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Task', schema: taskSchema}])],
    controllers: [TaskController],
    providers: [TaskService],
})
export class TaskModule {}
