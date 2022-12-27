import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PagginationService } from 'src/app/shared/services/paggination.service';
import { Post } from '../models/post';
import { PostApiService } from './post-api.service';
import { PostStorageService } from './post-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class PostFacadeService {
    constructor(
        private postApi: PostApiService,
        private postStorage: PostStorageService,
        private pagginationService: PagginationService) {}
    
      get posts$() {
        return this.postStorage.posts$;
      }

      get(page: number, option: string) {
        let opt: number;
        switch(option) {
          case 'newest':
            opt = 1; 
            break;
          case 'popular':
            opt = 2;
            break;
          default:
            opt = 0;
        }
        this.postApi.get(page, opt).subscribe(data => {
          this.postStorage.set(data.posts)
          this.pagginationService.setPagginationData({page: data.page, totalCount: data.totalCount, totalPages: data.totalPages});
        });
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
}