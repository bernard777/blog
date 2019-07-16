import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() createAt: Date;
  @Input() PostLoveIts: number;
  @Input() indexOfPost: number;


  constructor(private postService: PostService) {
   }

  ngOnInit() {
  }

  onLoveIts() {
    this.postService.LoveIts(this.id, this.PostLoveIts += 1);
    console.log(this.PostLoveIts);
  }

  onDontLoveIts() {
    this.postService.dontLoveIts(this.id, this.PostLoveIts -= 1);
    console.log(this.PostLoveIts);
  }

  getColor() {
    if (this.PostLoveIts < 0) {
      return 'red';
    } else if (this.PostLoveIts > 0) {
      return 'green';
    }
  }

  onDelete() {
    this.postService.deletePost(this.indexOfPost);
  }

}
