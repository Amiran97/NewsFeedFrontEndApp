import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentStorageService {
  private comments: BehaviorSubject<Array<Comment>>;
  
  constructor() {
    this.comments = new BehaviorSubject(new Array<Comment>());
  }

  get comments$() {
    return this.comments.asObservable();
  }

  set(comments: Array<Comment>) {
    this.comments.next(comments);
  }

  create(comment: Comment) {
    this.comments.next([comment, ...this.comments.getValue()]);
  }

  delete(id: number) {
    _.remove(this.comments.getValue(), comment => comment.id === id);
    this.comments.next(this.comments.getValue());
  }
}