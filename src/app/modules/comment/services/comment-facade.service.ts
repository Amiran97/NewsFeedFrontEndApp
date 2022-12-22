import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Comment } from '../models/comment';
import { CommentApiService } from './comment-api.service';
import { CommentStorageService } from './comment-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class CommentFacadeService {
    constructor(
        private commentApi: CommentApiService,
        private commentStorage: CommentStorageService) {}
    
      get comments$() {
        return this.commentStorage.comments$;
      }

      getByPostId(id: number) : Observable<Comment[]> {
        return this.commentApi.getByPostId(id).pipe(
          tap(data => this.commentStorage.set(data))
        );
      }
    
      create(id: number, data: any) : Observable<Comment> {
        return this.commentApi.create(id, data).pipe(
          tap(data => this.commentStorage.create(data))
        );
      }
      
      delete(id: number) : Observable<number> {
        return this.commentApi.delete(id).pipe(
          tap(id => this.commentStorage.delete(id))
        );
      }

      private clear() {
        this.commentStorage.set([]);  
      }
}