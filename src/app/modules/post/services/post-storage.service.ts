import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostStorageService {
  private posts: BehaviorSubject<Array<Post>>;
  
  constructor() {
    this.posts = new BehaviorSubject(new Array<Post>());
  }

  get posts$() {
    return this.posts.asObservable();
  }

  set(posts: Array<Post>) {
    this.posts.next(posts);
  }

  create(post: Post) {
    this.posts.next([post, ...this.posts.getValue()]);
  }  
}