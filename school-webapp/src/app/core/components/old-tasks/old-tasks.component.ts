import { Component, OnInit } from '@angular/core';
import { BlogModel } from './../../../shared/models/blog.model';
import { TaskService } from './../../services/task.service';



@Component({
  selector: 'app-old-task',
  templateUrl: './old-tasks.component.html',
  styleUrls: ['./old-tasks.component.css']
})
export class OldTasksComponent implements OnInit {
  public allTasks: BlogModel[];
  constructor(private taskService: TaskService) {
    this.allTasks = [];
  }
  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent() {
    const data = { id: null, title: 'Ohad sahar', content: 'Sahar' };
    this.taskService.createTask(data).subscribe(response => {
    });
    this.taskService.getOldTasks().subscribe(response => {
      this.allTasks = response.message;
    });
  }
}
