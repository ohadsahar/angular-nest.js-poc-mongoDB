import { BlogModel } from './../../../../../school-backend-nest/src/blog/models/blog.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";

const backendUrl = environment.backendUrlOldTasks;
@Injectable({providedIn: 'root'})
export class TaskService {

  constructor(private http: HttpClient) {}

  createTask(taskData: BlogModel) {
    return this.http.post<{message: BlogModel}>(backendUrl, taskData);
  }
  getOldTasks() {
    return this.http.get<{message: BlogModel[]}>(backendUrl);
  }
}
