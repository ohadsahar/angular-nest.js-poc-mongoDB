import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskDto } from './dto/create-task.dto';
import { TaskService } from './services/task.service';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Get()
    async getAll() {
        try {
            const resultOfAllTasks = await this.taskService.getTasks();
            return { message: resultOfAllTasks, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Post()
    async create(@Body() createTaskDto: TaskDto) {
        try {
            const resultOfRegister = await this.taskService.createTask(createTaskDto);
            return { message: resultOfRegister, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
