import { Injectable } from '@nestjs/common';
import { Task } from './tasks.models';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  public getAllTasks(): Task[] {
    return this.tasks;
  }
}
