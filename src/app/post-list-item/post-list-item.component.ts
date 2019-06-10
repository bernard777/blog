import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() PostListItemComponent: any;
  @Input() PostLoveIts: number;


  constructor() {
   }

  ngOnInit() {
  }

  onLoveIts() {
    this.PostLoveIts += 1;
    console.log(this.PostLoveIts);
  }

  onDontLoveIts() {
    this.PostLoveIts -= 1;
    console.log(this.PostLoveIts);
  }

  getColor() {
    if (this.PostLoveIts < 0) {
      return 'red';
    } else if (this.PostLoveIts > 0) {
      return 'green';
    }
  }

}
