import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.models';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
}
