import { MessageService } from '../../services/message.service';
import { BlogService } from '../../services/blog.service';


import { BlogModel } from './../../../shared/models/blog.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  blogData = new BlogModel(null, '', '');
  blogArray: BlogModel[];

  constructor(private blogService: BlogService, private messageService: MessageService) {
    this.blogArray = [];
  }

  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent() {
    this.blogService.get().subscribe(response => {
      this.blogArray = response as any;
    }, (error) => {
      this.messageService.message(error, 'Dismiss');
    });
  }
  submitNewBlog() {
    if (this.blogData) {
      this.blogService.register(this.blogData).subscribe(response => {
        this.blogArray.push(response as any);
      }, (error) => {
        this.messageService.message(error, 'Dismiss');
      });
    }
  }
  deleteBlog(blogid: string) {
    this.blogService.delete(blogid).subscribe(response => {
      if (response) {
        this.blogArray = this.blogArray.filter(blog => blog.id !== blogid);
      }
    }, (error) => {
      this.messageService.message(error, 'Dismiss');
    }
    );
  }
}
