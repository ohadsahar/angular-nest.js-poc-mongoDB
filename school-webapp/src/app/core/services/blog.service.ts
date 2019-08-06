import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from 'src/app/shared/models/blog.model';
import { environment } from './../../../environments/environment';


const backendUrl = environment.backendUrl;

@Injectable({ providedIn: 'root' })
export class BlogService {

  constructor(private http: HttpClient) { }

  register(blogData: BlogModel) {
    return this.http.post<{ message: BlogModel }>(backendUrl, blogData);
  }
  get() {
    return this.http.get<{ message: BlogModel }>(backendUrl);
  }
  delete(blogid: string) {
    return this.http.delete<{ message: BlogModel }>(`${backendUrl}/${blogid}`);
  }
}
