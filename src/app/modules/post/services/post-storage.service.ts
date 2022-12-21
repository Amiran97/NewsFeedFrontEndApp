import { Injectable } from '@angular/core';
import * as _ from 'lodash';
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

  delete(id: number) {
    _.remove(this.posts.getValue(), post => post.id === id);
    this.posts.next(this.posts.getValue());
  }
}