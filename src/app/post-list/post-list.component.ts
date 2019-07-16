import { PostService } from './../services/post.service';
import { PostListItemComponent } from './../post-list-item/post-list-item.component';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: any[];
  postSubscription: Subscription;

  constructor( private postService: PostService ) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (post: any[]) => {
        this.posts = post;
      }
    );
    this.postService.emitPostSubject();
  }

  onSave() {
    this.postService.savePostToServer();
  }

  onFetch() {
    this.postService.getPostFromServer();
  }
}
