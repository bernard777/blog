import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value['title'];
    const content = form.value['content'];
    this.postService.addPost(title, content);
    this.router.navigate(['/posts']);
  }

}
