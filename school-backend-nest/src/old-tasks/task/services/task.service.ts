import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TaskDto } from './../dto/create-task.dto';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private readonly taskSchema: Model<TaskDto>) { }

    async createTask(taskData: TaskDto) {
        const newTask = new this.taskSchema({ title: taskData.title, content: taskData.content });
        const result = await newTask.save();
        const task = {
            id: result._id,
            title: result.title,
            content: result.content,
        };
        return task;
    }

    async getTasks() {
        const allTasks = await this.taskSchema.find().exec();
        return allTasks.map(task => ({
            id: task._id,
            title: task.title,
            content: task.content,
        }));
    }
}
