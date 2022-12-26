import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentApiService {

  private readonly apiUrl: string = environment.COMMENT_API_URL;
  private readonly likeApiUrl: string = environment.COMMENT_LIKE_API_URL;

  constructor(private apiService: ApiService) { }

  getByPostId(id: number) : Observable<Comment[]> {
    return this.apiService.get<Comment[]>(`${this.apiUrl}/${id}`);
  }

  create(id: number, data: any) : Observable<Comment> {
    return this.apiService.post<Comment>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number) : Observable<number> {
    return this.apiService.delete<number>(`${this.apiUrl}/${id}`);
  }

  like(id: number) : Observable<Comment> {
    return this.apiService.post<Comment>(`${this.likeApiUrl}/like/${id}`);
  }

  dislike(id: number) : Observable<Comment> {
    return this.apiService.post<Comment>(`${this.likeApiUrl}/dislike/${id}`);
  }
}