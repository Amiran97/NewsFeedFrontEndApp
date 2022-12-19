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
    
      create(data: any) : Observable<Post> {
        return this.postApi.create(data).pipe(
          tap(data => this.postStorage.create(data))
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