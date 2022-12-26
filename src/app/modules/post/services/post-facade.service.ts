import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Post } from '../models/post';
import { PostApiService } from './post-api.service';
import { PostStorageService } from './post-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class PostFacadeService {
    constructor(
        private postApi: PostApiService,
        private postStorage: PostStorageService) { 
          this.load();
      }
    
      get posts$() {
        return this.postStorage.posts$;
      }

      getById(id: number) : Observable<Post> {
        return this.postApi.getById(id);
      }
    
      create(data: any) : Observable<Post> {
        return this.postApi.create(data).pipe(
          tap(data => this.postStorage.create(data))
        );
      }
      
      update(id: number, data: any) : Observable<Post> {
        return this.postApi.update(id, data).pipe(
          tap(data => this.postStorage.update(data))
        );
      }

      delete(id: number) : Observable<number> {
        return this.postApi.delete(id).pipe(
          tap(id => this.postStorage.delete(id))
        );
      }

      like(id: number) : Observable<Post> {
        return this.postApi.like(id).pipe(
          tap(data => this.postStorage.update(data))
        );
      }

      dislike(id: number) : Observable<Post> {
        return this.postApi.dislike(id).pipe(
          tap(data => this.postStorage.update(data))
        );
      }

      private clear() {
        this.postStorage.set([]);  
      }

      private load() {
        this.postApi.get(1)
          .subscribe(data => this.postStorage.set(data.posts));
      }
}