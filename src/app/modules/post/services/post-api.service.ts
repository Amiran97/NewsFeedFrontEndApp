import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { PostsResponse } from '../models/posts-response';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  private readonly apiUrl: string = environment.POST_API_URL;
  private readonly likeApiUrl: string = environment.POST_LIKE_API_URL;

  constructor(private apiService: ApiService) { }

  get(page: number) : Observable<PostsResponse> {
    return this.apiService.get(`${this.apiUrl}?page=${page}`);
  }

  getById(id: number) : Observable<Post> {
    return this.apiService.get(`${this.apiUrl}/detail/${id}`);
  }

  create(data: any) : Observable<Post> {
    return this.apiService.post<Post>(`${this.apiUrl}`, data);
  }

  update(id: number, data: any) : Observable<Post> {
    return this.apiService.put<Post>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number) : Observable<number> {
    return this.apiService.delete<number>(`${this.apiUrl}/${id}`);
  }

  like(id: number) : Observable<Post> {
    return this.apiService.post<Post>(`${this.likeApiUrl}/like/${id}`);
  }

  dislike(id: number) : Observable<Post> {
    return this.apiService.post<Post>(`${this.likeApiUrl}/dislike/${id}`);
  }
}