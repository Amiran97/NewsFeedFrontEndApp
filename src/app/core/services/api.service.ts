import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private readonly apiUrl: string = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}/${url}`);
  }

  post<T>(url: string, params?: any): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}/${url}`, params);
  }

  put<T>(url: string, params?: any): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}/${url}`, params);
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.apiUrl}/${url}`);
  }
}
