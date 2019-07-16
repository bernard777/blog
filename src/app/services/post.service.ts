import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

    postSubject = new Subject<any[]>();

    private post = [];

     constructor(private httpClient: HttpClient) {}

     emitPostSubject() {
         this.postSubject.next(this.post.slice());
     }

     addPost(title: string, content: string) {
        const postObject = {
            id: 0,
            title: '',
            content: '',
            loveIts: 0,
            createAt: new Date()
        };
        postObject.id = this.post[(this.post.length - 1)].id + 1;
        postObject.title = title;
        postObject.content = content;
        postObject.loveIts = 0;
        this.post.push(postObject);
        this.emitPostSubject();
     }

     getPostById(id: number) {
        const post = this.post.find(
            (postObject) => {
                return postObject.id === id;
            }
        );
        return post;
    }

    LoveIts(index: number, loveNum: number) {
      const unPost = this.getPostById(index);
      unPost.loveIts = loveNum;
      this.emitPostSubject();
    }

    dontLoveIts(index: number, dontloveNum: number) {
      const unPost = this.getPostById(index);
      unPost.loveIts = dontloveNum;
      this.emitPostSubject();
    }

    deletePost(index: number) {
        const unPost = this.getPostById(index);
        this.post.splice( (unPost.id - 1) , 1);
        this.emitPostSubject();
    }

    savePostToServer() {
        this.httpClient
          .put('https://post-58ca4.firebaseio.com/posts.json', this.post)
          .subscribe(
            () => {
              console.log('Enregistrement terminé !');
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
    }

    getPostFromServer() {
        this.httpClient
          .get<any[]>('https://post-58ca4.firebaseio.com/posts.json')
          .subscribe(
            (response) => {
              this.post = response;
              this.emitPostSubject();
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
    }
}
