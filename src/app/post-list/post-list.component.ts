import { PostListItemComponent } from './../post-list-item/post-list-item.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  post = [
    {
     title: 'Mon premier post',
     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias Lorem ipsum dolor sit amet consectetur adipisi',
     loveIts: 0,
     created_at: new Date()
    },
    {
     title: 'Mon deuxieme post',
     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias Lorem ipsum dolor sit amet consectetur adipisi',
     loveIts: 0,
     created_at: new Date()
    },
    {
     title: 'Encore un post',
     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias Lorem ipsum dolor sit amet consectetur adipisi',
     loveIts: 0,
     created_at: new Date()
    }
 ];

  constructor() { }

  ngOnInit() {
  }
}
